function openFile(fileName) {
    // Tạo thẻ <a> để mở file
    const a = document.createElement('a');
    a.href = fileName; // Đường dẫn đến file
    a.click(); // Kích hoạt thẻ <a>
}

function handleYes() {
    // Hiển thị thông điệp yêu thương và mở file y.htm
    const container = document.querySelector('.container');
    container.innerHTML = `
        <h1> <p> Yay!  </p> </h1>
        <button onclick="openFile('y.html')">next</button>
    `;
    document.body.style.backgroundImage = "url('love-background.jpg')"; // Thay đổi ảnh nền
}

function handleNo() {
    // Hiển thị thông điệp buồn và mở file n.htm
    const container = document.querySelector('.container');
    container.innerHTML = `
        <h1>Oh no! 😢</h1>
        <button onclick="openFile('n.html')">next</button>
    `;
    document.body.style.backgroundImage = "url('sad-background.jpg')"; // Thay đổi ảnh nền
}
