public class WalletTopUp {
   // P3-C1: balance receives a copy of the caller's int value.
   public static int previewTopUp(int balance) {
      // P3-C2: topUp is local to this method body.
      int topUp = 10;
      balance = balance + topUp;
      return balance;
   }

   public static void main(String[] args) {
      int balance = 20;
      int previewBalance = previewTopUp(balance);
      System.out.println("Current balance: " + balance + " SAR");
      System.out.println("Preview balance: " + previewBalance + " SAR");
      // P3-C3: A new call gets fresh parameters and locals.
      System.out.println("Preview again: " + previewTopUp(balance) + " SAR");
      // P3-C4: Assignment updates the caller's balance.
      balance = previewTopUp(balance);
      System.out.println("Confirmed balance: " + balance + " SAR");
   }
}
