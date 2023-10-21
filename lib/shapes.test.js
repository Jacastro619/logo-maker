// test for each shape size, shape type, shape color, and shape text
const Shapes = require("./shapes.js");

describe("Shapes", () => {
  describe("render triangle", () => {
    it("Should return the appropiate template literal", () => {
      const trianglePolyPoints = ["150", "18 244", "182 56", "182"];
      const triangle = new Shapes.Triangle(
        "blue",
        trianglePolyPoints.join(", ")
      );
      expect(triangle.render())
        .toEqual(`<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
        </svg>`);
    });
  });
});
