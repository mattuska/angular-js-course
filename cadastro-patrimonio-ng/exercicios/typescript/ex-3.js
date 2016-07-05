var Estudante = (function () {
    function Estudante(primeiroNome, nomeMeio, ultimoNome) {
        this.primeiroNome = primeiroNome;
        this.nomeMeio = nomeMeio;
        this.ultimoNome = ultimoNome;
        this.nomeCompleto = primeiroNome + ' ' + nomeMeio + ' ' + ultimoNome;
    }
    return Estudante;
}());
function saudar(pessoa) {
    return 'Olá, ' + pessoa.primeiroNome + ' ' + pessoa.ultimoNome;
}
var usuario = new Estudante('Arthur', 'C.', 'Clark');
console.log(saudar(usuario));
