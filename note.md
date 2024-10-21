# Lộ trình học Fullstack

## Lập trình Front-End

- Xử lý liên quan đến giao diện người dùng
- Khả năng tương tác giữa người dùng với máy chủ

Các ngôn ngữ:

- HTML: Tạo lên nội dung của trang web
- CSS: Ngôn ngữ định cho HTML, tạo bố cục cho trang web
- Javascript: Ngôn ngữ lập trình để tương tác giữa người dùng với trình duyệt web
- Thư viện, Framework liên quan: ReactJS, NextJS

## Lập trình Back-End

- Xử lý các logic nghiệp vụ nhận được từ Front-End
- Kỹ năng:

* Logic nghiệp vụ
* Phân tích và thiết kế CSDL
* Thuật toán (Giải thuật)

Lưu ý: Front-End và Back-End sẽ giao tiếp với nhau thông qua API

Các ngôn ngữ:

- Ngôn ngữ lập trình Back-End: PHP, Java, C#,...
- Cơ sở dữ liệu: Nơi chứa dữ liệu và được sắp xếp một cách khoa học

* SQL: Cơ sở dữ liệu quan hệ, học ngôn ngữ truy vấn SQL
* NoSQL: Cơ sở dữ liệu phi quan hệ

- Framework liên quan:

* NodeJS: Express, Nestjs
* PHP: Laravel, CakePHP,...
* Java: Spring Boot,...

## Server

- Triển khai dự án lên môi trường Internet
- Yêu cầu: Học linux, Webserver, Docker,...

Cách website hoạt động

User nhập tên miền ==> Gửi yêu cầu tới DNS Server (Máy chủ phân giải tên miền) ==> Trả về địa chỉ IP của Server ==> Trình duyệt sẽ gửi yêu cầu tới Server Web thông qua địa chỉ IP

Làm thế nào để Front-End giao tiếp với Back-End

- Thông qua giao thức web: HTTP, Websocket,...
- Gửi yêu cầu thông qua HTTP: Gọi là HTTP Request
- Phản hồi từ Server trả về qua HTTP: Gọi là HTTP Response

## Ngôn ngữ HTML

- Cấu tạo bởi các thẻ
- Cấu trúc:

```
<tenthe thuoctinh1="giatri1" thuoctinh2="giatri2">Noi dung</tenthe> ==> Thẻ đầy đủ

<tenthe thuoctinh1="giatri1" thuoctinh2="giatri2"/> ==> Thẻ tự đóng
```

- Phân nhóm:

* Nhóm thẻ Block
* Nhóm thẻ Inline

- Website tra cứu: https://htmlreference.io/

### Nhóm thẻ Block

- Luôn bắt đầu ở 1 hàng mới
- Chiều rộng mặc định bằng 100% so với thẻ cha

### Nhóm thẻ inline

- Chiều rộng mặc định bằng với nội dung của thẻ
- Các thẻ inline cạnh nhau ==> Nằm ở trên 1 dòng

### Comment trong HTML

<!--
Nội dung comment
-->

### Các thẻ HTML thường dùng

- Thẻ heading: Thẻ hiện tiêu đề cần được nhấn mạnh

```
<h1>Nội dung</h1>
<h2>Nội dung</h2>
<h3>Nội dung</h3>
<h4>Nội dung</h4>
<h5>Nội dung</h5>
<h6>Nội dung</h6>
```

- Thẻ văn bản: Thể hiện đoạn văn

```
<p>Nội dung</p>
```

### Entity Character

- Chuyển các ký hiệu của thẻ html thành dạng thực thể
- Trình duyệt coi các ký hiệu đó giống như văn bản
- Tác dụng:

* Thể hiện mã html hiển thị lên trình duyệt
* Bảo mật

### Nhóm thẻ inline

1. Thẻ chèn liên kết (a = anchor)

```
<a href="dia-chi-trang-web">Noi dung hien thi</a>
```

Các thuộc tính liên quan

```
- href: Địa chỉ trang web hoặc đường dẫn tương đối
- title: Tiêu đề khi trỏ chuột vào liên kết
- target: Mục tiêu khi mở trang web
+ _self: Mở ở tab hiện tại
+ _blank: Mở ở tab mới
```

2. Thẻ chèn hình ảnh (img)

```
<img src="duong-dan-anh" />
```

Các thuộc tính liên quan

```
- alt: Mô tả của ảnh (Dành cho các bộ máy tìm kiếm đọc, thay thế khi ảnh bị lỗi)
- title: Hiển thị tiêu đề khi trỏ chuột vào ảnh
- width: Thiết lập chiều rộng của ảnh (Mặc định đơn vị là px)
- height: Thiết lập chiều cao của ảnh (Mặc định đơn vị là px)
```

Lưu ý:

- Thuộc tính width, height sẽ có giá trị auto
- Hỗ trợ đơn vị % (Tỷ lệ với chiều rộng, cao của thẻ cha)

