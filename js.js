var a = 10;
let b = 20;
const c = 30;



var X = () => {
	alert('RAJU');
}




function Y(x){
	alert(x.target.value);
}


var d = {firstName:"raju", lastname:"gaddam", age:30}
console.log(d);
console.log(d.firstName);

d.place="hyd";
console.log(d.place);

delete d.age;
console.log(d);

console.log(d.hasOwnProperty("firstName"))