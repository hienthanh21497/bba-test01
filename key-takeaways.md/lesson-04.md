## **1. Phạm vi biến**
### 1.1 Block scope (Theo khối)
- Biến được khai báo trong cặp ngoặc nhọn
- var: Không bị giới hạn bởi cặp ngoặc nhọn
- let/const: Bị giới hạn trong cặp ngoặc nhọn  
*VD*
```
if (true) {
    var varVariable = "var không có block scope";
    let letVariable = "let có block scope";
    const constVariable = "const cũng có block scope";
}

console.log(varVariable); // OK - var không bị giới hạn bởi block
console.log(letVariable); // Error: letVariable is not defined
console.log(constVariable); // Error: constVariable is not defined
```
---
### 1.2 Function scope (Theo hàm)
- Là biến được khai báo trong 1 hàm
- Cả var/let/const đưa ra ngoài hàm đều bị báo là undefined  
*VD*
```
function myFunction() {
    var functionScoped = "Chỉ có thể truy cập trong hàm này";
    let alsoFunctionScoped = "Tương tự";

    console.log(functionScoped); // OK
}

console.log(functionScoped); // Error: functionScoped is not defined 
```
---
### 1.3 Global (Toàn cục)
- Là biến được khai báo ở 1 dòng code tự do, không trong khối hay hàm  
*VD*
```
var globalVar = "Tôi là biến toàn cục";
let globalLet = "Tôi cũng là biến toàn cục";

function testFunction() {
    console.log(globalVar); // OK
    console.log(globalLet); // OK
}
```
---
---
## **2. Vòng lặp**
### 2.1 Break
- Dùng break trong vòng lặp để kết thúc vòng lặp ngay lập tức khi thỏa mãn điều kiện  
*VD*
```
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Thoát vòng lặp khi i = 5
    }
    console.log(i);
}

=> Output: 0, 1, 2, 3, 4
```
---
### 2.2 Coninue
- Dùng continue để bỏ qua vòng lặp hiện tại và tiếp tục thực hiện vòng lặp tiếp theo  
*VD*
```
for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) {
        continue; // Bỏ qua số chẵn
    }
    console.log(i);
}

=> Output: 1, 3, 5, 7, 9
```
---
### 2.3 Vòng lặp nâng cao
#### 2.3.1 for...in
- Dùng để đi qua từng thuộc tính trong 1 object  
*VD*
```
const person = {
    name: "John",
    age: 30,
    city: "HN",
    oldAddress: { city: "HD", age: 100 }
};
for (const key in person) { 
    console.log(key)
};
=> Output: name, age, city, oldAddress
```
```
for (const key in person) { 
    console.log(key)
};
- Phần này có nghĩa là duyệt qua các key trong object person
```

#### 2.3.2 forEach
- Thực thi function cho mỗi phần tử
- Không thể dùng `break` hay `continue` trong forEach  
*VD* 
```
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (value) {  // value là tên biến đặt cho từng index trong mảng
    if (value < 4 && value > 1) {
        console.log(value)
    }
});
 => Output: 2, 3
```
---
---

## **3. Điều kiện nâng cao**
### 3.1 if...else
- Thực thi dòng code cho cả trường hợp true và false  
*VD*
```
let score = 50
if (score > 60) {
    console.log("Bạn đã qua môn")  // Nếu đúng thì in dòng này
} else {
    console.log("Bạn đã trượt")  // Nếu sai thì in dòng này
};

```
---
### 3.2 if...else if
- Kiểm tra nhiều điều kiện theo thứ tự  
*VD*
```
let score1 = 40
if (score1 > 90) {
    console.log("Xuất sắc")
} else if (score1 > 75) {
    console.log("Giỏi")
} else if (score1 > 60) {
    console.log("Khá")
} else if (score1 > 45) {
    console.log("TB")
} else {
    console.log("Yếu")
}

=> Output: Yếu
```
---
### 3.3 Toán tử điều kiện
- Cách viết gọn cho if..else đơn giản  
*VD*
```
const age = 11
let xepHang = age > 18 ? "người lớn" : "trẻ em"
console.log(xepHang)
// Trước dấu ?:  let xepHang = age => tương tự với điều kiện if (age > 18)
// Sau dấu ?: "người lớn" là điều kiện đúng - "trẻ em" là điều kiện sai
```

```
// Có thể lồng nhau (nên cẩn thận với độ phức tạp) => ít dùng
let score2 = 75;
let grade = score2 >= 90 ? "A" :          // Nếu đúng thì in ra A, nếu sai thì chạy các dòng phía dưới
            score2 >= 80 ? "B" :          // Nếu đúng thì in ra B, nếu sai thì chạy các dòng phía dưới   
            score2 >= 70 ? "C" :          // Nếu đúng thì in ra C, nêu sai thì chạy các dòng phía dưới
            score2 >= 60 ? "D" : "F";     // Nếu đúng thì in ra D, nêu sai thì in ra F
console.log(grade)
```
---
---
## **4. ultils function**
### 4.1 String ultils
#### 4.1.1 Bỏ khoảng trắng
- trim(): bỏ khoảng trắng đầu cuối
- trimStart(): bỏ khoảng trắng ở đầu
- trimEnd(): bỏ khoảng trắng ở cuối  
*VD*
```
let text = "    Hello World   ";
```
```
// trim() - bỏ khoảng trắng 2 đầu
console.log(text.trim());
=> "Hello World"
```
```
// trimStart() - bỏ khoảng trắng bên trái
console.log(text.trimStart());
=> "Hello World   "
```
```
// trimEnd() - bỏ khoảng trắng bên phải
console.log(text.trimEnd());
=> "    Hello World"
```

