public class AverageDemo {
  public static void main(String[] args) {
    int totalPoints = 175;
    int attempts = 2;

    double wrongAverage = totalPoints / attempts;
    double rightAverage = (double) totalPoints / attempts;

    System.out.println("Wrong: " + wrongAverage);
    System.out.println("Right: " + rightAverage);
    System.out.printf("Formatted: %.2f%n", rightAverage);
  }
}
