function isOldEnoughToDrive(age) {
    if (age >= 16) { return "Yes" }
    return "No";
}
//console.log(isOldEnoughToDrive(15));


function numberIsDivisible(num) {
    if (num > 0) {
        if (num % 2 === 0 && num % 3 === 0) {
            return "Divisible by 2 and 3";
        }
        if (num % 2 === 0) {
            return "Divisible by 2";
        }
        if (num % 3 === 0) {
            return "Divisible by 3";
        }
        else {
            return "its not divisible"
        }
    }
}
console.log(numberIsDivisible(1))

