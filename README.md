# Simulado de entrevista técnica
Desenvolva uma função chamada **verificaLista()** que recebe dois parâmetros:
-   O primeiro deve ser uma lista de números.
-   O segundo um número.

Sua função deve contar quantas vezes o **número passado por parâmetro** aparece dentro da **lista passada por parâmetro**. Caso a quantidade de vezes que o **número** aparece dentro da lista seja **maior ou igual a dois**, deve retornar a seguinte string:
```javascript
"Aparece duas vezes ou mais"
```
Caso não seja, deve retornar:
```javascript
"Aparece menos de duas vezes"
```

Exemplo:
```javascript
const lista = [1,2,3,4,5,6];
verificaLista(lista, 4);
// A função deve retornar: "Aparece menos de duas vezes"
// Pois o número 4 aparece, mas não se repete.
```
Similarmente,
```javascript
const lista = [1, 1, 2, 1, 1];
verificaLista(lista, 1);
// A função deve retornar: "Aparece duas vezes ou mais".
// Pois o número 1 aparece 4 vezes.
```






