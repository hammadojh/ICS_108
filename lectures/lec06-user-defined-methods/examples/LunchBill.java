public class LunchBill {
   // P2-C1: Arguments fill typed parameters in the same order.
   public static int calculateTotal(int sandwiches, int juices) {
      // P2-C2: The method returns one int value to the caller.
      return sandwiches * 12 + juices * 5;
   }

   public static void main(String[] args) {
      // P2-C3: The returned value is stored before printing.
      int myLunch = calculateTotal(1, 1);
      System.out.println("My lunch: " + myLunch + " SAR");
      // P2-C4: Argument expressions are evaluated before the call.
      int lunchForTwo = calculateTotal(1 + 1, 2);
      System.out.println("Lunch for two: " + lunchForTwo + " SAR");
   }
}
