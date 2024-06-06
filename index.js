class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    let count = this.sides.length
    return count
  }

  get perimeter() {
    let sumEach = 0
    this.sides.forEach((side, index) => {
        sumEach += side
    })
    return sumEach
  }
}

class Triangle extends Polygon {
  get isValid() {
    let sides = this.sides
    return((sides[0]+sides[1]) > sides[2] && (sides[1]+sides[2]) > sides[0] && (sides[0]+sides[2]) > sides[1])
  }
}

class Square extends Polygon {
  get isValid() {
    let square = this.perimeter / 4
    return (Number.isInteger(square))
  }

  get area() {
    return (this.sides[0] * this.sides[1])
  }
}