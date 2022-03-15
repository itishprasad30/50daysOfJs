import { readdir, readdirSync } from "fs";
import { join } from "path";

async function getFile<T extends string> (type:T) {
    // gives a array of files
    const files = readdirSync(join(process.cwd(), 'src','newFolder'));
    let allposts =[]
    return files.reduce((allposts, file) => {
        const post = require(join(process.cwd(), 'src','newFolder', file));
        allposts.push(post);
        return allposts;
    }))
    
}
getFile('images')