let x: number = 101;
if (x % 2 ==0){
    console.log("Even");
}else{
    console.log("Odd")
}
/////////////////////////////////////
const Product: number[] = [40, 42, 30, 70];
let ProductA: number = 65;
for (let i = 0; i < Product.length; i++){
    if (Product[i] > ProductA)
    {
        console.log(Product[i]);
    }
}
/////////////////////////////////////
let admins: any[] = [{Name: "Ayman", age: 27, isAdmin: true}, {Name: "Batool", age: 26, isAdmin: true}, {Name: "Qadomi", age: 25, isAdmin: false}];
let oldest: number = 0;
// let oldestName: string = admins[0].Name;
for (let i = 0; i < admins.length; i++){
    if (admins[i].age > oldest)
    {
        oldest = admins[i].age
        // oldestName = admins[i].name
    }
}
console.log(`The oldest admin age ${oldest}`);