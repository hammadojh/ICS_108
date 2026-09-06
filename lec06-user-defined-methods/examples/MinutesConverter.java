public class MinutesConverter {
   // P2-C1: Arguments fill typed parameters in the same order.
   public static int toMinutes(int hours, int minutes) {
      // P2-C2: Return one int result to the caller.
      return hours * 60 + minutes;
   }

   public static void main(String[] args) {
      // P2-C3: Store the returned value, then print it.
      int first = toMinutes(1, 30);
      System.out.println("First: " + first);
      // P2-C4: Evaluate 1 + 1 before passing the argument.
      int second = toMinutes(1 + 1, 5);
      System.out.println("Second: " + second);
   }
}
