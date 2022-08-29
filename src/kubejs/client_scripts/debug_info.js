onEvent('client.debug_info.left', event => {
    let lines = event.getLines()
    lines.clear()
})

onEvent('client.debug_info.right', event => {
    let lines = event.getLines()
    lines.clear()
})