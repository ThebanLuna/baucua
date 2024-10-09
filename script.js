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
const bat = document.querySelector('.batxx');
const results = [
  document.querySelector('.result1'),
  document.querySelector('.result2'),
  document.querySelector('.result3')
];


function openBat() {
  bat.style.transition = "transform 0.5s";
  bat.style.transform = "translateY(-650px)";
}


function shakeBat() {
  bat.style.transform = "translateY(0)";

}

function handleShake() {
  setTimeout(randomizeResults, 800);
}


shakeButton.addEventListener("click", handleShake);

    let lastX, lastY, lastZ;
    let lastUpdate = 0;

window.addEventListener('devicemotion', (event) => {
        const currentTime = Date.now();
        if ((currentTime - lastUpdate) > 100) {
            const diffTime = (currentTime - lastUpdate);
            lastUpdate = currentTime;

            const x = event.accelerationIncludingGravity.x;
            const y = event.accelerationIncludingGravity.y;
            const z = event.accelerationIncludingGravity.z;

            const speed = Math.abs(x + y + z - (lastX || 0) - (lastY || 0) - (lastZ || 0)) / diffTime * 10000;

            if (speed > 3000) { // Thay đổi giá trị này để điều chỉnh độ nhạy
                handleShake();
              playSound()
            }

            lastX = x;
            lastY = y;
            lastZ = z;
        }
    });

function randomizeResults() {
  const keys = Object.keys(images);
  for (let i = 0; i < results.length; i++) {
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    results[i].style.backgroundImage = `url(${images[randomKey]})`;
    results[i].style.backgroundSize = "contain";
    results[i].style.backgroundRepeat = "no-repeat";
  }
}

const shakeButton1 = document.getElementById("shake");
const sound = new Audio("tiengxocdia.mp3");


function playSound() {
  sound.currentTime = 0;
  sound.play();
}


shakeButton1.addEventListener("click", function () {
  playSound();

});


openButton.addEventListener("click", openBat);
shakeButton.addEventListener("click", shakeBat);


 document.addEventListener('click', function(event) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = `${event.pageX - 15}px`; // Để căn giữa trái tim
            heart.style.top = `${event.pageY - 15}px`; // Để căn giữa trái tim
            document.body.appendChild(heart);
            
            // Xóa trái tim sau 0.5 giây
            setTimeout(() => {
                heart.remove();
            }, 500);
        });

