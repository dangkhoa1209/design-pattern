# Tổng quan

```bash
Design-pattern là một mô hình giải quyết một vấn đề phổ biến trong thiết kế phần mềm. Nó không phải là một giải pháp cụ thể hoặc một đoạn mã, mà là một hướng dẫn tổng quan để giải quyết một loạt các vấn đề thiết kế.

Design-pattern giúp cải thiện khả năng tái sử dụng mã, tăng tính linh hoạt và hiểu quả của hệ thống. Nó là kinh nghiệm tích lũy được từ việc giải quyết các vấn đề thiết kế trong quá khứ và được chia sẻ để cộng đồng phần mềm có thể học hỏi và áp dụng trong các tình huống tương tự.
```

# Một số design pattern phổ biến bao gồm:

```bash
Singleton-Pattern: Đảm bảo rằng một lớp chỉ có một thể hiện và cung cấp một điểm truy cập toàn cầu đến nó.
# Có thể sử dụng để kết nối db, socket, ..., những công việc chỉ cần chạy 1 lần

Factory-Method-Pattern: Định nghĩa một giao diện để tạo một đối tượng, nhưng để con lớp quyết định lớp nào sẽ được tạo.

Observer-Pattern: Định nghĩa một phụ thuộc một-nhiều giữa các đối tượng để khi một đối tượng thay đổi trạng thái, tất cả các đối tượng phụ thuộc sẽ được thông báo và cập nhật tự động.

Decorator-Pattern: Cho phép mở rộng tính năng của một đối tượng mà không làm thay đổi cấu trúc của nó.

Strategy-Pattern: Định nghĩa một tập hợp các thuật toán, đóng gói từng thuật toán và làm cho chúng có thể thay thế cho nhau.

Command-Pattern: Chuyển đổi một yêu cầu hoặc thao tác thành một đối tượng độc lập, cho phép thực hiện yêu cầu với các đối tượng khác nhau, hủy thao tác và ghi nhớ lịch sử thao tác.

Facade-Pattern: Mô hình này cung cấp một giao diện đơn giản cho một tập hợp lớp phức tạp, giúp giảm độ phức tạp của hệ thống và giữ cho các phần của hệ thống độc lập với nhau.

Adapter-Pattern: cho phép một lớp hoặc đối tượng làm cho giao diện của nó tương thích với một giao diện khác mà nó không thể sử dụng trực tiếp.

MVC-Pattern: Tách biệt dữ liệu, giao diện người dùng, và quá trình xử lý.
```
