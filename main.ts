datalogger.setColumnTitles("temperature")
basic.forever(function () {
    datalogger.log(datalogger.createCV("temperature", input.temperature()))
    basic.showString("" + (input.temperature()))
    basic.pause(500)
})
