# 🛡️ PROVA QA – Testes de API e Testes E2E

Este repositório contém os artefatos e códigos de automação desenvolvidos para a prova de QA, contemplando duas áreas principais:

* **Testes de API (Postman & Newman)**
* **Testes End-to-End (Cypress)**

---

## 1. 🌐 Testes de API (Postman & Newman)

O Exercício 1 da prova exigia o desenvolvimento de **pelo menos 5 cenários de teste**, incluindo:

* Um **caso negativo**
* Um cenário com **método diferente de GET**

### ✔️ API Utilizada

**PokeAPI** – [https://pokeapi.co/api/v2/](https://pokeapi.co/api/v2/)

### 🧰 Ferramentas

* **Postman** (criação dos testes)
* **Newman** (execução em linha de comando + relatório HTML)

---

### 📋 Cenários de Teste Desenvolvidos

| # | Cenário                    | Método  | Endpoint             | Resultado Esperado                  | Requisito      |
| - | -------------------------- | ------- | -------------------- | ----------------------------------- | -------------- |
| 1 | Listar todos os Pokémons   | GET     | `/pokemon`           | Status 200 e array de resultados    | Positivo       |
| 2 | Buscar Pokémon por nome    | GET     | `/pokemon/pikachu`   | Status 200 e nome `"pikachu"`       | Positivo       |
| 3 | Buscar Pokémon por ID      | GET     | `/pokemon/25`        | Status 200 e ID 25                  | Positivo       |
| 4 | Buscar Pokémon inexistente | GET     | `/pokemon/naoexiste` | Status 404 + mensagem `"Not Found"` | Negativo       |
| 5 | Checar métodos permitidos  | OPTIONS | `/pokemon/pikachu`   | Status 204 (API read-only)          | Método não-GET |

### 📑 Execução via Newman

A execução da coleção retornou:

* **0 falhas**
* **10 asserções válidas**

Confirmando a integridade dos testes criados.

---

## 2. 💻 Testes End-to-End (Cypress)

Os testes E2E foram criados para validar fluxos essenciais do usuário na aplicação:

🔗 **DemoBlaze** – [https://www.demoblaze.com/](https://www.demoblaze.com/)

### 🧰 Ferramenta


## ⚙️ Como Executar os Testes

### 🔧 Pré-requisitos

* Node.js + npm
* Postman
* Cypress
* Newman + Newman HTML Reporter

---

## ▶️ 1. Rodar Testes de API (Newman)

### Instalação

```bash
npm install -g newman
npm install -g newman-reporter-html
```

### Arquivos Necessários

* `Prova_QA_Colecao.json`
* `PokeAPI_Ambiente.json` (contendo `BASE_URL`)

### Execução

```bash
newman run Prova_QA_Colecao.json -e PokeAPI_Ambiente.json -r html
```

Um arquivo **newman-report.html** será gerado na pasta do projeto.

---

## ▶️ 2. Rodar Testes E2E (Cypress)

### Instalação

```bash
npm install cypress
```

### Abrir o Test Runner

```bash
npx cypress open
```

Selecione **E2E Testing**
Depois execute o arquivo:

* `ProvaQA.cy.js`

---

## 📌 Conclusão

Este projeto demonstra domínio em:

* Criação e automação de testes de API utilizando Postman + Newman
* Construção de fluxos E2E com Cypress
* Estruturação clara, modular e escalável dos testes

---
