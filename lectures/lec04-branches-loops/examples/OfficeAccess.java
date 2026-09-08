import java.util.Scanner;

public class OfficeAccess {
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);

      System.out.print("Hour (0-23): ");
      int hour = scnr.nextInt();

      boolean morning = hour >= 8 && hour < 12;
      boolean afternoon = hour >= 13 && hour < 17;
      boolean officeOpen = morning || afternoon;

      if (officeOpen) {
         System.out.println("Office: open");
      }
      else {
         System.out.println("Office: closed");
      }

      scnr.close();
   }
}
