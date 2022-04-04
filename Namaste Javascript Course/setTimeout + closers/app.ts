// after each 1 sec
// 6
// 6
// 6
// 6
// 6


function z(){
    for (var i =1 ; i<= 5; i++){

        setTimeout(()=> {
            console.log(i)
        },i *1000)
        
    }
}
z()
function x() {
	for(var i = 1; i<= 5;i++){
	function close(i){
	
	setTimeout(()=> {
		console.log(i)
	},i* 1000)
	}
	close(i)
	}
		
	console.log('pintu sahoo ')
}
x()

function y() {
	for(let i = 1; i<= 5;i++){
		
	setTimeout(()=> {
		console.log(i)
	},i* 1000)
	}
	console.log('pintu sahoo ')
}
y()