class CustomFizzBuzz {
    constructor(ruleset) {
        this.ruleset = ruleset || [[3,"Fizz"], [5, "Buzz"]];
    }
    buzzify(number) {
        let result = "";
        for (let rule of this.ruleset)
            if (number % rule[0]  == 0)
                result += rule[1];
        return result || number.toString();
    }
}
module.exports = CustomFizzBuzz;