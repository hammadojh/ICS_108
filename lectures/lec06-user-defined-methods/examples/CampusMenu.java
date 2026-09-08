public class CampusMenu {
   // P1-C1: Methods belong inside the class, outside main.
   // P1-C2: void means no value is returned.
   public static void printMenu() {
      System.out.println("Sandwich - 12 SAR");
      System.out.println("Juice - 5 SAR");
   }

   public static void main(String[] args) {
      // P1-C3: A name and parentheses form a method call.
      printMenu();
      System.out.println("Order placed: Sandwich");
      // P1-C4: Each call runs the body and returns to the caller.
      printMenu();
   }
}
