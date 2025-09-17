class Bancaria {
    constructor (cpf, nome, saldo){
        this.cpf = cpf;
        this.nomePrimeiro = nome;
        this.saldo = saldo;
    } 

    depositar(dinheiro) {
        this.saldo += dinheiro
        console.log("Valor do Deposito: R$ ", dinheiro + ". Saldo Atual: R$", this.saldo);
    }

    sacar(dinheiro) {
        this.saldo -= dinheiro
        console.log("Valor do Saque: R$ ", dinheiro + ". Saldo Atual: R$", this.saldo);
    }


    transferencia(dinheiro, contaRecebedora){
        this.sacar(dinheiro);
        contaRecebedora.depositar(dinheiro);
        console.log("Valor da Transferencia: R$ ", dinheiro + ". Saldo Atual REMETENTE: R$", this.saldo, ". Saldo Atual Destinatario: R$", contaRecebedora.saldo);
    }


}

let juliane = new Bancaria ("999.888.777-31", "Juliane", 0)
let lucia = new Bancaria ("100.200.100-12", "Lucia", 500)

lucia.depositar(500)
lucia.sacar(900)
lucia.transferencia(50, juliane)