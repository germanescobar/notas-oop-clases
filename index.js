class Person {
  // el constructor de la clase
  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(`Hola! Me llamo ${this.name}`)
  }
}

/*const pedro = new Person("Pedro Perez")
pedro.greet()

const m = new Person("Maria Gomez")
m.greet()*/

class User extends Person {
  constructor(name, email, password) {
    super(name)
    this.email = email
    this.password = password
  }

  register() {
    console.log(`Registro de ${this.name}`)
  }
}

const u1 = new User("Pablo", "pablo@example.com", "test1234")
u1.greet()
u1.register()

console.log(u1)