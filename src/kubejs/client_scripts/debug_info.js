ClientEvents.leftDebugInfo(event => {
    let lines = event.getLines()
    lines.clear()
})

ClientEvents.rightDebugInfo(event => {
    let lines = event.getLines()
    lines.clear()
})