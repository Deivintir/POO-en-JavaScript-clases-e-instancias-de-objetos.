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

/**Herencia en clases JavaScript:
 * Las nuevas clases de ECMAScript2015 también incorporan otras características de la programación orientada a objetos como
 * la herencia, que permite extender las propiedades y objetos de una clase padre a una clase hijo, la palabra reservada "extends"
 * más el identificador de la clase padre; posteriormente, dentro de la clase hijo, declara la referencia a las propiedades de la
 * clase hijo con la incocación del método "super()" dentro del constructor.
 * Ejemplo: */
/**
 * class idetifadorHijo extends IdentificadorPadre{
 *  constructor(paramero1, parametro2){
 *      super(propiedadPadre1, propiedadPadre2);
 *  }
 * }
 */
/**Para comprobar la sintaxis de herencia vamos a comenzar por escribir una clase padre: */
class Trabajador{
    name;
    birthDate;

    constructor(name, birthDate){
        this.name = name;
        this.birthDate = birthDate;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getAge(){
        return Math.floor((new Date().getTime()
                                - this.birthDate.getTime())/31536000000);                                
    }
}
/**Esta clase Trabajador para instanciar objeto de datos de empleados dispone de dos propiedaes, "name" y "birthDate"
 * que son usadas en el método constructor para recibir los valores de los parámetros del constructor. También
 * se añaden tres métodos de clase, un set y get para la propiedad "nombre" y un get para devolver la edad a partir del 
 * cálculo del valor de "birthDate" que tendrá la fecha de nacimiento.
 *Esta clase como tal se podría usar para instanciar objetos, pero si necesitáramos usar sus propiedades y métodos 
 en una clase hija "Manager", podríamos implementar la característica de herencia añadiéndola de la siguiente manera: */
 class Manager extends Trabajador{
    role;

    constructor(name, birthDate, role){
        super(name, birthDate);
        this.role = role;
    }
 }
 /**Y a continuación podríamos instanciar objetos de eta clase hija "Manager" que, gracias a que ha sido extendida
  * de "Trabajador" y se han introducido las propiedades a través del método "super()" en el constructor, asignará los
  * valores de los parámetros del constructor y se podrá usar el método "getAge()". Añadimos el siguiente bloque de código: */
 let manager1 = new Manager('Juan López',new Date('1984-10-29'), 'venta');
 console.log(manager1.getName());
 console.log(manager1.getAge());
 //Si ejecutamos el programa en el navegador, podemos comprobar los valores en la consola.

 /**La herencia en JavaScript permite que la clase padre, si la convención del equipo de proyecto lo determina, pueda perfectamente
  * ser usada directamente para instanciar objetos. En el ejemplo anterior podemos comprobarlo añadiendo el siguiente código:*/
 let Trabajador1 = new Trabajador('Sara Pérez', new Date('1989-04-12'));
 console.log(Trabajador1.getAge());
 /**En la actualidad, la mayoría de los navegadores(y, por supuesto, Node.js) disponen de compatibilidad para clases y herencias debido
  * a que ambas implementaciones han sido usaddas detro de TypeScript. Sin embargo, la comunidad de JavaScript preiere emplear esta
  * sintaxis dentro de este superset de JavaScript que, además, aporta el tipado estricto de datos.
  */