public class CampusWallet3 {
   private int balance;

   // P3-C1: A constructor initializes an object during creation.
   public CampusWallet3(int balance) {
      // P3-C2: this.balance is the field; balance is the parameter.
      this.balance = balance;
   }

   public void addMoney(int amount) {
      balance = balance + amount;
   }

   public int getBalance() {
      return balance;
   }

   public static void main(String[] args) {
      // P3-C3: Two new expressions create separate instance fields.
      CampusWallet3 first = new CampusWallet3(20);
      CampusWallet3 second = new CampusWallet3(50);
      first.addMoney(10);
      System.out.println("First: " + first.getBalance() + " SAR");
      System.out.println("Second: " + second.getBalance() + " SAR");
   }
}
