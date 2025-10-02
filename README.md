🛠️ My Router App

Ứng dụng React demo sử dụng React Router DOM để quản lý điều hướng, kết hợp cấu trúc component rõ ràng và ví dụ thực tế (Home, About, Contact, Products, Login, 404).

📂 Cấu trúc thư mục
my-router-app/
├── public/               # Chứa favicon, static files
├── src/
│   ├── components/       # Navbar, Layout, ...
│   ├── pages/            # Các trang: Home, About, Contact, Products, Login, NotFound
│   ├── App.jsx           # Khai báo Routes, Layout
│   ├── main.jsx          # Entry point, bọc BrowserRouter
│   └── index.css         # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md

🚀 Cài đặt & Chạy project
1. Clone project
git clone https://github.com/vykun021224/my-router-app.git
cd my-router-app

2. Cài đặt dependencies
npm install

3. Chạy project local
npm run dev


Mở http://localhost:5173
 để xem ứng dụng.

🧭 Các trang trong project

/ → Home

/about → About

/contact → Contact

/products → Products (có route con: /products/:id)

/login → Login

* → NotFound (hiển thị khi nhập sai URL)

📌 Chức năng chính

Navbar dùng <NavLink> để highlight tab đang active.

Layout bọc Navbar + <Outlet> để render route con.

ProductDetail demo dynamic route /products/:id.

Login có form cơ bản (Email/Password).

NotFound xử lý 404.

🛠️ Công nghệ sử dụng

React 19

Vite

React Router DOM v6
