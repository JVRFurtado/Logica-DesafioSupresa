class centroPokemon {
    constructor(name, level, sex, vidaAtual, vidaTotal){
        this.name = name
        this.level = level
        this.sex = sex
        this.vidaAtual = vidaAtual
        this.vidaTotal = vidaTotal
    }

    descricao(){
        console.log(`O pokémon ${this.name} de level ${this.level}, do sexo ${this.sex}, está com ${this.vidaAtual} de ${this.vidaTotal} pontos vida.`)
    }

    cadastrado(){
        console.log(`${this.name} Cadastrado com sucesso.`)
    }
}

let pokemon1 = new centroPokemon("Poochyena", 2, "masculino", 13, 13)
let pokemon2 = new centroPokemon("Zigzagoon", 2, "feminino", 13, 13)
let pokemon3 = new centroPokemon("Dragonaite", 5, "masculino", 25, 25)
let pokemon4 = new centroPokemon("Dragonaite", 5, "feminino", 24, 24)
let pokemon5 = new centroPokemon("Dragonaite", 5, "feminino", 24, 24)
let pokemon6 = new centroPokemon("Zigzagoon", 3, "feminino", 15, 15)
let pokemon7 = new centroPokemon("Hurmple", 2, "masculino", 7, 14)

pokemon1.descricao()
pokemon1.cadastrado()
pokemon2.descricao()
pokemon2.cadastrado()
pokemon3.descricao()
pokemon3.cadastrado()
pokemon4.descricao()
pokemon4.cadastrado()
pokemon5.descricao()
pokemon5.cadastrado()
pokemon6.descricao()
pokemon6.cadastrado()
pokemon7.descricao()
pokemon7.cadastrado()