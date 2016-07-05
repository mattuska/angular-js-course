var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pessoa = (function () {
    function Pessoa(primeiroNome, ultimoNome) {
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
    }
    return Pessoa;
}());
var Estudante = (function (_super) {
    __extends(Estudante, _super);
    function Estudante(primeiroNome, nomeMeio, ultimoNome) {
        _super.call(this, primeiroNome, ultimoNome);
        this.nomeMeio = nomeMeio;
        this.nomeCompleto = this.primeiroNome + ' ' + nomeMeio + ' ' + this.ultimoNome;
    }
    return Estudante;
}(Pessoa));
function saudar(pessoa) {
    return 'Olá, ' + pessoa.primeiroNome + ' ' + pessoa.ultimoNome;
}
var usuario = new Estudante('Arthur', 'C.', 'Clark');
console.log(saudar(usuario));
