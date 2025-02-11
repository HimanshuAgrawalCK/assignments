class InsufficientFundsException extends Exception{
    public InsufficientFundsException(String message){
        super(message);
    }
}


class ATM{
    private double balance;
    ATM(double bal){
        this.balance = bal;
    }
    void withdraw(double amount) throws InsufficientFundsException{
        if(amount > this.balance){
            throw new InsufficientFundsException("Balance Not Available");
        }
        else {
            this.balance-=amount;
            System.out.println("Current Balance : " + this.balance);
        }
    }

    void deposit(double amount){
        this.balance+=amount;
        System.out.println("Current Balance :" + this.balance);
    }
}



public class Main {
    public static void main(String[] args)
    {
        ATM ob1 = new ATM(50000);
        ob1.deposit(5000);
        try {
            ob1.withdraw(100000);
        }
        catch (InsufficientFundsException e){
            System.out.println("Caught Exception " + e.getMessage());
        }

    }
}