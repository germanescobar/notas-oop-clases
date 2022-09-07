* Las variables se utilizan para almacenar información.
* Una variable puede ser de algunod los siguientes tipos: 
  * Primitivos: number, boolean, string, undefined, null
  * Objetos (objetos literales, arreglos, funciones, String, Number, Boolean)
* Los objetos pueden tener métodos.
* JavaScript es un lenguaje basado en el paradigma de POO (Programación Orientada por Objetos)
* Todos los objetos están relacionados a otro objeto (su prototipo). Esto forma una cadena prototipal donde la raiz es `Object.prototype`.
* La utilidad de los prototipos es reutilizar código.

```js
const str = new String("hola")
str.split("")

String.prototype.palindrome = function() {
  // ...
}

str.palindrome()
```

Programación Orientada a Objetos
* Protitpos (Funciones Constructoras)
* Clases

```js
function Person(name) {
  this.name = name
}
Person.prototype.saludar = function() {
  console.log(`Hola! Me llamo ${this.name}`)
}

// Person.prototype
const pedro = new Person("Pedro Perez")
pedro.saludar()
```

## Clases

Una plantilla para crear objetos. Fábrica de objetos.

Para qué se utilizan las clases:

* Hacer el código más entendible.
* Reutilizar código.

```js
class Person {
  // el constructor de la clase
  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(`Hola! Me llamo ${this.name}`)
  }
}

// instancia
const pedro = new Person("Pedro Perez")
pedro.greet()
```

Una clase tiene:
* Unas propiedades (estado)
* Un comportamiento (los métodos)

## Herencia (Inheritance)

Una clase puede extender otra clase para heredar su funcionalidad.

```js
class User extends Person {
  constructor(name, email, password) {
    super(name)
    this.email = email
    this.password = password
  }

  register() {
    console.log("Registro!")
  }
}

const u1 = new User("Pablo", "pablo@example.com", "test1234")
u1.greet()
```

En herencia decimos que una clase es una especialización de otra.