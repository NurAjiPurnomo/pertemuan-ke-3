let a : String = "ndungaji"
console.log(a);

//implisit
let x: number = 90;
var y: string = "plugin"
console.log(x,y);

//implisit
let k = 20
let o = "web"
console.log(k,o);

//tipe data any
let kelas: any;
kelas = true;
console.log(kelas);

//union
let mouse : number;
mouse = 20;
console.log(mouse);

//aliases
type ID = number;

let userID: ID;
userID = 69;
console.log(mouse)

//void
function oke(name: string): void {
    console.log(`Hello, ${name}!`);

}
oke("ndungaji");

//square bracket

let list : number[]
list = [1,2,3,4]

//generic array
let list1 : Array<number>;
list1 = [1,2,3,4]
console.log(list, list1);

//tuple
let person: [string, number];
person = ["ndungaji", 20];
console.log(person);

//object
let person1 : {
    name :string,
    age : number,
    address : string
}
person1= {
    name : "ndungaji",
    age : 28,
    address : "tegal"
}
console.log(person1);

for (let i =0; i<5; i++){
    console.log(`Loop ke ${i + 1}`);
}

//while loop
let counter: number = 0;
while (counter <=5){
    counter++
    console.log(counter);
}

let nilai = 90
if (nilai > 75){
    console.log
}