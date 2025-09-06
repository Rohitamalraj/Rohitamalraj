const fs = require("fs");

const quotes = [
  "Power isn’t determined by your size, but by the size of your heart and dreams. — Luffy",
  "Inherited Will, the swelling of the changing times, and the dreams of people — cannot be stopped. — Gol D. Roger",
  "When do you think people die? When they are forgotten. — Dr. Hiluluk",
  "Scars on the back are a swordsman’s shame. — Roronoa Zoro",
  "Don’t start a fight unless you’re ready to end it. — Sanji",
  "There comes a time when a man has to fight for his dreams. — Usopp",
  "History is written by those who live through it. — Nico Robin"
];

const fonts = [
  "serif",
  "monospace",
  "cursive",
  "Georgia",
  "Courier New",
  "Times New Roman",
  "Trebuchet MS"
];

let duration = 5; // 5 seconds per quote

// Create values for <animate> attributes
const textValues = quotes.join(";");
const fontValues = fonts.join(";");

let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="700" height="150">
  <rect width="100%" height="100%" fill="black"/>
  <text x="50%" y="50%" fill="gold" font-size="18" text-anchor="middle" dominant-baseline="middle">
    <tspan>
      <animate attributeName="text" dur="${quotes.length * duration}s" repeatCount="indefinite"
        values="${textValues}"/>
    </tspan>
    <animate attributeName="font-family" dur="${fonts.length * duration}s" repeatCount="indefinite"
      values="${fontValues}"/>
    <animate attributeName="fill" dur="15s" repeatCount="indefinite"
      values="gold;white;#FF4500;#00CED1;#ADFF2F;gold"/>
  </text>
</svg>`;

fs.mkdirSync("output", { recursive: true });
fs.writeFileSync("output/quotes.svg", svg);

console.log("🏴‍☠️ One Piece quotes SVG generated with styled fonts!");
