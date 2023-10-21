// create a class shapes
// Shape will be used as parent to create individual shapes and add unique properties
class Shapes {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }
}

// create shape classes by using extends from shapes class
// in each shape class create a function render() that will return a template literal that will have all the neccessary information that will create an svg file based on the users inputs
class Triangle extends Shapes {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>
  
    <text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
</svg>`;
  }
}

class Square extends Shapes {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect width="200" height="200" fill='${this.color}' />
  
    <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
</svg>`;
  }
}

class Circle extends Shapes {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${this.color}"/>
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
</svg>`;
  }
}

// create module.export
module.exports = { Triangle, Square, Circle };
