package Tests;

import Code.Calculator;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.Test;

public class CalculatorTest {

    // Tests addition for positive, zero, and large numbers
    @Test
    public void testAddition() {
        Calculator calc = new Calculator();
        assertEquals(6, calc.add(3, 3));
        assertEquals(0, calc.add(0, 0));
        assertEquals(1000000, calc.add(500000, 500000));
    }

    // Tests subtraction for positive, zero, and negative results
    @Test
    public void testSubtraction() {
        Calculator calc = new Calculator();
        assertEquals(3, calc.subtract(6, 3));
        assertEquals(-5, calc.subtract(0, 5));
        assertEquals(0, calc.subtract(100, 100));
    }

    // Tests multiplication for positive, zero, and large numbers
    @Test
    public void testMultiplication() {
        Calculator calc = new Calculator();
        assertEquals(9, calc.multiply(3, 3));
        assertEquals(0, calc.multiply(5, 0));
        assertEquals(1000000, calc.multiply(1000, 1000));
    }

    // Tests division for positive numbers and zero dividend
    @Test
    public void testDivision() {
        Calculator calc = new Calculator();
        assertEquals(2, calc.divide(6, 3));
        assertEquals(0, calc.divide(0, 5));
    }

    // Tests division by zero exception
    @Test
    public void testDivideByZero() {
        Calculator calc = new Calculator();
        assertThrows(ArithmeticException.class, () -> calc.divide(10, 0));
    }
}
