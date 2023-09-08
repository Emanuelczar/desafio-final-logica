let armas = {"guerreiro": "espada", "mago": "magia", "monge": "artes marciais", "ninja": "shuriken"};

class Hero{
  constructor(name, age, type){
  	this.name = name
  	this.age = age
  	this.type = type
}

  escrever(){
    console.log(`O ${this.type} atacou usando ${armas[this.type]}`)

  }

}

let magoTasca = new Hero("Tascareca", "34", "mago")

magoTasca.escrever()