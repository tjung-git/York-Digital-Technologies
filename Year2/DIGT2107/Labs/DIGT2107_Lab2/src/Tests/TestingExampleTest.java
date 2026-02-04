package Tests;

import Code.TestingExample;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.Test;

public class TestingExampleTest {

    // Tests reward points for amounts below the first threshold
    @Test
    public void testBelowLimit() {
        assertEquals(0, TestingExample.RewardPoints(50, 0));
        assertEquals(0, TestingExample.RewardPoints(99, 0));
    }

    // Tests reward points for amounts in the first range (100-299)
    @Test
    public void testFirstRange() {
        assertEquals(100, TestingExample.RewardPoints(100, 0));
        assertEquals(299, TestingExample.RewardPoints(299, 0));
    }

    // Tests reward points for amounts in the second range (300-499)
    @Test
    public void testSecondRange() {
        assertEquals(600, TestingExample.RewardPoints(300, 0));
        assertEquals(998, TestingExample.RewardPoints(499, 0));
    }

    // Tests reward points for amounts in the third range (500+)
    @Test
    public void testThirdRange() {
        assertEquals(1500, TestingExample.RewardPoints(500, 0));
        assertEquals(1800, TestingExample.RewardPoints(600, 0));
    }

    // Tests negative value handling for spent amount
    @Test
    public void testNegativeValue() {
        assertEquals(-1, TestingExample.RewardPoints(-10, 0));
    }
}
