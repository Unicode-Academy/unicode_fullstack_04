# Câu lệnh npm

## Khởi tạo dự án có sử dụng npm

npm init -y

## Cài đặt các dependencies

npm i hoặc npm install

## Cài đặt thư viện cụ thể

npm i tenthuvien hoặc npm install tenthuvien

## Xóa bỏ thư viện

npm uninstall tenthuvien

## Các chế độ cài đặt

- Simple Dependencies ==> Các thư viện cần thiết để chạy dự án

- Dev Dependencies ==> Các thư viện hỗ trợ cho quá trình phát triển (Ví dụ: sass)

npm i tenthuvien --save-dev

Nếu khi cài các dependencies mà gõ lệnh: npm i ==> Cài hết

Nếu muốn cài riêng simple dependencies gõ lệnh: npm i --product

## Các kiểu cài đặt

- Package Local: Mặc định, cài đặt ở đâu thư mục node_modules ở đó
- Package Global: Lưu ở 1 vị trí khác trên server và được phép sử dụng cho mọi dự án trên server đó

npm i tenthuvien -g

## Cập nhật thư viện

- npm update ==> Cập nhật tất cả
- npm update tenthuvien ==> Cập nhật thư viện cụ thể

## Sự khác nhau giữa package.json và package-lock.json

Khi dùng câu lệnh npm update --> Lấy các phiên bản trong package.json (Không quan tâm có package-lock.json không?)

Khi dùng câu lệnh npm install --> Lấy các phiên bản trong package-lock.json (Nếu không có thì lấy package.json)

package-lock.json: Khóa phiên bản tại thời điểm cài đầu tiên
