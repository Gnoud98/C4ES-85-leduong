// let person = ['nam', 22, 'duong', 'vinhphuc'];
// console.log(person);
// let person = {
//     name: 'Duong'
// }
// console.log(person);
// let person = {
//     name: 'Duong',
//     age: 22,
// };
//ex1;
// let movieTitle = {
//     name: 'infinity war',
//     year: 2019,
//     rate: 9,
// };
//READ
// let person = {
//     name: 'duong',
//     age: 22,
// };
// console.log(person.name);
// let prop = 'age';
// console.log(person['name']);
//READ EX 1: cách 1 :
// let movieTitle = {
//     name: 'infinity war',
//     year: 2019,
//     rate: 9,
// };
// console.log(movieTitle);
// //cách 2:
// let movieTitle = {
//     name: 'infinity war',
//     year: 2019,
//     rate: 9,
// };
//console.log(movieTitle.name);
// console.log(movieTitle.year);
//console.log(movieTitle.rate);
// ex update 1
// let movie = {
//     name: 'mat biec',
//     year: 2019,
//     rate: 6,
// };
// movie.rate = 8.6;
// console.log(movie.rate);
// movie.rate += 0.5;
// console.log(movie.rate);
// console.log(movie);
// EX UPDATE2 ???????
// let movie = {
//     name: 'mat biec',
//     year: 2019,
//     rate: 6,
// };
// let movie = {
//     name: 'mat biec',
//     year: 2019,
//     rate: 7,
// };
// let item = ['name', 'year', 'rate']
// while (true) {
//     let n = prompt("what do you want to uppdate?");
//     if (n == item[0]) {
//         let newName = prompt("what is the update?");
//         movie.name = newName;
//         console.log(movie);
//     } else if (n == item[1]) {
//         let newYear = prompt('what is the update');
//         movie.year = newYear;
//         console.log(movie);
//     } else if (n == item[2]) {
//         let newRate = prompt("what is the update?")
//         movie.rate = newRate;
//         console.log(movie);
//     } else if (n != item) {
//         alert(n + "" + "does not exist in our data")
//         let i = prompt("Enter new data");
//         movie[n] = i;
//         console.log(movie)

//     }
// }
//CREATE
// movie.location = 'vietnam';
// console.log(movie);
// movie['age'] = '21';
// console.log(movie);
//EX CREATE
///Object Array
// let person1 = {
//     name: "Duong",
//     age: 22,
// };
// let person2 = {
//     name: "Phuong",
//     age: 19,
// };
// let person3 = {
//     name: "Huong",
//     age: 22,
// };
// let personArr = [];
// console.log(personArr);
// personArr.push(person1);
// personArr.push(person2);
// personArr.push(person3);
// console.log(personArr);
// // console.log(personArr[1]);
// // let p = personArr[0];
// // console.log(p.age);
// // console.log(personArr);
// for (let i = 0; i < personArr.length; i++) {
//     let p = personArr[i];
//     console.log(p);
// }
//ex1
// let movie1 = {
//     name: 'mat biec',
//     year: 2019,
//     rate: 8,
// };
// let movie2 = {
//     name: 'mat troi',
//     year: 2020,
//     rate: 10,
// };
// let movie3 = {
//     name: 'mat trang',
//     year: 1999,
//     rate: 6,
// };
// let movieArr = [];
// let movieArr = [];
// movieArr.push(movie1);
// movieArr.push(movie2);
// movieArr.push(movie3);

// console.log(movieArr);
// console.log(movieArr[0]);
// console.log(movieArr[2]);

// for (let i = 0; i < movieArr.length; i++) {
//     console.log(movieArr[i]);
// }

//

// for (let i = 0; i < movieArr.length; i++) {
//     console.log(movieArr[i].name);
//     console.log("Year :" + movieArr[i].year);
//     console.log("Rate :" + movieArr[i].rate);
//     console.log("----------------------------")
// }
// let n = movie3.rate;
// n += 0.7;
// console.log(n);