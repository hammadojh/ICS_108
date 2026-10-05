import java.util.ArrayList;

interface Payable {
   int getBonus();
}
// P2-C1: Comparable<Employee> supplies typed natural ordering.
abstract class Employee implements Payable, Comparable<Employee> {
   private String name;
   @Override
   // P2-C2: The result sign describes this name relative to the other.
   public int compareTo(Employee other) {
      // P2-C3: Delegate to String's consistent name ordering.
      return name.compareTo(other.name);
   }
   public Employee(String name) { this.name = name; }
   public String getName() { return name; }
   public abstract int getBonus();
   @Override
   public String toString() { return name; }
}
class StudentEmployee extends Employee {
   private int hours;
   public StudentEmployee(String name, int hours) {
      super(name);
      this.hours = hours;
   }
   public int getHours() { return hours; }
   @Override
   public int getBonus() { return 20 + hours; }
}
class Manager extends Employee {
   public Manager(String name) { super(name); }
   @Override
   public int getBonus() { return 50; }
}
public class CampusPayroll {
   public static int payment(Payable item) { return item.getBonus(); }
   public static void printStaff(ArrayList<Employee> staff) {
      for (Employee employee : staff) {
         System.out.println(employee + " | Bonus: " + payment(employee));
      }
   }
   public static void main(String[] args) {
      ArrayList<Employee> staff = new ArrayList<Employee>();
      staff.add(new Manager("Omar"));
      staff.add(new StudentEmployee("Nora", 10));
      printStaff(staff);
      System.out.println("Omar after Nora: " +
            (staff.get(0).compareTo(staff.get(1)) > 0));
   }
}
