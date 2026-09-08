import java.util.Scanner;

public class CommandCheck {
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);

      System.out.print("Command: ");
      String command = scnr.nextLine();

      boolean recognized = command.equals("start") || command.equals("status");

      if (!recognized) {
         System.out.println("Unknown command");
      }
      else {
         System.out.println("Accepted: " + command);
      }

      scnr.close();
   }
}