3. Thẻ in đậm, nghiêng, gạch chân

```
<b>Nội dung</b>
<i>Nội dung</i>
<u>Nội dung</u>
<s>Nội dung</s>
```

4. Thẻ span

- Định dạng kiểu dựa vào css
- Đảm bảo tính inline (Trên 1 dòng)
- Không có ý nghĩa

```
<span>Unicode</span>
```

5. Table

- Thẻ table: Thể hiện 1 bảng
- Thẻ tr: Thể hiện 1 hàng
- Thẻ td: Thể hiện 1 cột
- Thẻ th: Thể hiện 1 cột dạng tiêu đề

Lưu ý: Trong table sẽ có thêm 3 thẻ để nhóm các thành phần

- thead: Nhóm hàng tiêu đề
- tbody: Nhóm các hàng đóng vai trò là nội dung
- tfoot: Nhóm các hàng đóng vai trò là chân bảng

Tra cứu cú pháp gõ nhanh trong VSCode: https://docs.emmet.io/cheat-sheet/

6. Form

- Biểu mẫu để cho phép người nhập liệu hoặc lựa chọn sau đó gửi lên Server
- Trong 1 trang web có thể có 1 hoặc nhiều form
- Các form không được phép lồng nhau
- Cấu tạo của form:

```html
<form action="" method="">
  <!--
    Trường nhập liệu
    
    Nút gửi
    -->
</form>
```

action: URL ở phía server
method: Phương thức để gửi dữ liệu: GET, POST

Các loại trường nhập liệu

- label: Nhãn, dùng để mô tả tên của trường nhập liệu
- input: Ô nhập liệu dạng 1 dòng

* type: Kiểu dữ liệu sẽ nhận (Mặc định là text)
* name: Tên của trường để Server nhận dữ liệu
* id: Định danh của thẻ html
* placeholder: Văn bản mô tả cho ô input
* value: Giá trị mặc định của ô nhập liệu

- button: Nút để gửi dữ liệu

* type: Loại nút (Mặc định là submit), nhận các giá trị: submit, button, reset

Tóm lại:

- Thẻ form
- Thẻ input: text, password, file, checkbox, radio
- Thẻ textarea
- Thẻ select
- Thẻ button: submit

Ngoài ra: Còn 1 số thẻ html5 ==> Học sau

## Ngôn ngữ CSS

- Ngôn ngữ định dạng HTML
- Xây dựng các bố cục, giao diện, màu sắc cho trang HTML
- Có phần mở rộng: .css

Lưu ý:

- File css không chạy độc lập
- CSS cần phải đưa vào HTML

### Các cách đưa CSS vào HTML

1. Internal CSS

- Đưa css vào html thông qua thẻ style

```css
<style>
    bochon {
        thuoctinh: giatri
    }
</style>
```

2. Inline CSS

- Đưa CSS vào HTML thông qua thuộc tính style tại mỗi thẻ html

3. External CSS

- Đưa CSS vào HTML thông qua file css và liên kết thông qua thẻ link

Khi làm việc với CSS, định danh phần tử HTML thông qua class và id

Nguyên tắc chung:

- Đặt tên tường minh
- Không được bắt đầu bằng số
- Đặt tên bằng Tiếng Anh
- Sử dụng danh từ

Class: Có thể đặt nhiều class trong 1 phần tử HTML: Mỗi class được phân biệt thông qua ký hiệu khoảng trắng
Id: Chỉ được đặt 1 id trong 1 phần tử HTML

### Cấu trúc chung của CSS

```css
selector1 {
  thuoctinh1: giatri1;
  thuoctinh2: giatri2;
  thuoctinh3: giatri3;
}
selector2 {
  thuoctinh1: giatri1;
  thuoctinh2: giatri2;
  thuoctinh3: giatri3;
}
selector3 {
  thuoctinh1: giatri1;
  thuoctinh2: giatri2;
  thuoctinh3: giatri3;
}
```

### Bộ chọn CSS (Selector)

- Nếu HTML dùng id ==> CSS theo cú pháp: #tenid
- Nếu HTML dùng class ==> CSS theo cú pháp: .tenclass
- Nếu HTML dùng tag (tên thẻ html) ==> CSS theo cú pháp: tenthe

Selector phân cấp

- Nằm trong

```css
selector1 selector2 selector3 selectorn {
  thuoctinh: giatri;
}
```

- Con trực tiếp

```css
selector1 > selector2 > selector3 > selectorn {
  thuoctinh: giatri;
}
```

Selector cùng cấp

```css
selector1selector2selectorn {
  thuoctinh: giatri;
}
```

Selector ngang hàng không liền kề

```CSS
selector1 ~ selector2 {
    thuoctinh: giatri
}
```

Selector ngang hàng liền kề

```CSS
selector1 + selector2 {
    thuoctinh: giatri
}
```

Selector theo thuộc tính

