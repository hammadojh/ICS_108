import java.util.Scanner;

public class GradeClassifier {
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);

      System.out.print("Score (0-100): ");
      int score = scnr.nextInt();

      String grade;
      if (score >= 90) {
         grade = "A";
      }
      else if (score >= 80) {
         grade = "B";
      }
      else if (score >= 70) {
         grade = "C";
      }
      else if (score >= 60) {
         grade = "D";
      }
      else {
         grade = "F";
      }

      System.out.println("Grade: " + grade);
      scnr.close();
   }
}
