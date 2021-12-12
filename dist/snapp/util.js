// just some util functions for double checking etc
export { generateFunctionParameters, solver };
/**
 * Generates parameters for equation ax² - bx + c based on a handful of checks
 * @returns Return the parameters a, b and c
 */
function generateFunctionParameters(max) {
    let a = 0;
    let b = 0;
    let c = 0;
    // using module to keep the values within humand sovle-able range
    /* let max = 50; */
    // generating fitting params
    // reason for the do while loop with root check at the end:
    // i dont want equations that have non-whole number roots
    // because that would be annoying to translate into Field elements
    // since Field elements only support whole numbers no floats afaik
    // i also dont want equations that end up having negative roots -> annoying to confirm later on
    do {
        // generating the a,b,c parameters for the smart contract
        a = Math.floor(Math.random() * max + 1);
        b = Math.floor(Math.random() * max);
        c = Math.floor(Math.random() * max);
        // if a was 0 then the equation would be linear
        if (a == 0) {
            a = 1;
        }
    } while (solver(a, b, c)[0] % 1 != 0 ||
        solver(a, b, c)[1] % 1 != 0 ||
        solver(a, b, c)[0] <= 0 ||
        solver(a, b, c)[1] <= 0);
    return [a, b, c];
}
/**
 * Checks if x is a solution to an equation with parameters a, b and c
 * @returns Return wheter x is a valid solution
 */
function sanityCheck(a, b, c, x) {
    // sanity check possible solution
    // ax² - bx + c = 0 must satisfy equation
    let solution = a * (x * x) - b * x + c;
    return solution == 0;
}
/**
 * Solves the equation with parameters a, b and c
 * @returns Return all solutions
 */
function solver(a, b, c) {
    // ax² - bx + c = 0
    // x = (-b) - sqrt(b² - 4ac) / 2a
    // making sure b is negative to have positive roots, makes things easier later on
    b > 0 ? (b = b * -1) : b;
    let x1;
    let x2;
    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    }
    else if (discriminant == 0) {
        x1 = x2 = -b / (2 * a);
    }
    return [x1, x2];
}
