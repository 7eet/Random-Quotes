let card = document.querySelector(".card");
let btn = document.querySelector(".btn");
let content = document.querySelector(".content");
let author = document.querySelector(".author");

let rotate = 0;

async function getData() {
  let response = await fetch('https://api.quotable.io/random');

  let jsonData = await response.json();

  if (response.ok) {
    let quote = jsonData;
    author.textContent = quote.author;
    content.textContent = quote.content;

  } else  {
    author.textContent = "Error Occurred";
    content.textContent = "Error Occurred";
  }
}

btn.addEventListener("click", () => {
  rotate += 360;
  card.style.transform = "rotate(" + rotate + "deg)";
});

getData();