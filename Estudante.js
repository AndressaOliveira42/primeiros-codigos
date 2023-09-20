class Estudante{
    constructor(nome,natricula){
        this.nome;
        this.matricula;
    }
}
let nome = prompt("nome");
let matricula =parseInt(prompt("matricula"));
const Estudante1 = new Estudante(nome,matricula);
alert(Estudante1.nome + "\n" + Estudante1.matricula);