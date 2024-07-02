function sapa(nama:string){
    console.log("Halo, aku" + nama);
}
sapa("ndungaji")
function calculate (a:number, b:number, c:number):number{
    return a + b + c
}
let hasil : number = calculate(3, 5, 1)
console.log("Hasil Penjumlahan: " + hasil);
let multiplication = (x:number, y:number) => {
    return x * y
}
let result = multiplication(5,8)
console.log("hasil perkalian: "+ result);

const cube = function(num:number){
    return num ** 3
}
console.log(cube(3));

let person2 : {
    name: string,
    age:number,
    address:string
}
person2 = {
    name: "ndungaji",
    age:20,
    address:"tegal"
}
console.log(person2);