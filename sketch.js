// put in setup whatever needs to be done to get things started
function setup() {

    // this line creates a virtual canvas and attaches it to your HTML
    createCanvas(800, 600).parent('p5')
    noLoop()

}

// put in draw everything you want to draw to the canvas
function draw() {

    // start off with a background
    background(250, 216, 153)
    strokeWeight(1)
    stroke(0, 0, 0)

    // draw here!

    fill(74, 147, 192)
    noStroke()
    beginShape()
    curveVertex(0, 500)
    curveVertex(0, 600)
    curveVertex(800, 600)
    curveVertex(800, 500)
    endShape(CLOSE)

    fill(111, 141, 175)
    noStroke()
    beginShape()
    curveVertex(0, 400)
    curveVertex(0, 500)
    curveVertex(800, 500)
    curveVertex(800, 400)
    endShape(CLOSE)

    fill(250, 226, 156)
    noStroke()
    beginShape()
    curveVertex(0,200)
    curveVertex(0,400)
    curveVertex(800,400)
    curveVertex(800, 200)
    endShape(CLOSE)

    fill(151, 199, 248)
    noStroke()
    beginShape()
    curveVertex(0, 0)
    curveVertex(0, 200)
    curveVertex(800, 200)
    curveVertex(800, 0)
    endShape(CLOSE)

    fill(8, 12, 15)
    noStroke()
    beginShape()
    vertex(0, 1059-600)
    vertex(5, 1053-600)
    vertex(8, 1045-600)
    vertex(9, 1041-600)
    vertex(15, 1042-600)
    vertex(15, 1046-600)
    vertex(19, 1050-600)
    vertex(23, 1052-600)
    vertex(32, 1084-600)
    vertex(28, 1091-600)
    vertex(17, 1058-600)
    vertex(15, 1058-600)
    vertex(14, 1085-600)
    vertex(7, 1085-600)
    vertex(7, 1061-600)
    vertex(1, 1066-600)
    endShape(CLOSE)


}

// this function will print coordinates to the console whenever you click
function mouseClicked() {
    print(int(mouseX), int(mouseY))
}
