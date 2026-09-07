public class PrintHeading {
   // P1-C1: Methods belong inside the class, outside main.
   // P1-C2: void means no value is returned.
   public static void printHeading() {
      System.out.println("ICS 108");
      System.out.println("Methods practice");
   }

   public static void main(String[] args) {
      // P1-C3: A name and parentheses form a method call.
      printHeading();
      System.out.println("Start");
      // P1-C4: Each call runs the body and returns to the caller.
      printHeading();
   }
}
