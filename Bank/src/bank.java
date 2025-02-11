class BankAccount{
    private long accountNumber;
    protected float balance;
    private String ownerName;

    void setDetails(long acc,float bal,String ownerName)
    {
        this.accountNumber = acc;
        this.balance = bal;
        this.ownerName = ownerName;
    }

    void getDetails()
    {
        System.out.println("Account Number :  " + this.accountNumber);
        System.out.println("Balance :  " + this.balance);
        System.out.println("Owner Name :  " + this.ownerName);
    }

    void withdraw(int amt)
    {
        if(amt > this.balance)
        {
            System.out.println("NOT AVAILABLE BALANCE");
        }
        else{
            this.balance-=amt;
            System.out.println("Current Balance : " + this.balance);
        }
    }

    void deposit(int amt)
    {
        this.balance+=amt;
        System.out.println("Current Balance is "+this.balance);
    }
}

class SavingsAccount extends BankAccount{
    private float interestRate;
    void setDetails(long acc,float bal, String ownerName, float interest){
        super.setDetails(acc, bal, ownerName);
        this.interestRate=interest;
    }

    @Override
    void getDetails() {
        super.getDetails();
        System.out.println("Interest Rate : "+this.interestRate);
    }

    void applyInterest(float years)
    {
//        System.out.println((this.balance*this.interestRate*years)/100);
        System.out.println("Applied interest is : "+ (this.balance*this.interestRate*years)/100);
        this.balance = this.balance + (this.balance*this.interestRate*years)/100;

    }
}


//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class bank {
    public static void main(String[] args) {
        SavingsAccount obj1 = new SavingsAccount();
        obj1.setDetails(1211123232141311232L,50000f,"Himanshu",8.5f);
        obj1.getDetails();
        obj1.deposit(10000);
        obj1.withdraw(2000);
        obj1.applyInterest(1.2f);
        obj1.getDetails();
    }
}