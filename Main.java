// JVM (Java Virtual Machine) : takes the bytecode in .class file and translate it into native code for the OS (windows, mac, etc.)

// To compile code: javac java.java 

// FUNCTIONS : a block of code that performs a task
// CLASS : a container for related functions

// void : a return type. not going to return a value 
// public : accessible from other parts of this program 

// -------------------------------------------------------------------------------------
// primitive : store simple values 
//   => byte, short, int, long, float, double, char, boolean
//   => long viewCounts = 3_123_456_789L
//   => float price = 10.99F or 10.99f

// -------------------------------------------------------------------------------------
// reference : store complex objects
//  => import java.util.Date; 
//     Date now = new Date();
//     now.getTime() 

// CONSTANTS : final float pi = 3.14F

// -------------------------------------------------------------------------------------
// Arrays
// -------------------------------------------------------------------------------------
// import java.util.Arrays;
// int[] numbers = new int[5];
// numbers[0] = 1;
// numbers[1] = 2;
// System.out.println(Arrays.toString(numbers)) // Output: [1,2,0,0,0]

// int[] numbers = {2,3,5,1,4};
// System.out.println(numbers.length) // Output: 5 

// Arrays.sort(numbers)

// -------------------------------------------------------------------------------------
// CREATE 2D ARRAY
// -------------------------------------------------------------------------------------
// int[][] numbers = new int[2][3] // 2 rows, 3 columns
// numbers[0][0] = 1;

// use this to print multi-dimensional array : Arrays.deepToString()
// System.out.println(Arrays.deepToString(numbers)) // Output: [[1,0,0], [0,0,0]]

// 2nd method
// int[][] numbers = {{1,2,3}, {4,5,6}}
// System.out.println(Arrays.deepToString(numbers)) // Output: [1,2,3], [4,5,6]

// READ USER INPUT 
// Scanner


// -------------------------------------------------------------------------------------
// ARRAYLIST
// -------------------------------------------------------------------------------------
// import java.util.ArrayList;
// ArrayList fruitList = new ArrayList();
// fruitList.add("Mango");
// fruitList.add("Apple");
// fruitList.remove("Apple");
// fruitList.clear(); // clear all elements inside the array list 
// fruitList.contains("Raspberry"); // Output: false
// System.out.println(fruitList);        

// ---------------------------- ---------------------------------------------------------
// compulsory function in java as it is entry point to our programs 
// import java.util.Scanner;
// import java.text.NumberFormat;

public class Main {
    // RECURSION
    // public static void countBackwards(int n) {
    //     if (n == 0) {
    //         System.out.println("Done!");
    //     } else {
    //         System.out.println(n + "*");
    //         n--;
    //         countBackwards(n);
    //     }
    // }

    public static void main(String[] arg) {
        // System.out.print("Name: ");
        // String name = scanner.nextLine();
        // System.out.print("You are " + name);
        // System.out.println("Hello world!");
        
        // final byte MONTHS = 12;
        // final byte PERCENT = 100;
        
        // Scanner scanner = new Scanner(System.in);

        // System.out.print("Principal: ");
        // int principal = scanner.nextInt();

        // System.out.print("Annual Interest Rate: ");
        // double annualInterest = scanner.nextDouble();
        // double monthlyInterest = annualInterest / PERCENT / MONTHS;

        // System.out.print("Period (Years): ");
        // int period = scanner.nextInt();
        // int numberOfPayments = period * MONTHS;

        // double mortgage = principal * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) / (Math.pow(1 + monthlyInterest, numberOfPayments)-1);
        // String mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage);
        // System.out.println("Mortgage: " + mortgageFormatted);

        // countBackwards(5); // RECURSION

        int[] array = {1,2,3,4,5};
        int sum = 0;

        for(int i = 0; i < array.length + 1; i++) {
            sum += i;
        }

        System.out.println("sum " + sum);
    }
}

