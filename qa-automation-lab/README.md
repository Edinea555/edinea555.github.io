# QA Automation Lab | Edinea Conceição

Quatro exemplos de testes de API com **Cypress**, **Robot Framework**, **REST Assured** e **Playwright**, utilizando a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Cenários

| Framework | Cenários demonstrados |
|---|---|
| Cypress | GET válido (200), contrato básico, GET inexistente (404) |
| Robot Framework | GET válido (200), chave obrigatória, GET inexistente (404) |
| REST Assured + JUnit 5 | GET válido (200), validação de campos, GET inexistente (404) |
| Playwright | Filtro por usuário (200), criação simulada (201) |

> **Nota:** JSONPlaceholder simula operações de escrita; POST, PUT, PATCH e DELETE não persistem alterações. Estes exemplos são demonstrativos e não representam sistemas de clientes. Execução e resultados não foram certificados neste repositório.

## Executar

**Requisitos:** Node.js e npm; Python 3; Java 17 e Maven (para o módulo Java).

```bash
npm install
npm run test:cypress
npm run test:playwright
```

```bash
python -m pip install robotframework robotframework-requests
robot robot/posts.robot
```

```bash
cd rest-assured
mvn test
```

Os testes precisam de conexão com a internet. Serviços públicos podem ficar indisponíveis ou mudar de comportamento.

## Adicionar ao portfólio

Publique esta pasta como repositório separado `qa-automation-lab` no GitHub e crie links na seção Projetos do seu site. Evite afirmar que os testes passaram antes de executá-los e registrar evidências.
