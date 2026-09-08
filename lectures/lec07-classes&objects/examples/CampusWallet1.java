// P1-C1: A class defines a type for campus wallet objects.
public class CampusWallet1 {
   // P1-C2: Each wallet has an instance field named balance.
   public int balance;

   public static void main(String[] args) {
      // P1-C3: new creates one object of this class.
      // P1-C4: wallet stores a reference to that object.
      CampusWallet1 wallet = new CampusWallet1();
      // P1-C5: The dot selects a member of this object.
      wallet.balance = 20;
      System.out.println("Balance: " + wallet.balance + " SAR");
   }
}
