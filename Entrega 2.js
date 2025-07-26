class reserva {
    constructor(id_unico, id_cliente, status_, data_entrega, data_saida){
        this.id = id_unico;
        this.id_cliente = id_cliente;
        this.status = status_;
        this.data_entrega = data_entrega;
        this.data_saida = data_saida; //fazer limicatoes aqui dentro
    }
}

class funcionario {
    constructor(id_unico, nome, cpf, email, senha){
        this.id = id_unico;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha; //fazer limicatoes aqui dentro
    }
}

class cliente {
    constructor(id_, nome, data_de_nascimento, cpf, email, senha){
        this.id = id_;
        this.nome = nome;
        this.data_de_nascimento = data_de_nascimento;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha; //fazer limicacoes aqui dentro
    }
}

class quarto {
    constructor(nome_do_quarto, qtd_de_camas, qtd_disponivel, preco_noite, descricao)
    {
        this.nome_do_quarto = nome_do_quarto;
        this.qtd_de_camas = qtd_de_camas;
        this.qtd_disponivel = qtd_disponivel;
        this.preco_noite = preco_noite;
        this.descricao = descricao; // essa classe sera instanciada a partir das caracteristicas do hotel
    }

}

class sistema {
    constructor(){ //trata dos estados da aplicacao: login, cadastro, reserva, manutencao... etc
    }
}

//base de dados
funcionario1 = new funcionario(1, João, "123456789-00", "joao@gmail.com", "thor")
let base = [funcionario1]; //armazena os usuarios do sistema, tanto clientes quanto funcionarios