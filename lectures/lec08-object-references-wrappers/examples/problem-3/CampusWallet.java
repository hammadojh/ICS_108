public class CampusWallet {
   private int balance;
   // P3-C1: Integer is a reference type that represents an int value.
   private Integer reward;

   public CampusWallet() { this(20); }
   public CampusWallet(int balance) { this.balance = balance; }
   public void addMoney(int amount) { balance += amount; }
   public int getBalance() { return balance; }

   public void transferTo(CampusWallet recipient, int amount) {
      balance -= amount;
      recipient.addMoney(amount);
      amount = 0;
   }

   public void setReward(Integer reward) { this.reward = reward; }

   public int getAvailableBalance() {
      // P3-C2: null represents an absent optional reward.
      if (reward == null) { return balance; }
      // P3-C3: Arithmetic unboxes Integer to int.
      return balance + reward;
   }

   public static void main(String[] args) {
      CampusWallet standard = new CampusWallet();
      CampusWallet custom = new CampusWallet(50);
      CampusWallet alias = custom;
      int amount = 10;
      alias.transferTo(standard, amount);
      System.out.println("Standard: " + standard.getBalance() + " SAR");
      System.out.println("Custom: " + custom.getBalance() + " SAR");
      System.out.println("Alias: " + alias.getBalance() + " SAR");
      System.out.println("Amount: " + amount);
      // P3-C4: Passing int 5 to an Integer parameter autoboxes it.
      standard.setReward(5);
      System.out.println("With reward: " + standard.getAvailableBalance() + " SAR");
      standard.setReward(null);
      System.out.println("Without reward: " + standard.getAvailableBalance() + " SAR");
   }
}
