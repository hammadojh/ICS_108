public class CampusWallet8A {
   private int balance;

   // P1-C1: Constructors can share a name when their parameters differ.
   public CampusWallet8A() {
      // P1-C2: This constructor delegates to the int constructor.
      this(20);
   }

   public CampusWallet8A(int balance) {
      this.balance = balance;
   }

   public void addMoney(int amount) {
      balance += amount;
   }

   public int getBalance() {
      return balance;
   }

   public static void main(String[] args) {
      // P1-C3: Arguments select the matching constructor.
      CampusWallet8A standard = new CampusWallet8A();
      CampusWallet8A custom = new CampusWallet8A(50);
      System.out.println("Standard: " + standard.getBalance() + " SAR");
      System.out.println("Custom: " + custom.getBalance() + " SAR");
   }
}
