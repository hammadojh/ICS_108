import java.util.Scanner;

public class NumberSeries {
   public static void main(String[] args) {
      Scanner input = new Scanner(System.in);
      System.out.print("How many values? ");
      int n = input.nextInt();

      for (int i = 0; i < n; i++) {
         System.out.print(i + " ");
      }
      System.out.println();
      input.close();
   }
}
