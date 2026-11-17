### **Playwright**
**Ưu điểm**
- Cross browser: viết code 1 lần nhưng có thể chạy trên tất cả các loại trình duyệt  
- Cross platform: Chạy trên tất cả các hệ điều hành phổ biến
- Tính năng xịn xò: auto waiting, auto retry, giảm flaky test
- Report đầy đủ: pass/fail từng trình duyệt
- Code gen: Thao tác để sinh ra code    
---
**Lý do học**
- Dễ cài đặt
- Cú pháp đơn giản
- Framework trending, nhiều cơ hội việc làm
---
**NVM**
- Quản lý các phiên bản NodeJs  
---
**Git và Github**
- Git: Dùng để quản lý source code
- Github: Dùng để chia sẻ source code
- Khi làm việc với git, cần 1 số cấu hình mặc định  
```
Config username: git config --global user.name "<Tên>"  
Config email: git config --global user.email "<Email>"
Config branch default: git config --global init.defaultBranch main
```
- Generate ssh key: `ssh-keygen -t rsa -b 4096 -C "email@example.com"`
- Kết nối source code ở local với github = cách add ssh key public id_rsa.pub vào github
---
### **Cài đặt playwright**
- Tạo folder => Mở = terminal => chạy lệnh `npm init playwright@latest` để cài đặt playwright vào folder
---
**Playwright code**
- page.goto = Đi đến
- page.expect = Mong muốn
- page.toHave... = Có ...  
---
**Đưa code lên github**
1. Tạo repo local: `git init` 
2. Tạo repo github và liên kết với repo local: `git remote add origin <url ssh>`
3. Thêm file vào staging: `git add .` hoặc `git add <tên_file>`
4. Commit file lên repository: `git commit -m "message"`
5. Push lên github: `git push origin main`

