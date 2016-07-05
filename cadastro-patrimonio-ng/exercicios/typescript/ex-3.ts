class Estudante {

    nomeCompleto: string;

    constructor(public primeiroNome, public nomeMeio, public ultimoNome) {
        this.nomeCompleto = primeiroNome + ' ' + nomeMeio + ' ' + ultimoNome;
    }
}

interface Pessoa {
    primeiroNome: string;
    ultimoNome: string;
}

function saudar(pessoa: Pessoa) {
    return 'Olá, ' + pessoa.primeiroNome + ' ' + pessoa.ultimoNome;
}

var usuario = new Estudante('Arthur', 'C.', 'Clark');

console.log(saudar(usuario));
