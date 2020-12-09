#include<stdio.h>
main() {
	
	float nota;
	
	printf("Digite uma nota:");
	scanf("%f",&nota);

	while(nota>10 || nota<0) {
	printf("Nota invalida digite entre 0 e 10\n");
	printf("Digite uma nota:");
	scanf("%f",&nota);
	} 
}
