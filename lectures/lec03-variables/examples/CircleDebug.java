public class CircleDebug {
  public static void main(String[] args) {
    double circumference = 10.0;
    int sectorCount = 12;

    double radius = circumference / (2 * Math.PI);
    double area = Math.PI * Math.pow(radius, 2);
    int degreesPerSector = 360 / sectorCount;

    System.out.printf("Radius: %.2f%n", radius);
    System.out.printf("Area: %.2f%n", area);
    System.out.println("Degrees per sector: " + degreesPerSector);
  }
}
