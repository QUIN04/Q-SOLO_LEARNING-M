void recursion() {
   recursion(); /* function calls itself */
}

int main() {
   recursion();
}
#include <stdio.h>

unsigned long long int factorial(unsigned int i) {

   if(i <= 1) {
      return 1;
   }
   return i * factorial(i - 1);
}

int  main() {
   int i = 12;
   printf("Factorial of %d is %d\n", i, factorial(i));
   return 0;
}
#include <stdio.h>

unsigned long long int factorial(unsigned int i) {

   if(i <= 1) {
      return 1;
   }
   return i * factorial(i - 1);
}

int  main() {
   int i = 12;
   printf("Factorial of %d is %d\n", i, factorial(i));
   return 0;
}
When the above code is compiled and executed, it produces the following result −

Factorial of 12 is 479001600
Fibonacci Series
The following example generates the Fibonacci series for a given number using a recursive function −

 Live Demo
#include <stdio.h>

int fibonacci(int i) {

   if(i == 0) {
      return 0;
   }
	
   if(i == 1) {
      return 1;
   }
   return fibonacci(i-1) + fibonacci(i-2);
}

int  main() {

   int i;
	
   for (i = 0; i < 10; i++) {
      printf("%d\t\n", fibonacci(i));
   }
	
   return 0;
}
