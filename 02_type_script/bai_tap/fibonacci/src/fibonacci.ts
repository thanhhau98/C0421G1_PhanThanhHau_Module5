function fibonacci(number: number): number {
    let a = 1;
    let b = 1;
    let c = 0;
    let sum = a + b;
    if (number == 1) {
        return 1;
    } else {
        if (number == 2) {
            return 2;
        } else {
            for (let i = 3; i <= number; i++) {
                c = a + b;
                sum += c;
                a = b;
                b = c;
            }
            return sum;
        }
    }

}

let number = 6;
console.log("Tổng " + number + " số fibonacci là " + fibonacci(number));
