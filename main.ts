let distanceBuf = 0

namespace mpfr3ddy {

    let pinA : DigitalPin
    let pinD : DigitalPin
    let initialized = false

    let playIndex = 0

    //% blockId=freddy_init block="MP-Fr3ddy init|Pin A %pina| Pin D %pind"
    //% pina.defl=DigitalPin.P10
    //% pind.defl=DigitalPin.P11
    //% group="MP3" weight=40
    export function initialize(pina: DigitalPin, pind: DigitalPin) {
        pinA = pina
        pinD = pind

        initialized = true
    }

    //% blockId=freddy_init block="MP-Fr3ddy play current"
    //% group="MP3" weight=46
    export function play_current() {
        if (!initialized) {
            return
        }

        pins.digitalWritePin(pinA, 0)
        pins.digitalWritePin(pinD, 0)
        basic.pause(15)
        pins.digitalWritePin(pinA, 1)
        pins.digitalWritePin(pinD, 1)
    }

    //% blockId=freddy_init block="MP-Fr3ddy play next"
    //% group="MP3" weight=45
    export function play_next() {
        if (!initialized) {
            return
        }

        pins.digitalWritePin(pinA, 0)
        pins.digitalWritePin(pinD, 1)
        basic.pause(60)
        pins.digitalWritePin(pinA, 1)
        pins.digitalWritePin(pinD, 1)

        playIndex++
    }

    //% blockId=freddy_init block="MP-Fr3ddy play previous"
    //% group="MP3" weight=44
    export function play_previous() {
        if (!initialized) {
            return
        }

        pins.digitalWritePin(pinA, 1)
        pins.digitalWritePin(pinD, 0)
        basic.pause(60)
        pins.digitalWritePin(pinA, 1)
        pins.digitalWritePin(pinD, 1)

        playIndex--
    }

    //% blockId=freddy_init block="MP-Fr3ddy play index"
    //% group="MP3" weight=43
    export function play_index() : Number {
        return playIndex
    }

    //% blockId=freddy_init block="MP-Fr3ddy volume up"
    //% group="MP3" weight=41
    export function volume_up() {
        if (!initialized) {
            return
        }

        pins.digitalWritePin(pinA, 0)
        pins.digitalWritePin(pinD, 1)
        basic.pause(500)
        pins.digitalWritePin(pinA, 1)
        pins.digitalWritePin(pinD, 1)
    }

    //% blockId=freddy_init block="MP-Fr3ddy volume down"
    //% group="MP3" weight=40
    export function volume_down() {
        if (!initialized) {
            return
        }

        pins.digitalWritePin(pinA, 1)
        pins.digitalWritePin(pinD, 0)
        basic.pause(500)
        pins.digitalWritePin(pinA, 1)
        pins.digitalWritePin(pinD, 1)
    }
}