// document.addEventListener('DOMContentLoaded', () => {
    // const mainImg = document.getElementById('mainImg');
    // const smallImages = document.querySelectorAll('.small-img .img');
// 
    // smallImages.forEach(img => {
        // img.addEventListener('click', () => {
            // mainImg.src = img.src;
        // });
    // });
// });
// 


document.addEventListener('DOMContentLoaded', () => {
    const price = 69000; // Giá mỗi sản phẩm
    const quantityInput = document.getElementById('first');
    const totalInput = document.getElementById('total');

    function calculateTotal() {
        const quantity = parseInt(quantityInput.value);
        const total = quantity * price;
        totalInput.value = total.toLocaleString('vi-VN') + 'đ'; // Hiển thị thành tiền
    }

    // Tính tổng tiền khi trang web được tải
    calculateTotal();

    // Tính tổng tiền khi số lượng thay đổi
    quantityInput.addEventListener('input', calculateTotal);
});