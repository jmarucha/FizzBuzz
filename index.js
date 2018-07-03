CustomFizzBuzz = require("./fizzbuzz.js")

fizzBuzz = new CustomFizzBuzz;

fizzBuzzBangBongFezz = new CustomFizzBuzz ([
    [3, CustomFizzBuzz.simplyAdd("Fizz")],
    [5, CustomFizzBuzz.simplyAdd("Buzz")],
    [7, CustomFizzBuzz.simplyAdd("Bang")],
    [11, CustomFizzBuzz.clearAndAdd("Bong")],
    [13, CustomFizzBuzz.addBefore("Fezz", "B")],
    [17, CustomFizzBuzz.reverse()],
])


function fixedWidthString(str, width) {
    if (str.length > width) return str;
    return " ".repeat(width-str.length) + str;
}
function printBuzzedLine(number) {
    const width = 14;
    let rowLabel = fixedWidthString(number.toString(), 4);
    let firstColumn = fixedWidthString(fizzBuzz.buzzify(number), width);
    let secondColumn = fixedWidthString(fizzBuzzBangBongFezz.buzzify(number), width);
    str = rowLabel + ": " + firstColumn + secondColumn;
    console.log(str);
}

examples = [21, 33, 65, 195, 143, 255]; //examples given problem

for (let i of examples)
    printBuzzedLine(i);