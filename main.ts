dfplayer.MP3_setSerial(SerialPin.P14, SerialPin.P13)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 330) {
        dfplayer.execute(
        dfplayer.playType.type2
        )
        dfplayer.folderPlay(3, 1, dfplayer.yesOrNot.type1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P12, 0)
    } else if (pins.analogReadPin(AnalogPin.P2) > 330) {
        dfplayer.execute(
        dfplayer.playType.type2
        )
        dfplayer.folderPlay(3, 2, dfplayer.yesOrNot.type1)
        servos.P0.setAngle(90)
        basic.pause(5000)
        servos.P0.setAngle(0)
    }
})
