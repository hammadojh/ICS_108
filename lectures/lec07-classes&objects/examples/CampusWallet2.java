public class CampusWallet2 {
   // P2-C1: private keeps the field inside the class's implementation.
   private int balance = 20;

   // P2-C2: A mutator changes the receiving object's state.
   public void addMoney(int amount) {
      balance = balance + amount;
   }

   // P2-C3: An accessor returns data without changing it.
   public int getBalance() {
      return balance;
   }

   public static void main(String[] args) {
      CampusWallet2 wallet = new CampusWallet2();
      System.out.println("Before: " + wallet.getBalance() + " SAR");
      wallet.addMoney(10);
      System.out.println("After: " + wallet.getBalance() + " SAR");
   }
}
