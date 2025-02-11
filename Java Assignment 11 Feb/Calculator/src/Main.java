
class IllegalArgumentException extends Exception{
    public IllegalArgumentException(String message){
        super(message);
    }
}

class Calculator{
    int a,b;
    char operator;

    Calculator(int a, int b){
        this.a=a;
        this.b=b;
    }

    void calculate(char op){
        try{
            setOperator(op);
        }
        catch (IllegalArgumentException e){
            System.out.println("Invalid Operation Perfomed"+ e.getMessage());
        }
        catch (ArithmeticException e)
        {
            System.out.println(e.getMessage());
        }
    }

    void setOperator(char operator) throws IllegalArgumentException{
        switch (operator) {
            case '+':
                add();
                break;
            case '-':
                sub();
                break;
            case '/':
                divide();
                break;
            case '*':
                multiply();
                break;
            default:
                throw new IllegalArgumentException("Invalid operation: " + operator);
        }
    }


    void divide() throws ArithmeticException{
        try{
            System.out.println("A by B is " + (this.a/this.b));
        }
        catch(ArithmeticException e){
            throw new ArithmeticException("Not Divisible by Zero");
        }
    }

    void add(){
        System.out.println("A + B is " + (this.a+this.b));
    }

    void sub(){
        System.out.println("A - B is " + (this.a-this.b));
    }

    void multiply(){
        System.out.println("A * B is " + (this.a*this.b));
    }


}

public class Main {
    public static void main(String[] args)
    {
        Calculator obj1 = new Calculator(40,10);
        obj1.calculate('/');
        obj1.calculate('+');
    }
}