#include<stdio.h>
/**
* _isupper - checks for uppercase character
* @c: Variable text
* Return: Always 0.
*/
int main(){

int c;
printf("Enter letter:\n",c);
scanf("%c",&c);

if (c >= 'A' && c <= 'Z')
{
printf("1\n");
}
else
{
printf("0\n");
}
}
