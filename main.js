class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor) {
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor;
        } else {
            console.log(`Adicione um valor maior do que 0.`)
        }
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();
const contaCorrente1 = new ContaCorrente();
const contaCorrente2 = new ContaCorrente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
contaCorrente1.agencia = 1001;

cliente2.nome = "Alice";
cliente2.cpf = 22222233309;
contaCorrente2.agencia = 1001;

console.log(cliente1, cliente2);
