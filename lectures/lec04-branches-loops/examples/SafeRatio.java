import java.util.Scanner;

public class SafeRatio {
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);

      System.out.print("Numerator: ");
      int numerator = scnr.nextInt();
      System.out.print("Denominator: ");
      int denominator = scnr.nextInt();

      if (denominator != 0 && (double) numerator / denominator >= 2.0) {
         System.out.println("Ratio: high");
      }
      else if (denominator == 0) {
         System.out.println("Ratio unavailable: denominator is zero");
      }
      else {
         System.out.println("Ratio: ordinary");
      }

      scnr.close();
   }
}
