module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let converted = number.toString().split("");
    console.log(converted);
    let doubleNumber = "";
    let teensCheckNumber = "";
    if (number < 10) {
        console.log(units[number]);
        return units[number];
        //////////////////////////////
    } else if (number < 20) {
        console.log(teens[converted[1]]);
        return teens[converted[1]];
        //////////////////////////////
    } else if (number < 100) {
        if (converted[1] == "0") {
            console.log(dozens[converted[0] - 2]);
            return dozens[converted[0] - 2];
        } else {
            doubleNumber = dozens[converted[0] - 2] + " " + units[converted[1]];
            console.log(doubleNumber);
            return doubleNumber;
        }
        ////////////////////////////////////////////////////////////////////////////

        ////////////////////////////////////////////////////////////////////////////
    } else if (number < 1000) {
        teensCheckNumber = `${converted[1]}${converted[2]}`;
        console.log(teensCheckNumber);
        ////////////////////////////////////////////////////////////////////////////
        if (teensCheckNumber < 10) {
            if (converted[2] == "0") {
                console.log(`${units[converted[0]]} hundred`);
                return `${units[converted[0]]} hundred`;
            } else {
                console.log(
                    `${units[converted[0]]} hundred ${units[converted[2]]}`
                );
                return `${units[converted[0]]} hundred ${units[converted[2]]}`;
            }
        }
        ////////////////////////////////////////////////////////////////////////////
        else if (teensCheckNumber < 20) {
            console.log(
                `${units[converted[0]]} hundred ${teens[converted[2]]}`
            );
            return `${units[converted[0]]} hundred ${teens[converted[2]]}`;
            ////////////////////////////////////////////////////////////////////////////
        } else if (teensCheckNumber < 100) {
            //работает
            if (converted[1] == "0" && converted[2] == "0") {
                console.log(`${units[converted[0]]} hundred`);
                ////////////////////////////////////////////////////////////////////////////
            } else if (converted[2] == "0") {
                //работает
                console.log(
                    `${units[converted[0]]} hundred ${dozens[converted[1] - 2]}`
                );
                return `${units[converted[0]]} hundred ${
                    dozens[converted[1] - 2]
                }`;
            } else {
                ////////////////////////////////////////////////////////////////////////////
                console.log(
                    `${units[converted[0]]} hundred ${
                        dozens[converted[1] - 2]
                    } ${units[converted[2]]}`
                );
                return `${units[converted[0]]} hundred ${
                    dozens[converted[1] - 2]
                } ${units[converted[2]]}`;
            }
        }
    }
};
