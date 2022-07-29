/*
Crear el array de objetos "Pizzas".
Debemos crear 6 objetos como mínimo.
Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”.
*/




const pizzas = [
    {
      id: 1,
      nombre: 'Muzzarella',
      precio: 900,
      ingredientes: ['Salsa de tomate', 'Muzzarella', 'Aceitunas'],
    },
    {
      id: 2,
      nombre: 'Napolitana',
      precio: 1200,
      ingredientes: ['Salsa de tomate', 'Muzzarella', 'Aceitunas', 'Tomate', 'Albahaca'],
    },
    {
      id: 3,
      nombre: 'Palmitos',
      precio: 1400,
      ingredientes: ['Salsa de tomate', 'Muzzarella', 'Aceituna' , 'Jamon', 'Palmitos','Salsa Golf'],
    },
    {
      id: 4,
      nombre: '4 Quesos',
      precio: 1550,
      ingredientes: ['Salsa de tomate', 'Muzzarella', 'Parmigiano', 'Gorgonzola', 'Fontina','Nueces'],
    },
    {
      id: 5,
      nombre: 'Hongos',
      precio: 1300,
      ingredientes: ['Salsa de tomate', 'Muzzarella', 'Cebolla', 'Champiñones', 'Aceitunas','Queso parmesano', 'Aceite de oliva',],
    },
    {
      id: 6,
      nombre: 'Rucula',
      precio: 1250,
      ingredientes: ['Salsa de tomate', 'Muzzarella', 'Rucula', 'Aceitunas', 'Rucula'],
    },
  ];





  

/* EJERCICIO B*/

const pizzaBarata = pizzas.map((pizzas) => {
  if (pizzas.precio < 600) {
      return pizzas;
  }
});
console.log(`Esta pizza es barata ${pizzaBarata}`);





/* EJERCICIO C*/

const nombre = () => pizzas.forEach((pizzas) =>
    console.log(`${pizzas.nombre}`)
  );

nombre();








/* EJERCICIO D*/

const precio = () =>
  pizzas.forEach((pizzas) =>
    console.log(`${pizzas.precio}`)
  );

precio();








/* EJERCICIO E*/
const infoPizza = () =>
  pizzas.forEach((pizzas) =>
    console.log(`La Pizza ${pizzas.nombre} sale $${pizzas.precio} `)
  );

infoPizza();

