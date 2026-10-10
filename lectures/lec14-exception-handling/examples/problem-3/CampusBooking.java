import java.util.Scanner;
import java.util.InputMismatchException;

public class CampusBooking {
   // P3-C2: Declare the checked exception for callers.
   static void validateSeats(int seats) throws Exception {
      if (seats < 1 || seats > 4) {
         // P3-C1: Reject before reporting success.
         throw new Exception("Seats must be 1 to 4.");
      }
   }
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      boolean needInput = true;
      while (needInput && scnr.hasNext()) {
         try {
            int seats = scnr.nextInt();
            // P3-C3: A failure leaves this call and try.
            validateSeats(seats);
            System.out.println("Seats requested: " + seats);
            needInput = false;
         }
         // P3-C4: Specific handler before general handler.
         catch (InputMismatchException e) {
            System.out.println("Enter a whole number.");
            scnr.next();
         }
         catch (Exception e) {
            System.out.println(e.getMessage());
         }
      }
      System.out.println("Session complete.");
   }
}
