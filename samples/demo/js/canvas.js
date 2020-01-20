function prepareCanvas(canvas) {
  // fix canvas
  const dpi = window.devicePixelRatio
  const style = getComputedStyle(canvas)
  const dimen = name => +style.getPropertyValue(name).slice(0, -2)
  canvas.setAttribute("width", dimen("width") * dpi)
  canvas.setAttribute("height", dimen("height") * dpi)

  const ctx = canvas.getContext("2d")
  ctx.scale(dpi, dpi)
}

function resetCanvas(canvas) {
  const ctx = canvas.getContext("2d")
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  return ctx
}

function drawPoint(ctx, point, color) {
  if (color) {
    ctx.save()
    ctx.fillStyle = color
    ctx.fillRect(point[0] - 2, point[1] - 2, 4, 4)
    ctx.restore()
  } else {
    ctx.fillRect(point[0] - 2, point[1] - 2, 4, 4)
  }
}

function drawPath(canvas, path) {
  if (path.length <= 0) {
    return
  }
  const ctx = resetCanvas(canvas)
  drawPoint(ctx, path[0])
  ctx.beginPath()
  ctx.moveTo(path[0][0], path[0][1])
  for (let i = 1; i < path.length; i++) {
    const point = path[i]
    drawPoint(ctx, point)
    ctx.lineTo(point[0], point[1])
  }
  ctx.stroke()
}

function distanceOf([x1, y1], [x2, y2]) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
  }
