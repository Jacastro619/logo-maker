// create a class shapes
// Shape will be used as parent to create individual shapes and add unique properties
class Shapes {
  constructor(fill) {
    this.fill = fill;
  }
}
// create shape classes by using extends from shapes class
// in each shape class create a function render() that will return a template literal that will have all the neccessary information that will create an svg file based on the users inputs
class Triangle extends Shapes {
  constructor(fill, cx, cy, r) {
    super(fill);
    this.cx = cx;
    this.cy = cy;
    this.r = r;
  }
}

const tri = new Triangle("blue");

console.log(tri.fill);
// create module.export
