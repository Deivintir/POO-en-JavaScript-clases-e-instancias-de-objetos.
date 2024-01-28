//POO en JavaScript, clases e instancias de objetos.
/*En esta unidad vamos a aprender cómo se implementan las clases en JavaScript.
Comenzaremos repasando las diferentes formas en las que se trabajaba con objetos
antes de ECMAScript2015 ya que muchos de los mecanismos siguen vigentes.

A continuación, aprenderemos la implementación de clases e instancias de objetos,
que ya disponen de compatibilidad para la mayoría de navegadores y entornos de ejecución JavaScript.

Para concluir, aprenderemos también cómo se puede implementar la caacterística de herencia
de la programación orientada a objetos en las clases ECMAScript2015*/

/*OBJETOS EN JavaScript ANTES DE ECMAScript2015.
Desde sus orígenes, JavaScript ha sido un lenguaje que permite implementar programación orientada a objetos;
de hecho, su principal funcionalidad inicial, la de modificar el DOM del navegador se ha realizado siempre 
a través de los diferentes métodos y propiedades de los objetos que se instancian en cada nodo de este árbol 
de renderizado de sitios y app Web.
Sin embargo, no ha sido hasta ECMAScript2015 cuando JavaScript ha comenzado a usarse de manera plena gracias 
a la implementación de clases. En todo caso, es bueno conocer cómo se gestionaban los objetos en JavasCript
antes de esta especificación, puesto que estos procedimientos se siguen utilizando.
Ejemplo:
*/

let player1 ={
    name: 'David',
    surname: 'Rodríguez',
    teams: ['Method','Liquid', 'Reforged', 'Abyss Watchers'],
    goals: 0,
    setGoals(){
        this.goals++;
    }
}
/*Esta es una de las numerosas formas que existen de declarar un objeto en JavaScript: directamente con un literal,
en el cual podemos declarar tanto sus propiedadesm como métodos que utilicen esas propiedades mediante el uso de this.
Por defecto, en javaScript las propiedades son públicas y accesibles con la notación del punto.
*/
console.log(player1.name);
player1.surname = 'Rodríguez Terrón';
console.log(player1.surname);
/**Además de esta forma literal, existe también otra que ha sido comúnmente utilizada antes de ECMAScript2015
 * mediante una función constructora, usará una instancia de ojetos con la palabra "new".
 * Ejemplo:*/
function Player(character, guild, score){
    this.character = character;
    this.guild = guild;
    this.score = score;

    this.setScore = function() {
        this.score++;
    }
}
let player2 = new Player('Devintir', 'Reforged', 1000);
console.log(player2.character);
/**Esta forma era la preferida por muchos desarrolladores, ya que la función(en este caso, denominada Player),
 * se comporta como una clase de la que posteriormente se pueden instanciar todos los objetos que se necesiten
 * invocándola con la palabra "new" y pasándole como argumentos los valores de inicialización de las propiedades
 * que tendrá el nuevo objeto. */

/**Clases ECMAScript2015:
 * Desde esta especificación podemos crear clases según el concepto de la programación orientada a objetos
 * en JavaScript, con una sintaxis que recoge la forma tradicional de uso de los objetos de este lenguaje pero
 * que incorpora una estandarización para que todos los desarrolladores usemos la misma manera de utilizar objetos.
 * 
 * La sintaxis básica es el empleo de la palabra reservada "class", seguida del identificador de la clase, el cual
 * es escrito habitualmente con la convencion "doubleCamelCase" y, entre llaves, las declaraciones de propiedades
 * y métodos de la clase. 
 * Ejemplo:*/
/**class Identificador{
    propiedad1;
    propiedad2;
    
    constructor(parametro1, parametro2){
        this.propiedad2 = parametro1;
        this.propiedad1 = parametro2;
    }
    metodo(){
        //Código con las propiedades.
    }
}
let variable = new Identificador(argumento1,argumento2);*/
/**Dentro de la clase se declaran las propiedades, un método constructor con los parámetros asignados a cada propiedad
 * mediante la referencia "this" y, de la misma forma, los métodos que se necesiten implemenar.
 * A pesar de que en el futuro está previsto implementar un mecanismo para que las propiedades sean privadas, de momento
 * estas son públicas siempre.
 * 
 * La instancia de objeto de estas nuevas clases ECMAScript2015 se llevará a cabo con la sintaxis habitual,
 * usando la palabra reservada "new" y el nombre de la clase que llamará a su método constructor al cual se le pasan los 
 * argumentos requeridos.
 * Ejemplo:*/
class Vehicle{
    brand;
    model;
    color;
    price;

    constructor(brandIn, modelIn, colorIn, priceIn){
        this.brand = brandIn;
        this.model = modelIn;
        this.color = colorIn;
        this.price = priceIn;
    }

    getColor(){
        return this.color;
    }
    setColor(){
        this.color = color;
    }
    getpriceWithTax(tax){
        return this.price + this.price*tax;
    }
}
let vehicle1 = new Vehicle('Renault', 'Megane', 'Gris', 12000);
console.log(vehicle1);
console.log(vehicle1.getpriceWithTax(.21));
/**La manera de instanciar los objetos será similar a las funciones contrucoras que vimos en el apartado anterior; se usa
 * la palabra reservada "new", el nombre de la clase para invocar el método constructor de la misma y los valores que recibirán
 * las propiedades. */
