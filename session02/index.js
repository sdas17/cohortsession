// let rectangle = {
//     length: 1,
//     breadth: 2,
//     height: 4,
//     data :function data(){
//       return this.length
//     }
// };

// console.log(rectangle.data())

// class Rectangle {
//     constructor(height, width, color) {
//         this.height = height;
//         this.width = width;
//         this.color = color;
//     }

//      area() {
//         const area = this.width * this.height;
//         return area;
//     }
//     name() {
//         return `${this.color} is my reactnagle name `
//     }
// }

// let data = new Rectangle(1, 3, "subha");
// let dsata = data.area();
// let dsata2 = data.name();

// console.log(dsata,dsata2); 
// const now = new Date(); 
// console.log(now.getFullYear()); 


// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 30);
// let fullName= map.get('name')
// console.log(fullName);

// function waitfor3sec(resolved){
//     return setTimeout(resolved,4000)
// }
// function inter(){
//     console.log('welcome');
    
// }
// waitfor3sec(inter)
// function sum(a,b){
//     return a+b
// }
// function mutltipe(a,b){
//     return a*b
// }
// const demodata =((a,b,op)=>{
//     return op(a,b)
// });
// console.log(demodata(1,2,sum))

function random(resolved){
    setTimeout(resolved,3000)

}
const P = new Promise(random);
function callback(){
    console.log('Promise succeded');
    
}
P.then(callback)