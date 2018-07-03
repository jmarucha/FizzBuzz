CustomFizzBuzz = require("./fizzbuzz.js")

fizzBuzz = new CustomFizzBuzz;

fizzBuzzBangBongFezz = new CustomFizzBuzz ([
    [3, "Fizz"],
    [5, "Buzz"],
    [7, "Bang"],
    [11, "Bong"],
    [13, "Fezz"],
])


function fixedWidthString(str, width) {
    if (str.length > width) return str;
    return " ".repeat(width-str.length) + str;
}
function printBuzzedLine(number) {
    const width = 12;
    let rowLabel = fixedWidthString(number.toString(), 4);
    let firstColumn = fixedWidthString(fizzBuzz.buzzify(number), width);
    let secondColumn = fixedWidthString(fizzBuzzBangBongFezz.buzzify(number), width);
    str = rowLabel + ": " + firstColumn + secondColumn;
    console.log(str);
}

for (let i = 1; i <= 500; ++i) {
    printBuzzedLine(i);
}
