import java.util.ArrayList;
// P3-C1: Import the sorting utility.
import java.util.Collections;

interface Payable {
   int getBonus();
}
abstract class Employee implements Payable, Comparable<Employee> {
   private String name;
   @Override
   public int compareTo(Employee other) {
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
      // P3-C2: Sort references in this list.
      Collections.sort(staff);
      System.out.println("Sorted:");
      // P3-C3: Each object keeps its bonus rule.
      printStaff(staff);
   }
}
