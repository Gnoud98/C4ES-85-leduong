console.log("Câu 1")
console.log("Trong Js, các trường hợp xảy ra lỗi bao gồm :");
console.log("1, Biến được khởi tạo bắt đầu bằng số");
console.log("2, Chứa những ký tự đặc biệt hoặc khoảng trắng");
console.log("3, Tên trùng với các từ khóa (keywords) của javascript");
console.log("Ví dụ : 12ssa, @@abc, const");
console.log("Trong JS, cách kiểm tra kiểu dữ liệu của biến");
console.log("Sử dụng the typeof operator để kiểm tra kiểu dữ liệu của biến");
console.log("Câu 2")
console.log("Đáp án:1-b, 2-a, 3-e, 4-c");
console.log("Câu 3");
let message = "Coding is great";
console.log(message)
console.log("Câu 4")
let studentcount = 0;
console.log(studentcount);
console.log("Câu 5")
message = "Coding might not easy,but still great";
console.log(message);
console.log("Câu 6")
studentcount = 20;
console.log(studentcount);
console.log("Câu 7")
let a = message.toLowerCase()
console.log(a);
console.log("Câu 8")
let b = studentcount;
b++;
console.log(b);

let c = "Hôm nay bạn thật tuyệt"
alert(c);
let ask = prompt("Bạn tên là gì?")
alert("Xin chào " + ask);
//
let name = prompt("Bạn họ gì ?");
let name2 = prompt("Tên bạn là gì?")
alert("Xin chào " +
    name + name2);
let dt = prompt("Hãy nhập cạnh của hình vuông");
dientich = dt * dt;
alert("Diện tích hình vuông là : " + dientich);
let cicle = prompt("Nhập bán kính hình tròn");
bankinh = cicle * cicle;
alert("Diện tích hình tròn là :" + bankinh * (Math.PI));
let doC = prompt("Nhập vào độ C :")
let doF = (9 / 5) * doC + 32;
alert(doC + "(C) = " + (doF + "(F)"));