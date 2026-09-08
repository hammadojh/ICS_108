import java.util.Scanner;

public class TollCalculator {
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);

      System.out.print("Hour (0-23): ");
      int hour = scnr.nextInt();
      System.out.print("Day type (0 weekday, 1 weekend/holiday): ");
      int dayType = scnr.nextInt();

      double toll;
      if (dayType == 0) {
         if (hour < 6) {
            toll = 1.55;
         }
         else if (hour < 10) {
            toll = 4.65;
         }
         else if (hour < 18) {
            toll = 2.35;
         }
         else {
            toll = 1.55;
         }
      }
      else {
         if (hour < 8) {
            toll = 1.55;
         }
         else if (hour < 12) {
            toll = 3.05;
         }
         else if (hour < 16) {
            toll = 3.45;
         }
         else if (hour < 19) {
            toll = 3.60;
         }
         else if (hour < 22) {
            toll = 3.05;
         }
         else {
            toll = 1.55;
         }
      }

      System.out.printf("Toll: $%.2f%n", toll);
      scnr.close();
   }
}