#### 4.1.2 Chuyển đổi chữ hoa sang chữ thường & ngược lại
- Chữ thường -> chữ hoa: toUpperCase
- Chữ hoa -> chữ thường: to LowerCase  
*VD*
```
let str = "JavaScript";
console.log(str.toUpperCase()); => "JAVASCRIPT"
console.log(str.toLowerCase()); => "javascript"
```

#### 4.1.3 includes
- Kiểm tra chuỗi có bao gồm chuỗi con không  
*VD*
```
let text1 = "Hello World";
```
```
console.log(text1.includes("World"));
=>  true
```
```
console.log(text1.includes("JavaScript"));
=> false
```
```
// Phân biệt hoa thường
console.log(text1.includes("world"));
=> false
```
```
console.log(text1.includes("Hello"));
=> true
```

#### 4.1.4 split
- Cắt chuỗi  
*VD*
```
let text3 = "Hello World JavaScript";
```
```
// Cắt chuỗi theo khoảng trắng
console.log(text3.split(" "));
=> ["Hello", "World", "JavaScript"]
```
```
// Cắt chuỗi từ @
let email = "user@gmail.com";
console.log(email.split("@"));
=> ["user", "gmail.com"]
```
```
let date = "2024-01-25";
console.log(date.split("-"));
=> ["2024", "01", "25"]
```

#### 4.1.5 replace
- Thay thế chuỗi con bằng chuỗi con khác  
*VD*
```
let text5 = "Hello World";

// Thay thế chuỗi con
console.log(text.replace("World", "JavaScript")); // World = từ muốn thay thế, JavaScript = từ thay thế
=> "Hello JavaScript"
```

### 4.2 Array ultils
#### 4.2.1 Thêm phần tử vào mảng
- Thêm vào cuối: `push(<phần tử>)`
- Thêm vào đầu: `unshift(<phần tử>)`
- Thêm vào giữa: `splice(<vị trí>, <số phần tử cần xoá>, <phần tử cần thêm vào>)`  
*VD*
```
let arr = [1, 2, 3];
```
```
// Thêm vào cuối - push()
arr.push(4);
console.log(arr);
=> [1, 2, 3, 4]
```
```
// Thêm vào đầu - unshift()
arr.unshift(0);
console.log(arr);
=> [0, 1, 2, 3, 4]
```
```
// Thêm vào giữa - splice(vị trí, 0, phần tử)
arr.splice(2, 0, 1.5); // Thêm 1.5 vào vị trí thứ 2, xóa 0 phần tử
console.log(arr);
=> [0, 1, 1.5, 2, 3, 4]
```

#### 4.2.2 Xóa phần tử khỏi mảng
- Xóa ở cuối: `pop()`
- Xóa ở đầu: `shift()`
- Xóa ở vị trí bất kỳ: `splice(<vị trí>, <số phần tử cần xóa>)`  
*VD*
```
let arr1 = [1, 2, 3, 4, 5];
```
```
// Xóa phần tử cuối - pop()
arr1.pop();
console.log(arr1);
=> [1, 2, 3, 4]
```
```
// Xóa phần tử đầu - shift()
arr1.shift();
console.log(arr1);
=> [2, 3, 4]
```
```
// Xóa phần tử ở vị trí bất kỳ - splice(vị trí, số lượng)
arr1.splice(1, 1);
// Xóa 1 phần tử tại vị trí index 1
console.log(arr1);
=>  [2, 4]
```

#### 4.2.3 Tìm kiếm phần tử
- Trả về phần tử đầu tiên hợp lệ ```find()```
- Trả về tất cả các phần tử hợp lệ ```filter()```  
*VD*
```
const numbers = [5, 12, 8, 130, 44];
```
```
// find() - Trả về phần tử đầu tiên > 10
let first = numbers.find(num => num > 10);
console.log(first);
=> 12
```
```
// filter() - Trả về tất cả phần tử > 10 => filer() trả về 1 mảng các phần tử hợp lệ
let all = numbers.filter(num => num > 10); 
console.log(all);
=> [12, 130, 44]
```

#### 4.2.4 Biến đổi mảng
- `map`: Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài  
*VD*
```
let number = [1, 2, 3, 4, 5];

// Nhân mỗi phần tử với 2
let doubled = number.map(num => num * 2);
console.log(doubled);
=> [2, 4, 6, 8, 10]
```

#### 4.2.5 Sắp xếp mảng
`sort((a, b) => a - b)`
- So sánh từng cặp phần tử a và b
- Trả về số âm: a đứng trước b
- Trả về số dương: b đứng trước a
- Trả về 0: giữ nguyên thứ tự  
*VD*
```
let numbers1 = [40, 100, 1, 5, 25, 10];
```
```
// Sắp xếp tăng dần
numbers1.sort((a, b) => a - b);
console.log(numbers1);
=> [1, 5, 10, 25, 40, 100]
```
```
// Sắp xếp giảm dần
numbers1.sort((a, b) => b - a);
console.log(numbers1);
=> [100, 40, 25, 10, 5, 1]
```
