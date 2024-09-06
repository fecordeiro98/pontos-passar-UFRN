# pontos-passar-UFRN
Calculadora de quantos pontos precisa para passar por média

# Descrição do Código HTML para Calculadora de Notas

Este código HTML define uma página web para uma ferramenta chamada "Quanto eu preciso para passar?", que ajuda o usuário a calcular a nota necessária para alcançar uma média mínima. A página inclui elementos HTML básicos e interage com um arquivo de JavaScript para realizar o cálculo necessário.

## Estrutura do Código

### Cabeçalho (`<head>`)

- **Meta Tags**:
  - `charset="UTF-8"`: Define a codificação de caracteres para UTF-8.
  - `name="viewport"`: Configura a viewport para dispositivos móveis, garantindo que a página se ajuste corretamente em diferentes tamanhos de tela.

- **Título**:
  - Define o título da página como "Quanto eu preciso para passar?".

- **Folha de Estilo**:
  - Inclui um arquivo CSS externo (`style.css`) para estilizar a página.

### Corpo (`<body>`)

- **Conteúdo Principal (`<main>`)**:
  - **Tabela de Cálculo**:
    - **Nota 1** e **Nota 2**: Campos de entrada numérica para o usuário inserir suas duas notas. Estes campos possuem limites (`min`, `max`, `step`) para restringir os valores inseridos.
    - **Botão Calcular**: Um botão que aciona a função `calcular()` definida no arquivo JavaScript `script.js`. O botão está centralizado usando a classe CSS `central`.
    - **Precisa de**: Campo de saída que mostra a nota necessária para alcançar a média mínima. Este campo é somente leitura e é preenchido após o cálculo.

  - **Informações Adicionais**:
    - Um parágrafo com uma referência ao Artigo 114, que define a média mínima necessária para a aprovação e o rendimento acadêmico. O texto está em negrito para destacar a informação legal.

### Rodapé (`<footer>`)

- **Informações de Copyright**:
  - Inclui o nome do autor (Felipe Cordeiro), a data (Agosto de 2024) e a versão do código (v 1.0).

### Scripts

- **JavaScript**:
  - O arquivo `script.js` é incluído ao final da página e é responsável por realizar o cálculo da nota necessária quando o botão "Calcular" é pressionado.

## Observações

- O campo de entrada para as notas (`input type="number"`) é restrito a valores entre 0 e 10, com um incremento de 0.1.
- O campo "Precisa de" é desativado (`disabled`), evitando que o usuário o edite diretamente.
- O conteúdo adicional fornece contexto legal sobre a média e rendimento acadêmico necessário para aprovação.

Este código fornece uma funcionalidade básica para calcular a nota necessária com base em entradas fornecidas e pode ser melhorado com validações adicionais e feedback ao usuário.
