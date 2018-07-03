class CustomFizzBuzz {
    constructor(ruleset) {
        this.ruleset = ruleset || [
            {number: 3, action: CustomFizzBuzz.simplyAdd("Fizz")},
            {number: 5, action: CustomFizzBuzz.simplyAdd("Buzz")}
        ];
    }
    buzzify(number) {
        let result = [];
        for (let rule of this.ruleset)
            if (number % rule.number  == 0)
                rule.action(result);
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
    static custom(lambda) {
        return lambda;
    }
}
module.exports = CustomFizzBuzz;