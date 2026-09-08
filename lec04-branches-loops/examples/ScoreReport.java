import java.util.Scanner;

public class ScoreReport {
   public static void main(String[] args) {
      Scanner input = new Scanner(System.in);
      final int SCORE_COUNT = 3;
      int total = 0;
      int passed = 0;
      int failed = 0;

      for (int i = 0; i < SCORE_COUNT; i++) {
         System.out.print("Score " + (i + 1) + ": ");
         int score = input.nextInt();
         total += score;

         if (score >= 60) {
            passed++;
         }
         else {
            failed++;
         }
      }

      double average = total / (double) SCORE_COUNT;
      System.out.printf("Average: %.1f%n", average);
      System.out.println("Passed: " + passed);
      System.out.println("Failed: " + failed);
      input.close();
   }
}
