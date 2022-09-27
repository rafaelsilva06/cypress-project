Feature: tricentisForm

  Como usuário, desejo preencher todas as abas do formulário

  Scenario: Preencher Aba Vehicle Data
    Given que eu acesso o formulario
    And   desejo preencher o formulario na Aba Vehicle Data
    When  informar os dados da Aba Vehicle Data
    And   apertar o botao next para Aba Insurant Data
    Then  devo ir para a proxima Aba Insurant Data

  Scenario: Preencher Aba Insurant Data
    Given estou na Aba Insurant Data
    When  informar os dados da Aba Insurant Data
    And   apertar o botao next para Aba Product Data
    Then  devo ir para a proxima Aba Product Data

  Scenario: Preencher Aba Product Data
    Given estou na Aba Product Data
    When  informar os dados da Aba Product Data
    And   apertar o botao next para Aba Price Option
    Then  devo ir para a proxima Aba Price Option

  Scenario: Preencher Aba Price Option
    Given estou na Aba Price Option
    When  informar os dados da Aba Price Option
    And   apertar o botao next para Aba Send Quote
    Then  devo ir para a proxima Aba Send Quote

  Scenario: Preencher Aba Send Quote
    Given estou na Aba Send Quote
    When  informar os dados da Aba Send Quote
    And   apertar o botao send para finalizar
    Then  deve aparecer uma mensagem de sucesso
    And   devo clicar em OK