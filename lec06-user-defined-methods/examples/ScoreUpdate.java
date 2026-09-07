public class ScoreUpdate {
   // P3-C1: score receives a copy of the caller's int value.
   public static int addPoint(int score) {
      // P3-C2: bonus is local to this method body.
      int bonus = 1;
      score = score + bonus;
      return score;
   }

   public static void main(String[] args) {
      int score = 7;
      int updated = addPoint(score);
      System.out.println("Original: " + score);
      System.out.println("Updated: " + updated);
      // P3-C3: A new call gets fresh parameters and locals.
      System.out.println("Again: " + addPoint(score));
      // P3-C4: Assignment updates the caller's score.
      score = addPoint(score);
      System.out.println("Stored: " + score);
   }
}
