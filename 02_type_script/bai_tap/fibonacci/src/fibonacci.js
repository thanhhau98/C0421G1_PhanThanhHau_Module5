function fibonacci(number) {
    var a = 1;
    var b = 1;
    var c = 0;
    var sum = a + b;
    if (number == 1) {
        return 1;
    }
    else {
        if (number == 2) {
            return 2;
        }
        else {
            for (var i = 3; i <= number; i++) {
                c = a + b;
                sum += c;
                a = b;
                b = c;
            }
            return sum;
        }
    }
}
var number = 6;
console.log("Tổng " + number + " số fibonacci là " + fibonacci(number));
