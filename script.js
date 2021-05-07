let content = document.querySelector(".content");
let author = document.querySelector(".author");

async function getData() {
  let response = await fetch('https://api.quotable.io/random');

  let jsonData = await response.json();

  if (response.ok) {
    let quote = jsonData
    author.textContent = quote.author;
    content.textContent = quote.content;

  } else  {
    author.textContent = "Error Occurred";
    content.textContent = "Error Occurred";
  }
}


getData()