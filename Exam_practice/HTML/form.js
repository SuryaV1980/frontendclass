const input = [12,45,78,90,56]

const output = [];
let arr = [12, 45, 78, 23, 90, 56];

let first = -Infinity;
let second = -Infinity;
let third = -Infinity;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] > first) {
        third = second;
        second = first;
        first = arr[i];

    } else if (arr[i] > second) {
        third = second;
        second = arr[i];

    } else if (arr[i] > third) {
        third = arr[i];
    }
}

console.log(third);