import java.util.Scanner;

public class HealthData {
  public static void main(String[] args) {
    final int DAYS_PER_YEAR = 365;
    final int MINUTES_PER_DAY = 24 * 60;
    final int BEATS_PER_MINUTE = 72;

    Scanner scnr = new Scanner(System.in);
    int ageYears = scnr.nextInt();

    int ageDays = ageYears * DAYS_PER_YEAR + ageYears / 4;
    long ageMinutes = (long) ageDays * MINUTES_PER_DAY;
    long heartbeats = ageMinutes * BEATS_PER_MINUTE;

    System.out.println("Days: " + ageDays);
    System.out.println("Minutes: " + ageMinutes);
    System.out.println("Heartbeats: " + heartbeats);
  }
}
