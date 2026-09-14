public class CampusWallet {
   private int balance;

   public CampusWallet() {
      this(20);
   }

   public CampusWallet(int balance) {
      this.balance = balance;
   }

   public void addMoney(int amount) {
      balance += amount;
   }

   public int getBalance() {
      return balance;
   }

   public static void main(String[] args) {
      CampusWallet standard = new CampusWallet();
      CampusWallet custom = new CampusWallet(50);
      // P2-C1: Assigning a reference makes another name for the same object.
      CampusWallet alias = custom;
      // P2-C2: The int variable contains its number directly.
      int amount = 10;
      alias.transferTo(standard, amount);
      System.out.println("Standard: " + standard.getBalance() + " SAR");
      System.out.println("Custom: " + custom.getBalance() + " SAR");
      System.out.println("Alias: " + alias.getBalance() + " SAR");
      System.out.println("Amount: " + amount);
   }

   // P2-C3: The recipient parameter receives a copy of an object reference.
   public void transferTo(CampusWallet recipient, int amount) {
      balance -= amount;
      recipient.addMoney(amount);
      amount = 0; // Only this local primitive copy changes.
   }
}
