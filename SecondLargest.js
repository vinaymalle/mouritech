function secondLargest(values) {

    if (values.length <= 1) {
        return null;
    }

    if (values.length == 2) {
        return values[0] < values[1] ? values[0] : values[1];
    }

    let largest = Number.MIN_VALUE;
    let secondLargest = values[0];

    for (let value of values) {

        if (largest < value) {
            secondLargest = largest;
            largest = value;
        } else if (secondLargest < value) {
            secondLargest = value;
        }
    }

    return secondLargest;
}

let inputArr = [6, 13, 22, 18, 0, 3, 45, 57, 5, 12];
let result = secondLargest(inputArr);
console.log(result);
