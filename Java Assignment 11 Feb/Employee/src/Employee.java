abstract class Emp {
    String name;
    int id, salary;

    abstract void calculateBonus();
}

class Manager extends Emp {
    int bonus = 20;

    Manager(String name, int id, int sal) {
        this.name = name;
        this.salary = sal;
        this.id = id;
    }

    @Override
    void calculateBonus() {
        System.out.println("The Bonus for Manager is " + (salary * bonus) / 100f);
    }
}


class Developer extends Emp {
    int bonus = 10;

    Developer(String name, int id, int sal) {
        this.name = name;
        this.salary = sal;
        this.id = id;
    }

    @Override
    void calculateBonus() {
        System.out.println("The Bonus for Developer is " + (salary * bonus) / 100f);
    }
}


class Employee {
    public static void main(String[] args) {
        Developer dev1 = new Developer("Himanshu", 12345, 50000);
        Manager m1 = new Manager("Hello", 10001, 80000);
        m1.calculateBonus();
        dev1.calculateBonus();
    }
}