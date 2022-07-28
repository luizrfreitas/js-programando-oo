import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta.js"

// Para importar modulos tem que primeiro configurar o package.json
// Para isso basta ir no terminal da pasta chamar por "nmp init" definir o que pede.
// Isso cria um arquivo chamado package.json e dentro desse pacote é preciso criar a instancia '"type"="module"'
// Assim já é possível importar modulos

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
