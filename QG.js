let sentences = ["Clean Up Your Room when you feel Shitty",
  "Even the most beautiful flower grow through dirt",
  "Start With Why -- Simon Sinek",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. -- Gandhi",
  "Control your own destiny or someone else will. -- Jack Welch",
  'True friends stab you in the front.',
  "Your time is limited, so don't waste it living someone else's life. -- Steve Jobs." ,
  "You dont need to have a 100-person company to develop that idea. -— Larry Page",
]

let button = document.querySelector('.glow-on-hover');
let quote = document.getElementById('quote');

function fortuneSelector(){
  let randomQuotes = Math.floor(Math.random() * sentences.length);
  return sentences[randomQuotes];
}

function showFortune(){
  quote.innerHTML = fortuneSelector();
  button.innerHTML = "Click Me!";
  button.style.cursor = "default";

  //add your code here

}

button.addEventListener('click', showFortune);
