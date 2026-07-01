import java.util.Arrays;
import java.util.Comparator;

public class Main {

    public static void main(String[] args) {

        Product[] products = {

                new Product(104, "Mouse", "Electronics"),
                new Product(101, "Laptop", "Electronics"),
                new Product(105, "Shoes", "Fashion"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Watch", "Accessories")

        };

        System.out.println("Linear Search");

        Product linearResult = LinearSearch.search(products, 102);

        if (linearResult != null)
            System.out.println(linearResult);
        else
            System.out.println("Product not found");

        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        System.out.println("\nBinary Search");

        Product binaryResult = BinarySearch.search(products, 102);

        if (binaryResult != null)
            System.out.println(binaryResult);
        else
            System.out.println("Product not found");

    }

}