CustomFizzBuzz = require("./fizzbuzz.js");
commandLineArgs = require("command-line-args");
commandLineUsage = require("command-line-usage");

const optionDefinitions = [
    {
      name: 'help',
      alias: 'h',
      type: Boolean,
      description: 'Display this usage guide.'
    },
    {
      name: 'upto',
      alias: 'u',
      type: Number,
      description: 'FizzBuzz prints integers up to N',
      typeLabel: '<N>' },
      {
        name: 'rules',
        type: String,
        multiple: true,
        description: 'The rules in format <number>--<action>(args). Allowed actions are:\n\
simplyAdd(<string>) - simply put a string instead of the number\n\
clearAndAdd(<string>) - clear current fizzes and buzzes and add <string>\n\
addBefore(<string>,<letter>) - add a <string> before string starting with <letter>\n\
reverse() - reverse the order of fizzes and buzzes\n\
custom(<lambda expression>) - function operating on the array of current fizzes and buzzes\n\
Any \" character must be escaped.',
        typeLabel: '<rules>' },
  ];

const options = commandLineArgs(optionDefinitions)


if (options.help) {
    const usage = commandLineUsage([
    {
        header: 'FizzBuzz',
        content: 'Customable FizzBuzz printer.'
    },
    {
        header: 'Options',
        optionList: optionDefinitions
    },
    {
        content: 'Project home: {underline https://github.com/me/example}'
    }
    ])
    console.log(usage)
    } else {

    var ruleset = [
        {number: 3, action: CustomFizzBuzz.simplyAdd("Fizz")},
        {number: 5, action: CustomFizzBuzz.simplyAdd("Buzz")},
        {number: 7, action: CustomFizzBuzz.simplyAdd("Bang")},
        {number: 11, action: CustomFizzBuzz.clearAndAdd("Bong")},
        {number: 13, action: CustomFizzBuzz.addBefore("Fezz", "B")},
        {number: 17, action: CustomFizzBuzz.reverse()}
    ]
    if (options.rules) {
        ruleset = options.rules.map(function (rule) {
            let ruleArray = rule.split(/--/);
            return {
                number: parseInt(ruleArray[0]),
                action: eval("CustomFizzBuzz."+ruleArray[1])
            }
        });
    }

    fizzBuzzBangBongFezz = new CustomFizzBuzz(ruleset)


    function fixedWidthString(str, width) {
        if (str.length > width) return str;
        return " ".repeat(width-str.length) + str;
    }
    function printBuzzedLine(number) {
        const width = 14;
        let rowLabel = fixedWidthString(number.toString(), 4);
        let rowValue = fixedWidthString(fizzBuzzBangBongFezz.buzzify(number), width);
        str = rowLabel + ": " + rowValue;
        console.log(str);
    }

    examples = [21, 33, 65, 195, 143, 255]; //examples given problem

    for (let i = 1; i <= (options.upto || 100); ++i)
        printBuzzedLine(i);
}