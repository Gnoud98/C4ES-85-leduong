// console.log("Câu 1--Let/var/const");
// console.log("1, var và const đều là các biến dùng để khai báo trong JS");
// console.log("2, Các điểm khác nhau giữa var và let :");
// console.log("- var khai báo là phạm vi toàn cầu hoặc phạm vi chức năng trong khi let được khai báo phạm vi khối xác định bởi cặp {}.");
// console.log("- var: các biến có thể được cập nhật và khai báo lại trong phạm vi của nó; let :các biến có thể được cập nhật nhưng không được khai báo lại");
// console.log("3, Điểm khác nhau giữa let và const");
// console.log("- const: là từ khóa định nghĩa 1 biến sẽ là hằng số. Biến const lưu trữ giá trị không thể thay đổi được trong suốt vòng đời của biến,còn với let thì giá trị có thể thay đổi được. ");
// console.log("4,var: Được sử dụng trong phạm vi rộng, biến dùng được bên ngoài scope");
// console.log("let: phạm vi hoạt động bên trong scope, có thể thay đổi giá trị của biến");
// console.log("const : khi muốn khai báo con số chính xác và không muốn có sự thay đổi");
// console.log("Câu 2--Boolean");
// console.log("1,Boolean thường được sử dụng để lưu trữ các giá trị có / không");
// console.log("2, Kết quả của Boolean trả về 2 giá trị True hoặc False");
// console.log("Câu 3");
// console.log("a, 7 numbers, starting from 0 (no user input)")
// for (let x = 0; x < 7; x++) {
//     console.log(x);
// }
// console.log("b.	n numbers, starting from 0, n entered by user");
// let x = prompt('Nhập n');
// for (let y = 0; y < x; y++) {
//     console.log(y);
// }
// console.log("c,	A sequence of numbers, starting from 3, ending before n, n entered by user");
// let x = prompt("Nhập n :");
// for (let y = 3; y < x; y++) {
//     console.log(y)
// }
// console.log("d.	A sequence of numbers, starting from c, ending before n, c and n entered by user")
// let x = prompt("Nhập số đầu tiên :");
// let y = prompt("Nhập số thứ 2");
// for (let z = y; z < x; z++) {
//     console.log(z);
// }
// console.log("e.	A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user");
// let x = Number(prompt("Nhập số thứ nhất:"));
// let y = prompt("Nhập số thứ 2:");
// for (let z = x; z < y; z += 3) {
//     console.log(z);
// }
// console.log("f.	A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user");
// let x = Number(prompt("Nhập số bắt đầu"));
// let y = Number(prompt("Nhập khoảng cách giữa các số"));
// let z = prompt("Nhập số kết thúc");
// for (let i = x; i < z; i += y) {
//     console.log(i)
// }
// console.log("Câu 4;	Write a program to calculate the factorial of n");
// let x = Number(prompt("Nhập vào số bạn muốn tính giai thừa:"));
// let z = 1;
// for (let y = 1; y < x; x++) {
//     z = z * y;
//     alert(z);
// }
// console.log('5. Kiểm tra xem đủ tuổi 14:');
// let age = prompt('Enter age: ');
// if(age < 14)
// {
//     alert('Chưa đủ tuổi!');
// }
// else{
//     alert('hợp lệ');
// }
// console.log('6. Kiểm tra x: ')
// let x = prompt('Enter x');
// if(x <=4)
// {
//     alert(x+ " is lower half of 9");
// }
// else{
//     alert(x+ " is higher half of 9");
// }
// console.log('7. Kiểm tra lower và higher half của số nhập vào: ');
// let x = prompt('Enter x: ');
// let n = prompt('Enter n: ');

// if(x<(n/2))
// {
//     alert(x + " is lower half of "+ n);
// }
// else
// {
//     alert(x + " is higher half of "+ n);
// }
// console.log('8. Kiểm tra số nhập vào là chẵn hay lẻ: ')
// let a = prompt('Enter number: ');
// if(a%2 == 0)
// {
//     alert(a+ " is even number.");
// }
// else{
//     alert(a+ " is odd numeber.");
// }
// console.log('Bài 9: Chương trình in L và H');
// console.log('A. L + H = 6')

//     for(let i=0;i<(6/2);i++)
//     {
//         console.log('L');
//     }
//     for(let i=0;i<(6/2);i++)
//     {
//         console.log('H');
//     }
// console.log('B. User nhập tổng L và H ')
// let num=Number(prompt('Enter total number of L and H: ')) ;
// if(num%2==0)
// {
//     for(let i=0;i<(num/2);i++)
//     {
//         console.log('L');
//     }
//     for(let i=0;i<(num/2);i++)
//     {
//         console.log('H');
//     }
// }
// else
// {
//     let a = num/2;
//     let b = (num%2)/2;
//     let h = a-b;
//     for(let i=0; i<(num-h); i++)
//     {
//         console.log('L');
//     }
//     for(let i=0; i<h; i++)
//     {
//         console.log('H');
//     }
// }
// console.log('C. In ra 1 và 0 lần lượt trong 8 lần')
// for(let i=0; i<8/2;i++)
// {
//     console.log(0);
//     console.log(1);
// }
// console.log('D. In ra 1 và 0 theo số lần người dùng nhập:')
// let a = Number(prompt('Enter number: '));
// if(a%2==0)
// {
//     for(let i=0; i<a/2;i++)
//     {
//         console.log(0);
//         console.log(1);
//     }
// }
// else{
//     for(let i=0; i<(a/2-1);i++)
//     {
//         console.log(0);
//         console.log(1);
//     }
//     console.log(0);
// }
// console.log('Bài 10: Tính BMI:');
// let weight = prompt('Enter Weight:');
// let height = Number(prompt('Enter Height in cm: '))/100;
// let a = alert('Your BMI is '+ (weight/(height*height)));
// if(a<16)
// {
//     alert('You are severely underweight');
// }
// else if(a>=16 &&a<18.5)
// {
//     alert('You are underweight');
// }
// else if(a>=18.5 &&a<25)
// {
//     alert('You are normal');
// }
// else if(a>=25 &&a<30)
// {
//     alert('You are overweight');
// }
// else if(a>30)
// {
//     alert('You are obese');
// }
// console.log('Chương trình tính nghiệm 3 số a,b,c: ');
// let a = prompt('Enter a: ');
// let b= prompt('Enter b:');
// let c = prompt('Enter c: ');
// let delta = (b*b)-(4*a*c);
// if(delta>0)
// {
//     alert('Phương trình có 2 nghiệm phân biệt');
// }
// else if(delta<0)
// {
//     alert('Phương trình vô nghiệm');
// }
// else
// {
//     alert('Phương trình có 1 nghiệm duy nhất');
// }