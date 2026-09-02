public class TemperatureBasics {
   public static void main(String[] args) {
      // P1-C1: An array stores several elements of one type.
      // P1-C2: Declare and initialize five int elements.
      int[] temperatures = {23, 25, 24, 22, 26};

      // P1-C3: Index 0 is the first position.
      // P1-C4: Read the value stored at index 0.
      System.out.println("First day: " + temperatures[0]);

      // P1-C5: Replace the value stored at index 3.
      temperatures[3] = 27;
      System.out.println("Corrected fourth day: " + temperatures[3]);

      // P1-C6: length is 5; the last index is length - 1.
      System.out.println("Days stored: " + temperatures.length);
      System.out.println("Last day: "
            + temperatures[temperatures.length - 1]);
   }
}
