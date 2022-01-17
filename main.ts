/**
 * 受信したデータをシリアル通信にて、コンソール画面に出力する。
 */
radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    serial.writeValue(name, value)
})
/**
 * 無線のグループを1にする。
 */
radio.setGroup(1)
radio.setTransmitPower(7)
/**
 * 温度及び明るさを無線で1秒ごとに送信する。
 */
basic.forever(function () {
    radio.sendValue("light", input.lightLevel())
    radio.sendValue("temp", input.temperature())
    basic.pause(1000)
})
