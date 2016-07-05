class Pessoa {
    constructor(public primeiroNome: string, public ultimoNome: string) {
    }
}

class Estudante extends Pessoa {

    nomeCompleto: string;

    constructor(primeiroNome, public nomeMeio: string, ultimoNome) {
        super(primeiroNome, ultimoNome);
        this.nomeCompleto = this.primeiroNome + ' ' + nomeMeio + ' ' + this.ultimoNome;
    }
}

function saudar(pessoa: Pessoa): string {
    return 'Olá, ' + pessoa.primeiroNome + ' ' + pessoa.ultimoNome;
}

var usuario = new Estudante('Arthur', 'C.', 'Clark');

console.log(saudar(usuario));
