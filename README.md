🧪 Testes Automatizados com Cypress

Este projeto foi desenvolvido com o intuito de testar as principais funcionalidades de uma página web utilizando o Cypress.

🔍 Funcionalidades testadas

Foram criados 6 testes automatizados, cobrindo os seguintes cenários:

Cadastro de usuário

Login bem-sucedido

Falha no login (credenciais incorretas)

Adição de comentário

Adição de item ao carrinho

Exclusão de conta

⚙️ Observações técnicas

Foi utilizada a função de criação de conta em todos os testes, pois o site em questão é apenas um ambiente de demonstração, sem banco de dados persistente.

Dessa forma, cada teste cria um novo usuário temporário, garantindo que os cenários possam ser executados corretamente, mesmo após múltiplas execuções.

🚀 Tecnologias utilizadas

Cypress
 — framework de testes E2E

JavaScript (ES6)

Node.js