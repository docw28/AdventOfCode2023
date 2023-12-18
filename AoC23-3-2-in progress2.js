input_string = `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;  //Take in input string
input_array = [];

input_string = input_string.split("\n");    //Split it into lines 
input_string.forEach(line => input_array.push(line.split(""))); //Split the lines

gears = [];
nums = [];

function getGears(inputArr, outputArr) {
    for (y=0;y<inputArr.length;y++) {
        outputArr[y] = [];
        for (x=0;x<inputArr[y].length;x++) {
            outputArr[y][x] = +(inputArr[y][x] == "*");
        }
    }
}

function getNums(inputArr, outputArr) {
    n = 1;
    dot = 0;
    for (y=0;y<inputArr.length;y++) {
        outputArr[y] = [];
        for (x=0;x<inputArr[y].length;x++) {
            if (!isNaN(inputArr[y][x])) {
                outputArr[y][x] = n;
                dot = 0;
            } else {
                outputArr[y][x] = ".";
                if (dot == 0) {
                    n = (n+1)%10;
                }
                dot = 1;
            }
        }
    }
}

function output(arr) {
    str = "";
    for (y=0;y<arr.length;y++) {
        str += "\n";
        for (x=0;x<arr[y].length;x++) {
            str += arr[y][x];
        }
    }
    return str;
}

getGears(input_array, gears);
getNums(input_array, nums);

console.log(output(input_array));
//console.log(output(gears));
console.log("xxxxxxxxxx");
console.log(output(nums));