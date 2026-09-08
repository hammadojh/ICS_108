import java.util.Scanner;

public class StudentInput {
  public static void main(String[] args) {
    Scanner scnr = new Scanner(System.in);

    System.out.print("Age: ");
    int age = scnr.nextInt();
    scnr.nextLine(); // discard the newline after the number

    System.out.print("Full name: ");
    String fullName = scnr.nextLine();

    System.out.print("Grade: ");
    char grade = scnr.next().charAt(0);

    System.out.println(
        "Saved: " + fullName + ", age " + age + ", grade " + grade);
  }
}
