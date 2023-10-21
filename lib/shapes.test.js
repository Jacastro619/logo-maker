// test for each shape size, shape type, shape color, and shape text
const Shapes = require("./shapes.js");

describe("Shapes", () => {
  describe("render triangle", () => {
    it("Should return the appropiate template literal", () => {
      const triangle = new Shapes.Triangle("blue", "SVG");
      expect(triangle.render())
        .toMatch(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
  
    <text x="150" y="150" font-size="50" text-anchor="middle" fill="white">SVG</text>
  
</svg>`);
    });
  });
  describe("render square", () => {
    it("Should return the appropiate template literal", () => {
      const square = new Shapes.Square("red", "SVG");
      expect(square.render())
        .toMatch(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect width="200" height="200" fill='red' />
  
    <text x="100" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  
</svg>`);
    });
  });
  describe("render circle", () => {
    it("Should return the appropiate template literal", () => {
      const circle = new Shapes.Circle("green", "SVG");
      expect(circle.render())
        .toMatch(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="green"/>
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  
</svg>`);
    });
  });
});
