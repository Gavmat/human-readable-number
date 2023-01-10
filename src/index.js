module.exports = function toReadable(number) {
    let frst = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten'
    }

    let scnd = {
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
    }

    let thrd = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }

    if (number >= 0 && number <= 10) {
        return console.log(frst[number]);
    }

    if (number > 10 && number < 21) {
        return console.log(scnd[number]);
    }

    if (number > 20 && number < 100) {
        if (number.toString()[1] == "0") {
            return console.log(thrd[number.toString()[0]]);
        } else {
            return console.log(thrd[number.toString()[0]] + " " + frst[number.toString()[1]]);
        }
    }

    if (number > 99 && number < 1000) {
        if (number.toString()[1] == "0" && number.toString()[2] == "0")
            return console.log(frst[number.toString()[0]] + " hundred");
        if (number.toString()[1] == "0")
            return console.log(frst[number.toString()[0]] + " hundred " + frst[number.toString()[2]]);
        if (number.toString()[1] == "1" && number.toString()[2] == 0)
            return console.log(frst[number.toString()[0]] + " hundred ten");
        if (number.toString()[1] == "1")
            return console.log(frst[number.toString()[0]] + " hundred " + scnd[number.toString().split(2).join("")]);
        if (number.toString()[2] == "0")
            return console.log(frst[number.toString()[0]] + " hundred " + thrd[number.toString()[1]]);
        else
            return console.log(frst[number.toString()[0]] + " hundred " + thrd[number.toString()[1]] + " " + frst[number.toString()[2]]);
    }
}

