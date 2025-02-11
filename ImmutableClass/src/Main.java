final class Immutable{
    public final int x;
    public final int y;
    Immutable(int a,int b)
    {
        this.x=a;
        this.y=b;
    }

}


public class Main {
    public static void main(String[] args) {
        Immutable obj1 = new Immutable(4,5);
        System.out.println(obj1.x+ " " +  obj1.y );
//        obj1.x = 10;
    }
}