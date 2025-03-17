// randomGradient.js

// Returns a random HEX color string.
export function getRandomColor() {
    // Ensure a six-digit hex with leading zeros if necessary.
    const color = Math.floor(Math.random() * 0xffffff).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  
  // Generates a linear gradient string using three random colors.
  export function getRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();
    
    // For example, a 45 degree linear gradient.
    return `linear-gradient(45deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`;
  }
  