// Modeling a circle
const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here

const circle = {
  radius: r,
  circumference: 2 * Math.PI * r,
  area: Math.PI * (Math.pow(r,2))
};

console.log(`Its circumference is ${circle.circumference}`);
console.log(`Its area is ${circle.area}`);