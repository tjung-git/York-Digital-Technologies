package Tests;

import Code.AdvancedCalculator;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.Test;

public class AdvancedCalculatorTest {

    // Tests squaring positive, zero, and negative numbers
    @Test
    public void testPower() {
        AdvancedCalculator calc = new AdvancedCalculator();
        assertEquals(9, calc.square(3));
        assertEquals(0, calc.square(0));
        assertEquals(25, calc.square(5));
        assertEquals(25, calc.square(-5));
    }

    // Tests cubing positive, zero, and negative numbers
    @Test
    public void testCube() {
        AdvancedCalculator calc = new AdvancedCalculator();
        assertEquals(27, calc.cube(3));
        assertEquals(0, calc.cube(0));
        assertEquals(-8, calc.cube(-2));
    }

    // Tests sqrt of sum of squares for Pythagorean triples and zero
    @Test
    public void testSqrtSumOfSquares() {
        AdvancedCalculator calc = new AdvancedCalculator();
        assertEquals(5, calc.sqrtSumOfSquares(3, 4));
        assertEquals(0, calc.sqrtSumOfSquares(0, 0));
        assertEquals(13, calc.sqrtSumOfSquares(5, 12));
    }
}
