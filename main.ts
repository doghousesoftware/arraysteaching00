input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index <= text_list.length; index++) {
        basic.showString("" + (text_list[index]))
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(text_list.length)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (text_list[2]))
})
let text_list: string[] = []
text_list = [
"apples",
"pears",
"kiwi fruit",
"elephants",
"pineapples"
]
