CREATE TABLE labenusystem_turma(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255) UNIQUE NOT NULL,
	docentes LONGTEXT,
    estudantes LONGTEXT,
	modulo INT DEFAULT 0
);

CREATE TABLE labenusystem_estudante(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
    data_nasc DATE,
	turma_id INT NOT NULL,
    hobbies TEXT,
	FOREIGN KEY (turma_id) REFERENCES labenusystem_turma(id)
);

CREATE TABLE labenusystem_docente(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255) UNIQUE NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
    data_nasc DATE,
	turma_id INT NOT NULL,
    especialidades ENUM("JS","CSS", "React","Typescript", "POO (Programação Orientada a Objetos)") NOT NULL,
	FOREIGN KEY (turma_id) REFERENCES labenusystem_turma(id)
);

CREATE TABLE labenusystem_hobbies(
	id INT PRIMARY KEY AUTO_INCREMENT,
	hobbies VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE labenusystem_especialidades(
	id INT PRIMARY KEY AUTO_INCREMENT,
	especialidades VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE estudantes_hobbie(
	id INT PRIMARY KEY AUTO_INCREMENT,
    estudante_id INT NOT NULL,
	hobbie_id INT NOT NULL,
    FOREIGN KEY (estudante_id) REFERENCES labenusystem_estudante(id),
    FOREIGN KEY (hobbie_id) REFERENCES labenusystem_hobbies(id)
);

CREATE TABLE docentes_especialidade(
	id INT PRIMARY KEY AUTO_INCREMENT,
    docente_id INT NOT NULL,
	especialidades_id INT NOT NULL,
    FOREIGN KEY (docente_id) REFERENCES labenusystem_docente(id),
    FOREIGN KEY (especialidades_id) REFERENCES labenusystem_especialidades(id)
);