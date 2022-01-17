radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    serial.writeValue(name, value)
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    radio.sendValue("light", input.lightLevel())
    radio.sendValue("temp", input.temperature())
    basic.pause(1000)
})
