public class PrintHeading {
   // P1-C1: Define the helper inside the class, outside main.
   // P1-C2: void means no value is returned.
   public static void printHeading() {
      System.out.println("ICS 108");
      System.out.println("Methods practice");
   }

   public static void main(String[] args) {
      // P1-C3: Call the method using its name and parentheses.
      printHeading();
      System.out.println("Start");
      // P1-C4: Reuse the body; execution returns after this call.
      printHeading();
   }
}
