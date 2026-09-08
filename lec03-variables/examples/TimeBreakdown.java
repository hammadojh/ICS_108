public class TimeBreakdown {
  public static void main(String[] args) {
    int totalSeconds = 7325;

    int hours = totalSeconds / 3600;
    int afterHours = totalSeconds % 3600;
    int minutes = afterHours / 60;
    int seconds = afterHours % 60;

    System.out.println(hours + ":" + minutes + ":" + seconds);
  }
}
