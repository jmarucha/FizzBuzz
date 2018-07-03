class CustomFizzBuzz {
    constructor(ruleset) {
        this.ruleset = ruleset || [
            [3, CustomFizzBuzz.simplyAdd("Fizz")],
            [5, CustomFizzBuzz.simplyAdd("Buzz")]
        ];
    }
    buzzify(number) {
        let result = [];
        for (let rule of this.ruleset)
            if (number % rule[0]  == 0)
                rule[1](result);
        return result.join("") || number.toString();
    }
    static addBefore(str, letter) {
        return function(array) {
            for (let i = 0; i < array.length; ++i) {
                if (array[i].startsWith(letter)) {
                    array.splice(i, 0, str);
                    return;
                } 
            }
            array.push(str);
        }
    }
    static simplyAdd(str) {
        return function(array) {
            array.push(str);
        }
    }
    static reverse() {
        return function(array) {
            array.reverse();
        }
    }
    static clearAndAdd(str) {
        return function(array) {
            array.splice(0, array.length);
            array.push(str);
        }
    }
}
module.exports = CustomFizzBuzz;