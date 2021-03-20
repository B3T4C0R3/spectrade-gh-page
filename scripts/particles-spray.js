var Canvas = document.getElementById('particle_art_mobile')
var ctx = Canvas.getContext('2d')

var resize = function () {
  Canvas.width = Canvas.clientWidth
  Canvas.height = Canvas.clientHeight
}
window.addEventListener('resize', resize)
resize()

var elements = []
var presets = {}

presets.o = function (x, y, s, dx, dy) {
  return {
    x: x,
    y: y,
    r: 50 * s,
    w: 10 * s,
    dx: dx,
    dy: dy,
    draw: function (ctx, t) {
      this.x += this.dx
      this.y += this.dy

      ctx.beginPath()
      ctx.arc(
        this.x + +Math.sin((50 + x + t / 10) / 100) * 3,
        this.y + +Math.sin((45 + x + t / 10) / 100) * 4,
        this.r,
        0,
        2 * Math.PI,
        false
      )
      ctx.lineWidth = this.w
      ctx.strokeStyle = '#0000008a'
      ctx.stroke()
    },
  }
}

for (var x = 0; x < Canvas.width; x++) {
  for (var y = 0; y < Canvas.height; y++) {
    if (Math.round(Math.random() * 50000) == 1 && elements.length < 4) {
      var s = (Math.random() * 5 + 1) / 3
      if (
        Math.round(Math.random()) == 1 &&
        x > Canvas.width * 0.2 &&
        y < Canvas.height * 0.8
      ) {
        elements.push(presets.o(x, y, s, 0, 0))
      }
    }
  }
}

setInterval(function () {
  ctx.clearRect(0, 0, Canvas.width, Canvas.height)

  var time = new Date().getTime()
  for (var e in elements) elements[e].draw(ctx, time)
}, 0.2)
