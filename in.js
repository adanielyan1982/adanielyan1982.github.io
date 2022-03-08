let num = 0;
while (true) {
    let x = prompt("mutqagreq tiv yev yes khashvem bolor tveri gumar@");
    if (x) {
        num = num + +x;
    } else {
        break;
    }

}
alert(`tveri gumarn e ${num}`);
/*
let alphabetEnglish = "abcdefghijklmnopqrstuvwxyz";
let text = "The quick brown fox jumps";
let pangramAnswer = [];
text = text.toLowerCase();
alert(text);
for (let i = 0; i < 26; i++) {
    if (text.indexOf(alphabetEnglish[i]) == -1) {
        pangramAnswer.push(alphabetEnglish[i]);
    }

}
alert(pangramAnswer);
*/

/*let matrix = [
    [11, 12, 1, 10],
    [11, 5, 1, 3],
    [7, 1, 11, 10],
    [9, 1, 11, 3]
];
let arr = matrix[0];
for (let i = 0; i < matrix[0].length; i++) {
    let counter = 0;
    for (let j = matrix.length - 1; j > 0; j--) {
        if (matrix[j].includes(arr[i])) {
            counter++;
            if (counter === 3) {
                alert(arr[i]);
            }
        }

    }

}
*/
/*
let arr = [2, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 0];
let zer = 0;
for (let i = 0; i < arr.length - zer; i++) {
    if (arr[i] == "0") {
        arr.splice(i, 1);
        i--;
        zer++;
        arr.push(0);

    }

}
alert(arr);
*/
// zuyg kent
/*
function checkEvenOdd(n) {
    if (n % 2 === 0) { //եթե մնացորդը 0 է, ուրեմն զույգ է, վերադարձնի true
        return true;
    } else {
        return false;
    }
}
let num = prompt("insert number");
alert(checkEvenOdd(num));
*/
//fibonacci
/*
function fibonacci(n) {
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
let n = prompt("d");
alert(fibonacci(n));
*/

// pangram 



//aypoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
/*
let arr = [0, 0, 8, 4, 0, 0, 2, 7, 0, 6];
let zer = 0;
for (let i = 0; i < arr.length - zer; i++) {
    if (arr[i] == "0") {
        arr.splice(i, 1);
        i--;
        zer++;
        arr.push(0);

    }

}
alert(arr);
*/
// gtnel 1 ic 100 gumar@
/*






let result = 0;
for (let i = 0; i <= 100; i++) {
    result += i;
}
alert(result);
*/

// mutq eq anun  n tiv yev tpum bolor zuyger@

/*
let n = prompt("please insert number");
for (let i = n; i >= 1; i--) {
    if (i % 2 === 0) {
        alert(`zuyg ${i}`)
    } else {
        alert(`kent ${i}`)
    }
}
*/




// massivneri tpum

/*let arr = [
    [1, 9, 5],
    [3, 8, 4],
    [5, 2, 8],
    [1, 2, 12],
    [9, 3, 3]
];
alert(arr.length);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];

    }

}
alert(sum);
*/
