package Code;

public class AdvancedCalculator extends Calculator {

    public double square(double number) {
        return Math.pow(number, 2);
    }

    /**
     * Calculate the cube of a number.
     *
     * @param number The input number.
     * @return The cube of the input number.
     */
    public double cube(double number) {
        return Math.pow(number, 3);
    }

    /**
     * Calculate the square root of the sum of squares of two numbers.
     *
     * @param a The first number.
     * @param b The second number.
     * @return The square root of the sum of squares.
     */
    public double sqrtSumOfSquares(double a, double b) {
        double sumOfSquares = Math.pow(a, 2) + Math.pow(b, 2);
        return Math.sqrt(sumOfSquares);
    }
}
