const radius =[1,2,3,4]

const area = function (radius) {
	return Math.floor(Math.PI * radius * radius)
}
const circumference = function (radius) {
	return Math.floor(2 * Math.PI * radius)
}

const calculate = function  (radius,logic) {
	const output = []
	for (let i = 0; i < radius.length; i++) {
		output.push(logic(radius[i]))
	}
	return output
}

console.log(calculate(radius,area))
console.log(calculate(radius,circumference))