[tenthuoctinh]: Chọn các thẻ html có thuộc tính đã khai báo

[tenthuoctinh="giatri"]: Chọn các thẻ html có thuộc tính khớp với giá trị đã khai báo

[tenthuoctinh^="giatri"]: Chọn các thẻ html có thuộc tính bắt đầu bằng giá trị đã khai báo

[tenthuoctinh*="giatri"]: Chọn các thẻ html có thuộc tính mà bên trong có giatri

[tenthuoctinh$="giatri"]: Chọn các thẻ html có thuộc tính mà giá trị nằm ở cuối

### Pseudo

1. Phần tử giả (Pseudo Element)
   selector::tenphantugia

- before
- after
- selection
- placeholder
- first-line
- first-letter

2. Lớp giả (Pseudo Class)

selector:tenlopgia

- hover: Trỏ chuột vào
- active: Click và giữ chuột
- focus: Chỉ áp dụng được với form
- not(selector): Chọn tất cả thành phần trừ selector nào đó được khai báo
- first-child: Chọn phần tử con đầu tiên trong 1 danh sách
- last-child: Chọn phần tử con cuối cùng trong 1 danh sách
- first-of-type, last-of-type
- nth-child
- nth-of-type

Lưu ý:

- Phân biệt được child và of-type
- first, last: Chọn đầu tiên và cuối cùng
- nth: Chọn theo thứ tự

- disabled: Áp dụng với tất cả trong form
- checked: Chỉ áp dụng với radio và checkbox
- valid: Kiểm tra input có dữ liệu hay không

## Các thuộc tính định dạng văn bản

1. Thuộc tính color

- Thay đổi màu văn bản
- Thuộc tính kế thừa (Thay đổi màu của cha, con sẽ tự động đổi)
- Cú pháp: color: giatrimau (tenmau, mamau)

Lưu ý: Các thuộc tính css thường sẽ có các giá trị sau

- inherit --> Kế thừa từ phần tử cha
- initial --> Lấy giá trị ban đầu của trình duyệt

Trong giá trị màu, có giá trị transparent (Màu trong suốt)

2. Thuộc tính font-size

- Thay đổi cỡ chữ cho văn bản
- Cú pháp: font-size: giatri + donvi

Danh sách đơn vị

- px: Đơn vị tuyệt đối
- pt: 1.3 lần px
- em: Tỷ lệ với font-size của phần tử cha
- rem: Tỷ lệ với font-size mặc định của trình duyệt
- %: Tỷ lệ với font-size của phần tử cha

3. Thuộc tính font-family

- Thay đổi font chữ cho văn bản
- Cú pháp: font-family: font1, font2, font3,....
- 2 họ font mặc định:

* sans-serif: Họ không chân
* serif: Họ có chân

Gia đình font

- Trong 1 fonnt chữ sẽ nhiều kiểu: đậm nhạt và nghiêng
- Quy ước đặc điểm của các kiểu thông qua 2 thuộc tính

* font-weight: 100 ==> 900 (Bội số của 100), normal, bold ==> Quy ước độ dày của văn bản
* font-style: normal | italic ==> Văn bản nghiêng hoặc thẳng đứng

Các loại font

- Font Variable: Tổng hợp các style vào trong 1 file font
- Font Static: Mỗi file font chỉ có 1 kiểu

4. Thuộc tính line-height

- Thiết lập chiều cao của dòng trong văn bản (Giãn dòng)
- Cú pháp: line-height: giatri

Lưu ý:

- Thuộc tính line-height không nên sử dụng đơn vị tuyệt đối mà thường sẽ không dùng đơn vị
- Giá trị suy ra của line-height sẽ tỷ lệ font-size của chính nó

5. Thuộc tính text-decoration

- Quy định kiểu gạch của văn bản: gạch dưới, gạch trên, gạch ngang
- Cú pháp: text-decoration: none|underline|overline|line-through

6. Thuộc tính text-transform

- Thay đổi kiểu dạng của văn bản: chữ thường, chữ hoa
- Cú pháp: text-transform: none|lowercase|uppercase|capitalize

7. Thuộc tính letter-spacing

- Quy định khoảng cách giữa các ký tự
- Cú pháp: letter-spacing: giatri + donvi

8. Thuộc tính word-spacing

- Quy định khoảng cách giữa các từ
- Cú pháp: word-spacing: giatri + donvi

9. Thuộc tính word-break

- Wrap nội dung khi bị tràn khung
- Cú pháp: word-break: keep-all|break-all

Nên sử dụng word-wrap: break-word để chữ mang ý nghĩa rõ ràng

10. Thuộc tính text-align

- Căn chỉnh vị trí của văn bản theo chiều ngang
- Cú pháp: text-align: left|center|right|justify

Lưu ý:

- Chỉ áp dụng thuộc tính này trong thẻ block
- Nếu các phần tử bên trong không phải là văn bản mà là các thẻ inline ==> Mang ý nghĩa tương tự
