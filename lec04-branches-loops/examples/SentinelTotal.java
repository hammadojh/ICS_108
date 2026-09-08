import java.util.Scanner;

public class SentinelTotal {
   public static void main(String[] args) {
      Scanner input = new Scanner(System.in);
      int total = 0;
      int count = 0;

      System.out.print("Value (0 to stop): ");
      int value = input.nextInt();

      while (value != 0) {
         total += value;
         count++;
         System.out.print("Value (0 to stop): ");
         value = input.nextInt();
      }

      System.out.println("Count: " + count);
      System.out.println("Total: " + total);
      input.close();
   }
}
