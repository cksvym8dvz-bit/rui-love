const lockScreen = document.getElementById("lockScreen");
const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const errorText = document.getElementById("errorText");
const bgm = document.getElementById("bgm");

const PASSWORD = "1018";

unlockBtn.addEventListener("click", () => {

  if (passwordInput.value === PASSWORD) {

    bgm.volume = 0.25;
    bgm.play();

    lockScreen.style.opacity = "0";
    lockScreen.style.pointerEvents = "none";

    setTimeout(() => {
      lockScreen.remove();
    }, 500);

  } else {

    errorText.style.opacity = "1";
    passwordInput.value = "";

  }

});

passwordInput.addEventListener("keydown", (e) => {

  if (e.key === "Enter") {
    unlockBtn.click();
  }

});

const messages = [
  "るいってかわいいよね～",
  "会えない時間も楽しもうね！",
  "帰ってくるの楽しみにしてるよ！",
  "7ヶ月ありがとう！",
  "いつでもるいの味方だからね！",
  "無理しすぎすぎずにね！",
  "るいはまわりを見れてて凄いよ！",
  "話を聞いてくれるところ好きよ",
  "相手の気持ちを考えれるところもほんとに好き",
  "包容力があってとっても安心感がある！",
  "なんでもセンスがあって面白い！",
  "歌上手すぎ腹立つ😠",
  "るいは優しすぎてもうほんとに惚れる",
  "子供っぽいところもかわいくて好き❤",
  "いろいろ考えてくれるところもすーき",
  "頑張り屋さんなところが応援したくなる",
  "るいはかわいすぎるんだよ",
  "身の回りの人を大切にしてるのも好き",
  "気遣いができるところも大好き",
  "見た目可愛すぎるくせに中身かっこいいときある😠",
  "ほかの人の話でも真剣に聞いてるのも好き",
  "責任感が強いのも好き（でも無理せずにね）",
  "照れ屋さんなところもかわい💛",
  "めっちゃ元気なところもかわいい♡",
  "俺と考え方が似てて気が合うよね！",
  "なんやかんや素直でかわいい",
  "言葉遣いも素敵",
  "たまにお調子乗りになるとこ結構好きやで笑",
  "ちょっと最近いろんな人にるいのこと自慢した過ぎる",
  "ノリがいいところも大好き😊",
  "俺の一番大好きな彼女であり一番尊敬できる人",
  "るいはほんとに素敵な人",
  "はやく会いたいなー",
  "チューして😊",
  "はぐしてーよー"
];

const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg",
  "photo6.jpg",
  "photo7.jpg",
  "photo8.jpg",
  "photo9.jpg",
  "photo10.jpg",
  "photo11.jpg",
  "photo12.jpg",
  "photo13.jpg",
  "photo14.jpg",
  "photo15.jpg",
  "photo16.jpg",
  "photo17.jpg",
  "photo18.jpg",
  "photo19.jpg",
  "photo20.jpg",
  "photo21.jpg",
  "photo22.jpg",
  "photo23.jpg",
  "photo24.jpg",
  "photo25.jpg",
  "photo26.jpg",
  "photo27.jpg",
  "photo28.jpg",
  "photo29.jpg",
  "photo30.jpg",
  "photo31.jpg",
  "photo32.jpg",
  "photo33.jpg",
  "photo34.jpg",
  "photo35.jpg",
  "photo36.jpg",
  "photo37.jpg",
  "photo38.jpg"
];

const rareMemory = {
  text: "帰ってきたら楽しみにしててね🤫",
  photo: "rare.jpg"
};

const button = document.getElementById("button");
const messageBox = document.getElementById("messageBox");
const memoryPhoto = document.getElementById("memoryPhoto");

let isAnimating = false;
let typingTimer = null;

button.addEventListener("click", () => {

  if (isAnimating) return;

  isAnimating = true;

  if (typingTimer !== null) {
    clearInterval(typingTimer);
    typingTimer = null;
  }

  button.disabled = true;

  let count = 0;

  messageBox.innerText = "";

  const loading = setInterval(() => {

    messageBox.innerText =
      "Loading" + ".".repeat(count % 4);

    count++;

  }, 250);

  setTimeout(() => {

    clearInterval(loading);

    const isRare = Math.random() < 0.12;

    memoryPhoto.classList.remove("show");

    setTimeout(() => {

      if (isRare) {

        memoryPhoto.src = rareMemory.photo;

        typeMessage(rareMemory.text);

      } else {

        const randomPhoto =
          Math.floor(Math.random() * photos.length);

        const randomMessage =
          Math.floor(Math.random() * messages.length);

        memoryPhoto.src = photos[randomPhoto];

        typeMessage(messages[randomMessage]);

      }

      memoryPhoto.classList.add("show");

    }, 120);

    if (isRare) {
      setTimeout(secretEvent, 900);
    }

    button.disabled = false;
    isAnimating = false;

  }, 1600);

});

function typeMessage(text) {

  if (typingTimer !== null) {
    clearInterval(typingTimer);
  }

  messageBox.innerText = "";

  let i = 0;

  typingTimer = setInterval(() => {

    messageBox.innerText += text[i];

    i++;

    if (i >= text.length) {

      clearInterval(typingTimer);
      typingTimer = null;

    }

  }, 60);

}

function secretEvent() {

  const overlay = document.createElement("div");

  overlay.className = "secret-overlay";

  overlay.innerHTML = `
    <div class="secret-text">
      <h2>俺の一番の気持ち😊</h2>
      <p>帰ってきたらいっぱいはぐとチューしような😊</p>
    </div>
  `;

  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.remove();
  }, 5000);

}