// create a class shapes
// Shape will be used as parent to create individual shapes and add unique properties
class Shapes {
  constructor(color) {
    this.color = color;
  }
}

const trianglePolyPoints = ["150", "18 244", "182 56", "182"];
// create shape classes by using extends from shapes class
// in each shape class create a function render() that will return a template literal that will have all the neccessary information that will create an svg file based on the users inputs
class Triangle extends Shapes {
  constructor(color, polygonPoints) {
    super(color);
    this.polygonPoints = polygonPoints;
  }
  render() {
    return `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${this.polygonPoints}" fill="${this.color}"/>
        </svg>`;
  }
}

class Square extends Shapes {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  render() {
    return `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="${this.width}" height="${this.height}" fill="${this.color}" />
        </svg>`;
  }
}

class Circle extends Shapes {
  constructor(color, cx, cy, r) {
    super(color);
    this.cx = cx;
    this.cy = cy;
    this.r = r;
  }
  render() {
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}"/>
        </svg>`;
  }
}

// create module.export
module.exports = { Triangle, Square, Circle };
