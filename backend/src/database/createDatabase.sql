/*Create database walletflow;

Use walletflow;

CREATE TABLE usuarios(
    id INT NOT NULL auto_increment,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    username VARCHAR(10) NOT NULL,
    senha VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)

);
CREATE TABLE categorias(
    id INT NOT NULL auto_increment,
    categoria VARCHAR(30) NOT NULL,
    tipo VARCHAR(10) NOT NULL,
    usuario int not null,
    PRIMARY KEY(id),
    constraint categoria_autor foreign key (usuario) references usuarios(id)
);

CREATE TABLE contascorrentes(
    id INT NOT NULL auto_increment,
    contacorrente VARCHAR(30) NOT NULL,
    valorInicial DECIMAL(65, 30) NOT NULL,
    dataSaldo DATETIME NOT NULL,
    saldoFinal DECIMAL(65, 30) NOT NULL,
    usuario int not null,
    PRIMARY KEY(id),
    constraint conta_autor foreign key (usuario) references usuarios(id)
);

CREATE TABLE operacao(
    id INT NOT NULL auto_increment,
    descricao VARCHAR(50) NOT NULL,
    valor DECIMAL(65,30) NOT NULL,
    parcela INT NOT NULL,
    vData DATETIME NOT NULL,
    tipo VARCHAR(15) NOT NULL,
    usuario int not null,
    categoria int not null,
    PRIMARY KEY(id),
    constraint operacaoAutor foreign key (usuario) references usuarios(id),
    constraint categoriaOperacao foreign key (categoria) references categorias(id)
);
