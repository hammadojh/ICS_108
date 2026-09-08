import java.util.Scanner;

public class TeenRange {
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);

      System.out.print("Age: ");
      int age = scnr.nextInt();

      boolean isTeen = age >= 13 && age <= 19;
      System.out.println("Teen: " + isTeen);

      scnr.close();
   }
}
