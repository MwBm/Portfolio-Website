const textElement = document.getElementById('text');
const text = "I am currently studying Computer Science at the University of Santa Clara";
let index = 0;

function type() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index); // Use `textContent` to avoid extra HTML formatting
    index++;
    setTimeout(type, 35); // Adjust typing speed as needed
  } 
}

type();