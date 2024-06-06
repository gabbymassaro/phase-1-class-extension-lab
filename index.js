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

let polygon = new Polygon( [ 5, 5, 5 ] )
console.log(polygon.countSides)
console.log(polygon.perimeter)