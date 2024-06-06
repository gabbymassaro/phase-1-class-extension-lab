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
    if ((sides[0] + sides[1]) > sides[2] && (sides[1] + sides[2]) > sides[0] && (sides[0] + sides[2]) > sides[1]) {
      return true
    } else {
      return false
    }
  }
}

let polygon = new Polygon([5, 5, 5])
let triangle = new Triangle([13, 4, 3])
triangle.isValid