public class MinutesConverter {
   // P2-C1: Arguments fill typed parameters in the same order.
   public static int toMinutes(int hours, int minutes) {
      // P2-C2: The method returns one int value to the caller.
      return hours * 60 + minutes;
   }

   public static void main(String[] args) {
      // P2-C3: The returned value is stored before printing.
      int first = toMinutes(1, 30);
      System.out.println("First: " + first);
      // P2-C4: Argument expressions are evaluated before the call.
      int second = toMinutes(1 + 1, 5);
      System.out.println("Second: " + second);
   }
}
