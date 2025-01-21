function openFile(fileName) {
    // Tạo thẻ <a> để mở file
    const a = document.createElement('a');
    a.href = fileName; // Đường dẫn đến file
    a.click(); // Kích hoạt thẻ <a>
}


function handleNo() {
    // Hiển thị thông điệp buồn và mở file n.htm
    const container = document.querySelector('.container');
    container.innerHTML = `
        <h1>REALLY ? 🥰</h1>
        <button onclick="openFile('index.html')">back</button>
    `;
    document.body.style.backgroundImage = "url('sad-background.jpg')"; // Thay đổi ảnh nền
}
