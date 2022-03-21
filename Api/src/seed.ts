import axios from 'axios'
import cheerio from 'cheerio'
import mysql from 'mysql'


// Database connetion wiht mysql planetscale
const connetionString = process.env.DATABASE_URL || '';
const connection = mysql.createConnection(connetionString);
connection.connect()


// funtion to fetch characters name
const getCharactersPageName = async() => {
    const url = "https://throneofglass.fandom.com/wiki/Category:Kingdom_of_Ash_characters"
    const {data } =await axios.get(url)

    const $ = cheerio.load(data)
    const catagories = $('ul.category-page__members-for-char');

    
    const charactersPageNames = []
    
    for(let i = 0 ; i< catagories.length ; i++){
        const  ul = catagories[i]

        const charactersLIs = $(ul).find('li.category-page__member');

        for(let j= 0; j< charactersLIs.length ; j++){
            const li = charactersLIs[j]
            const path = $(li).find('a.category-page__member-link').attr('href') 
            const name = path?.replace('/wiki/','')
            charactersPageNames.push(name)
            // console.log(name)
        }
    }

    return charactersPageNames


}
const getCharacterInfo = async(characterName:any ) =>{
     const baseUrl = 'https://throneofglass.fandom.com/wiki/'
     const {data} = await axios.get(baseUrl+characterName)
     const $ = cheerio.load(data)

     let name = $('h2[data-source="name"]').text()
     const species = $('div[data-source="species"]>div.pi-data-value.pi-font').text()
     const image = $('.image.image-thumbnail > img').attr('src')

     if(!name) {
         name = characterName.replace('_','')
         
     }
     const characterInfo = {
         name,species,image
     }
return characterInfo
    //  console.log(species)
    //  console.log(name)
    // console.log(image)
}

const loadCharacters =async () => {
    const charactersPageNames = await getCharactersPageName()
    const characterInfoPromises = charactersPageNames.map((characterName)=>getCharacterInfo(characterName))
    const characters = await Promise.all(characterInfoPromises)

    console.log(characters)
    const values = characters.map((character,i)=>[i,character.name,character.species,character.image] )

    const sql = "INSERT INTO Characters (id,name,species,image) VALUES ? "

    connection.query(sql,[values],(err)=> {
        if(err){
            console.error("AHHH it didn't work")
            console.log(err)
        }else{

            console.log('Yahh db is populated')
        }
    })

    // const characterInfoArr =[]
    // for(let i = 0 ; i<charactersPageNames.length; i++){
    //     const characterInfo = await getCharacterInfo(charactersPageNames[i])
    //     characterInfoArr.push(characterInfo)

    // }
    // console.log(characterInfoArr)
    
}
loadCharacters()