import java.util.Scanner;
import java.util.InputMismatchException;

public class CampusBooking {
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      // P2-C1: Repeat until one read succeeds.
      boolean needInput = true;
      // P2-C3: Stop if there are no more tokens.
      while (needInput && scnr.hasNext()) {
         try {
            int seats = scnr.nextInt();
            System.out.println("Seats requested: " + seats);
            needInput = false;
         }
         catch (InputMismatchException e) {
            System.out.println("Enter a whole number.");
            // P2-C2: Remove only the rejected token.
            scnr.next();
         }
      }
      System.out.println("Session complete.");
   }
}
