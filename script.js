
const btn = document.getElementById("btn");
const title = document.getElementById("title");
const msg = document.getElementById("message");

btn.addEventListener("click", () => {
  const x = randInt(80),
    y = randInt(100),
    z = randInt(50);
  const question = `What is ${x} + ${y} - ${z}`;
  const answer = x + y - z;
  const usrInput = Number(prompt(question));
  if (usrInput === answer) {
    title.textContent = "Waaah Kamu Dapet voucheer diskon nih!";
    msg.textContent ="Ayoo Buruan Daftarrr Sekarang Juga";
  }
});

function randInt(n) {
  return Math.floor(Math.random() * n);
}