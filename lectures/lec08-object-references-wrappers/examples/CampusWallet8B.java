public class CampusWallet8B {
   private int balance;

   public CampusWallet8B() {
      this(20);
   }

   public CampusWallet8B(int balance) {
      this.balance = balance;
   }

   public void addMoney(int amount) {
      balance += amount;
   }

   public int getBalance() {
      return balance;
   }

   public static void main(String[] args) {
      CampusWallet8B standard = new CampusWallet8B();
      CampusWallet8B custom = new CampusWallet8B(50);
      // P2-C1: Assigning a reference makes another name for the same object.
      CampusWallet8B alias = custom;
      // P2-C2: The int variable contains its number directly.
      int amount = 10;
      alias.transferTo(standard, amount);
      System.out.println("Standard: " + standard.getBalance() + " SAR");
      System.out.println("Custom: " + custom.getBalance() + " SAR");
      System.out.println("Alias: " + alias.getBalance() + " SAR");
      System.out.println("Amount: " + amount);
   }

   // P2-C3: The recipient parameter receives a copy of an object reference.
   public void transferTo(CampusWallet8B recipient, int amount) {
      balance -= amount;
      recipient.addMoney(amount);
      amount = 0; // Only this local primitive copy changes.
   }
}
