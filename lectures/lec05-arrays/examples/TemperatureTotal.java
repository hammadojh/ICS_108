import java.util.Scanner;

public class TemperatureTotal {
   public static void main(String[] args) {
      Scanner input = new Scanner(System.in);

      // P2-C1: Allocate five int elements; each starts at 0.
      int[] temperatures = new int[5];

      System.out.println("Enter 5 temperatures:");
      // P2-C2: Visit indexes 0 through length - 1.
      for (int i = 0; i < temperatures.length; i++) {
         // P2-C3: Store one input value in the current element.
         temperatures[i] = input.nextInt();
      }

      // P2-C5: Start the running total at 0.
      int total = 0;
      // P2-C4: Traverse the stored values a second time.
      for (int i = 0; i < temperatures.length; i++) {
         total += temperatures[i];
      }

      System.out.println("Total: " + total);
   }
}
