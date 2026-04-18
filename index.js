let name='Maya';
let age=20;
for(let i=0;i<5;i++){
    console.log("number:"+i);
}
if (age>18) {
    console.log("you are an adult");

}
else{
    console.log("you are young");
}
console.log("my name is"+" "+name);
console.log("i am "+" "+age +" "+"years old");

sayHello("Maya");
sayHello("John");

let names =[" Maya","John","Sarah"];
function printNamesStartingWithS(list){
    for (let i=0;i<list.length;i++){
        if(list[i][0]==='S'){
            console.log(list[i]);
        }
    }
}
printNamesStartingWithS(names);




























