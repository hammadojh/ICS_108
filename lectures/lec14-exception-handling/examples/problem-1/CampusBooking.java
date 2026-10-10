import java.util.Scanner;
import java.util.InputMismatchException;

public class CampusBooking {
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      // P1-C2: Protect the read and success report.
      try {
         // P1-C1: A non-integer token interrupts this read.
         int seats = scnr.nextInt();
         System.out.println("Seats requested: " + seats);
      }
      // P1-C3: Handle the mismatch, then continue below.
      catch (InputMismatchException e) {
         System.out.println("Enter a whole number.");
      }
      System.out.println("Session complete.");
   }
}
