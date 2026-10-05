import java.util.ArrayList;

// P1-C1: An interface states a required operation.
interface Payable {
   int getBonus();
}
// P1-C2: Employee adopts the Payable contract.
// P1-C4: The abstract class keeps shared employee state.
abstract class Employee implements Payable {
   private String name;
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
   // P1-C3: This parameter depends on the interface.
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
   }
}
