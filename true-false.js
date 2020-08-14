// 0 bade onno kisu true dekhabe
const age = 0;
if(age){
    console.log("it is true");
}
else{
    console.log("it is false");
}
// string

const name = "solaiman khan";
if(name.length > 0){
    console.log("it is true");
}
else{
    console.log("it is false");
}

const value = "";
if(value){
    console.log("it is true");
}
else{
    console.log("it is false");
}
// string er majhe gap dile true dekhabe
const gap = " ";
if(gap){
    console.log("it is true");
}
else{
    console.log("it is false");
}

// null hole wrong dekhabe false dekhabe
// undefined hole false dekhabe

let Name = null;
if(Name){
    console.log("it is right");
}
else{
    console.log("it is wrong");
}

let number = NaN;
if(number){
    console.log("it's true");
}
else{
    console.log("it's false");
}
let result = false;
if(result){
    console.log("it's true");
}
else{
    console.log("it is false");
}
// 0
// ""
// undefined
// null
// false
// NaN sob gulor jonno false hobe
// truthy "0", " ",[],{}