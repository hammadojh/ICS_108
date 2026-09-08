public class StateTrace {
  public static void main(String[] args) {
    int numPeople = 5;
    int firstCount = numPeople;

    numPeople += 3;
    numPeople -= 2;
    numPeople -= 4;
    numPeople += 5;

    System.out.println("Current: " + numPeople);
    System.out.println("First: " + firstCount);
  }
}
