interface Developer{
    void writeCode();
}

interface Tester{
    void testSoftware();
}

class SoftwareEngineer implements Developer,Tester{
    public void writeCode(){
        System.out.println("Developer has completed the code and ready for testing");
    }

    public void testSoftware()
    {
        System.out.println("Testing is in pipeline");
    }
}


public class Main {
    public static void main(String[] args) {
        SoftwareEngineer obj1 = new SoftwareEngineer();
        obj1.writeCode();
        obj1.testSoftware();
    }
}