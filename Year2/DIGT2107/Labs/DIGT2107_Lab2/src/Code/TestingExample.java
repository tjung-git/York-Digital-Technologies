package Code;
/**
 * This class and its method is designed to 
 * help students practice "automated testing"
 * @author May Haidar
 */ 
public class TestingExample {
	/**
	 * This method calculates the reward points a credit card customer gets based on how much money they spent over their credit limit. 
	 * @param spentamount This parameter represents the actual amount spent by the customer as a double value
	 * @param creditlimit This parameter represents credit limit the customer has, as a double value
	 * @return the method returns the number of reward points
	 */
	public static int RewardPoints(double spentamount, double creditlimit) { 
		int rewards = 0; 
		if (spentamount < 0 || creditlimit <0) return -1;
		else if (spentamount - creditlimit < 0) return -1;
		else if (spentamount - creditlimit >= 500) rewards = 3*(int)Math.round(spentamount - creditlimit); 
		else if (spentamount - creditlimit >= 300 && spentamount - creditlimit <= 499) rewards = 2*(int)Math.round(spentamount - creditlimit); 
		else if (spentamount - creditlimit >= 100 && spentamount - creditlimit <=299) rewards = (int)Math.round(spentamount - creditlimit);
		return rewards;

	}

}
