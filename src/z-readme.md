#Đề bài
Câu 1 :

> In ra kí tực : "a" , "b" , "c" bằng cách dùng lần lượt callback, promise , và async/await
// callback

var consol = [
    'a','b','c'
];
consol.map(function(consol){
    console.log(consol)
})

//promise

var promise = new Promise((resolve, reject) => {
    resolve();
});
promise
    .then(function () {
        console.log('a')
    })
    .then(function () {
        console.log('b')
    })
    .then(function () {
        console.log('c')
    })

//async/await

setTimeout(function(){
    console.log('a');
    setTimeout(function(){
        console.log('b');
        setTimeout(function(){
            console.log('c')
        },1000)
    },2000)
},0)

Câu 2 :

> Tự lấy cho a mỗi cái 1 ví dụ về Detructuring , toán tử rest , spread Syntax

// Detrucuring 

var array = ['a','b','c'];
var [a,b,c] = array;
console.log(a,b,c)

// Rest

var array = ['x','y','a','b','c'];
var [x,y, ...rest] = array;
console.log(rest)

// spread Syntax

var array1 = ['a','b'];
var array2 =['c'];
var array3 =[...array1,...array2];
console.log(array3)

Câu 3 :

> sự khác nhau giữa arrow function và function bình thường là gì
arrow function khác nhau ở viết cú pháp( arrow function viết ngắn gọn hơn function), arrow function có thể bỏ return

Câu 4 :

> sự khác nhau giữ toán tử === và ==
 toán tử == chỉ so sánh 2 phần tử có bằng nhau không
 còn toán tử === thì so sánh thêm cả kiểu dữ liệu nữa

Câu 5 :

> 3 + 10 + "12" = bao nhiêu
=1312

Câu 6 :

### Chôi

```js
let lstProducts = [
  {
    BrandCode: "SAMSUNG",
    CateProCode: "DIENTHOAI",
    ProductCode: "GALAXYS22ULTRA",
    ProductName: "Galaxy S22 Ultra 5G 128GB",
    Price: 27000000,
    UPDc: 2000000,
    UPRateDc: 0,
    FlagPrice: 1,
    FlagActive: 0,
    Colors: ["Xanh", "Đỏ", "Tím", "Trắng"],
  },
  {
    BrandCode: "SAMSUNG",
    CateProCode: "DIENTHOAI",
    ProductCode: "GALAXYZFLIP3",
    ProductName: "Galaxy Z Flip3 5G 256GB",
    Price: 17000000,
    UPDc: 1700000,
    UPRateDc: 10,
    FlagPrice: 0,
    FlagActive: 1,
    Colors: ["Đỏ", "Tím", "Trắng"],
  },
  {
    BrandCode: "IPHONE",
    CateProCode: "DIENTHOAI",
    ProductCode: "IPHONE13PROMAX",
    ProductName: "iPhone 13 Pro Max 128GB",
    Price: 29000000,
    UPDc: 2900000,
    UPRateDc: 10,
    FlagPrice: 0,
    FlagActive: 1,
    Colors: ["Xanh", "Đỏ", "Tím", "Trắng", "Vàng"],
  },
  {
    BrandCode: "IPHONE",
    CateProCode: "DIENTHOAI",
    ProductCode: "IPHONE13MINI",
    ProductName: "iPhone 13 Mini 526GB",
    Price: 24000000,
    UPDc: 3000000,
    UPRateDc: 0,
    FlagPrice: 1,
    FlagActive: 0,
    Colors: ["Xanh", "Vàng", "Tím", "Trắng"],
  },
  {
    BrandCode: "OPPO",
    CateProCode: "DIENTHOAI",
    ProductCode: "OPPORENO7",
    ProductName: "Oppo Reno7",
    Price: 9990000,
    UPDc: 1500000,
    UPRateDc: 0,
    FlagPrice: 1,
    FlagActive: 1,
    Colors: ["Xanh", "Đỏ", "Tím", "Trắng"],
  },
  {
    BrandCode: "XIAOMI",
    CateProCode: "DIENTHOAI",
    ProductCode: "XIAOMIREDMINOTE11",
    ProductName: "Xiaomi Redmi Note 11",
    Price: 4490000,
    UPDc: 449000,
    UPRateDc: 10,
    FlagPrice: 0,
    FlagActive: 1,
    Colors: ["Xanh", "Đỏ", "Tím"],
  },
];
```

> Yêu cầu :

- Sử dụng React
- Render ra list sản phẩm
- có list ra các màu sắc của sản phẩm
