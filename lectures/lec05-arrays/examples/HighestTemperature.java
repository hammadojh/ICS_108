public class HighestTemperature {
   public static void main(String[] args) {
      int[] temperatures = {-3, -7, -1, -5, -4};

      // P3-C1: Use the first element as the first candidate.
      // P3-C5: A real element works even when all values are negative.
      int highest = temperatures[0];

      // P3-C4: Keep the index paired with the highest value.
      int highestIndex = 0;

      // P3-C2: Index 0 is handled, so start at index 1.
      for (int i = 1; i < temperatures.length; i++) {
         // P3-C3: Replace the candidate only with a higher value.
         if (temperatures[i] > highest) {
            highest = temperatures[i];
            highestIndex = i;
         }
      }

      System.out.println("Highest temperature: " + highest);
      System.out.println("Day: " + (highestIndex + 1));
   }
}
