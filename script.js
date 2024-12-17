function validateForm() {
    let isValid = true;

    // Kiểm tra họ và tên: Không được để trống và phải đúng định dạng (ví dụ: Tran Anh Dung).
    const name = document.getElementById("txtName").value.trim();
    console.log("Validating name:", name); // Debug log
    const nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+(\s[A-Z][a-z]+)?$/; // Biểu thức chính quy cho họ và tên.
    if (name === "") {
        document.getElementById("erName").innerHTML = "Họ và tên không được để trống";
        isValid = false;
    } else if (!nameRegex.test(name)) {
        document.getElementById("erName").innerHTML = "Họ tên không hợp lệ";
        isValid = false;
    } else {
        document.getElementById("erName").innerHTML = "";
    }

    // Kiểm tra số điện thoại: Không được để trống và phải đúng định dạng (0xxx.xxx.xxx).
    const phone = document.getElementById("Phone").value.trim();
    console.log("Validating phone:", phone); // Debug log
    const phoneRegex = /^0\d{3}\d{3}\d{3}$/; // Biểu thức chính quy cho số điện thoại.
    if (phone === "") {
        document.getElementById("erPhone").innerHTML = "Số điện thoại không được để trống";
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById("erPhone").innerHTML = "Số điện thoại không hợp lệ (định dạng: 0xxx.xxx.xxx)";
        isValid = false;
    } else {
        document.getElementById("erPhone").innerHTML = "";
    }

    // Kiểm tra ngày đặt: Không được để trống và phải là ngày hợp lệ.
    const orderDate = document.getElementById("orderdate").value.trim();
    console.log("Validating order date:", orderDate); // Debug log
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Biểu thức chính quy cho ngày đặt (yyyy-mm-dd).
    if (orderDate === "") {
        document.getElementById("erDate").innerHTML = "Ngày đặt không được để trống";
        isValid = false;
    } else if (!dateRegex.test(orderDate)) {
        document.getElementById("erDate").innerHTML = "Ngày đặt không hợp lệ";
        isValid = false;
    } else {
        document.getElementById("erDate").innerHTML = "";
    }

    // Kiểm tra email: Không được để trống và phải đúng định dạng email.
    const email = document.getElementById("email").value.trim();
    console.log("Validating email:", email); // Debug log
    const emailRegex = /^[a-zA-Z0-9._%+-]+@iuh\.edu\.vn$/; // Biểu thức chính quy cho email của bạn.
    if (email === "") {
        document.getElementById("erEmail").innerHTML = "Email không được để trống";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("erEmail").innerHTML = "Email không hợp lệ (phải là @iuh.edu.vn)";
        isValid = false;
    } else {
        document.getElementById("erEmail").innerHTML = "";
    }

    // Kiểm tra loại hoa: Phải chọn một giá trị.
    const flower = document.getElementById("flower").value;
    console.log("Validating flower selection:", flower); // Debug log
    if (flower === "") {
        document.getElementById("erFlower").innerHTML = "Vui lòng chọn loại hoa";
        isValid = false;
    } else {
        document.getElementById("erFlower").innerHTML = "";
    }

    // Kiểm tra loại thanh toán: Phải chọn một tùy chọn.
    const payment = document.querySelector('input[name="payment"]:checked');
    console.log("Validating payment method:", payment ? payment.id : "None"); // Debug log
    if (!payment) {
        alert("Vui lòng chọn loại thanh toán");
        isValid = false;
    }

    return isValid; // Trả về trạng thái hợp lệ của form.
}

function DangKy() {
    console.log("Starting registration process..."); // Debug log
    if (validateForm()) {
        // Lấy giá trị từ các trường trong form.
        const name = document.getElementById("txtName").value.trim();
        const phone = document.getElementById("Phone").value.trim();
        const orderDate = document.getElementById("orderdate").value.trim();
        const email = document.getElementById("email").value.trim();
        const flower = document.getElementById("flower").options[document.getElementById("flower").selectedIndex].text;
        const payment = document.querySelector('input[name="payment"]:checked').nextElementSibling.textContent;

        console.log("Form data:", { name, phone, orderDate, email, flower, payment }); // Debug log

        // Thêm dữ liệu vào bảng.
        const table = document.querySelector("table");
        const newRow = table.insertRow(); // Thêm một hàng mới vào bảng.
        newRow.innerHTML = `
            <td>${table.rows.length - 1}</td> <!-- STT tự động tăng dựa trên số hàng trong bảng. -->
            <td>${name}</td> <!-- Hiển thị họ và tên. -->
            <td>${phone}</td> <!-- Hiển thị số điện thoại. -->
            <td>${orderDate}</td> <!-- Hiển thị ngày đặt. -->
            <td>${email}</td> <!-- Hiển thị email. -->
            <td>${flower}</td> <!-- Hiển thị loại hoa. -->
            <td>${payment}</td> <!-- Hiển thị loại thanh toán. -->
        `;

        alert("Đặt hàng thành công!"); // Thông báo khi đặt hàng thành công.
        $('#myModal').modal('hide'); // Đóng modal sau khi thêm dữ liệu.
    } else {
        alert("Vui lòng kiểm tra lại các thông tin đã nhập."); // Thông báo khi form không hợp lệ.
    }
}
