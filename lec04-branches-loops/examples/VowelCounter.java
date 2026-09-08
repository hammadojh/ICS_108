import java.util.Scanner;

public class VowelCounter {
   public static void main(String[] args) {
      Scanner input = new Scanner(System.in);
      System.out.print("Lowercase word: ");
      String word = input.next();
      int vowels = 0;

      for (int i = 0; i < word.length(); i++) {
         char letter = word.charAt(i);
         boolean isVowel = letter == 'a' || letter == 'e'
               || letter == 'i' || letter == 'o'
               || letter == 'u';
         if (isVowel) {
            vowels++;
         }
      }

      System.out.println("Vowels: " + vowels);
      input.close();
   }
}
