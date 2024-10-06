const images = {
  "bầu": "images/bầu.png",
  "cua": "images/cua.png",
  "cá": "images/cá.png",
  "gà": "images/gà.png",
  "tôm": "images/tôm.png",
  "nai": "images/nai.png",
};

const openButton = document.getElementById("open");
const shakeButton = document.getElementById("shake");
const bat = document.querySelector('.batxx'); // Lấy phần tử bát
const results = [
  document.querySelector('.result1'),
  document.querySelector('.result2'),
  document.querySelector('.result3')
];

// Hàm dịch chuyển bát lên trên
function openBat() {
  bat.style.transition = "transform 0.5s"; // Thêm hiệu ứng chuyển động
  bat.style.transform = "translateY(-650px)"; // Dịch chuyển lên 100px
}

// Hàm dịch chuyển bát về vị trí cũ
function shakeBat() {
  bat.style.transform = "translateY(0)"; // Dịch chuyển về vị trí cũ
  // Gọi hàm random để chọn kết quả
}

function handleShake() {
  setTimeout(randomizeResults, 800); // Gọi hàm openBat sau 1 giây
}

// Gán sự kiện cho nút "Xóc"
shakeButton.addEventListener("click", handleShake);

// Hàm randomize kết quả
function randomizeResults() {
  const keys = Object.keys(images); // Lấy danh sách các tên ảnh
  for (let i = 0; i < results.length; i++) {
    const randomIndex = Math.floor(Math.random() * keys.length); // Chọn ngẫu nhiên
    const randomKey = keys[randomIndex];
    results[i].style.backgroundImage = `url(${images[randomKey]})`; // Gán ảnh cho các kết quả
    results[i].style.backgroundSize = "contain"; // Đảm bảo ảnh vừa khung
    results[i].style.backgroundRepeat = "no-repeat"; // Không lặp lại ảnh
  }
}

const shakeButton1 = document.getElementById("shake");
const sound = new Audio("tiengxocdia.mp3"); // Thay đổi đường dẫn đến tệp âm thanh của bạn

// Hàm phát âm thanh khi nhấn nút
function playSound() {
    sound.currentTime = 0; // Đặt lại thời gian phát âm thanh về đầu
    sound.play(); // Phát âm thanh
}

// Gán sự kiện cho nút "Xóc"
shakeButton1.addEventListener("click", function() {
    playSound(); // Gọi hàm phát âm thanh
    // Bạn có thể thêm các hành động khác ở đây nếu cần
});

// Gán sự kiện cho các nút
openButton.addEventListener("click", openBat);
shakeButton.addEventListener("click", shakeBat);




