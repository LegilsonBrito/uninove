CREATE database acessos;
USE acessos;

CREATE TABLE perfil (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(20),
  descricao VARCHAR(50)
);

CREATE TABLE usuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50),
  sobrenome VARCHAR(50),
  idade INT,
  estado VARCHAR(2),
  fk_perfil INT,
  FOREIGN KEY (fk_perfil) REFERENCES perfil(id)
);

INSERT INTO perfil (id, tipo, descricao) VALUES (null, 'ADMIN', 'Usuário administrador');
INSERT INTO perfil (id, tipo, descricao) VALUES (null, 'VISITANTE', 'Usuário visitante');

INSERT INTO usuario (id, nome, sobrenome, idade, estado, fk_perfil) VALUES
(null, 'João', 'Santos', 35, 'SP', 1);

INSERT INTO usuario (id, nome, sobrenome, idade, estado, fk_perfil) VALUES
(null, 'Maria', 'Pereira', 44, 'MG', 2);

-- SELECT * FROM perfil;

-- SELECT * FROM usuario;
-- retorno da query
-- id, nome e estado...

-- SELECT id, nome, estado FROM usuario;
-- retorno da query, somente com alguns campos

-- SELECT id, nome, estado FROM usuario WHERE id = 2;
-- retorno da query, somente a linha da Maria

SELECT * FROM 
  usuario AS u
INNER JOIN
  perfil AS p
ON
  u.fk_perfil = p.id;


