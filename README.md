# Desafio API Scrapbook :rocket:


## :pencil: A API deve conter:

- Método para listar recados;

- Método para criar recados;

- Método para editar recados;

- Método para deletar recados;

- Filtro de recados por título


## :desktop_computer: Como executar a API

**Preparar o ambiente**

- Clonar repositório `git clone https://github.com/jbelagamba/simple-scrapbook-api.git`

- Abrir repositório no `Vs Code` (ou editor de sua preferência)

- No terminal > rodar o comando `yarn install`

- No terminal > rodar o comando `yarn dev`


**Configurar rotas no insommnia**

- Criar rota `GET` com `base_url` + `/scraps`

- Criar rota `POST` com `base_url` + `/scraps`

- Criar rota `PUT` com `base_url` + `/scraps/`

- Criar rota `DEL` com `base_url` + `/scraps/`


## :biohazard: Como testar rotas

**:purple_circle: GET | Método para listar scraps**

- Na rota`GET` deve ser presionado o botão **SEND**

- Após pressionar o botão **SEND** na tela de saída será exibido um json com todos os scraps (se houverem cadastros)

- Para filtrar um scrap por título basta informar o name `title` como value desejado no menu **query**


**:green_circle: POST | Método para criar scraps**

- Na rota `POST` deve ser selecionado o formato de entrada `JSON` e informados os valores de `title` e `message` desejados | Ex:

```
{
 "title": "Título scrap",
 "message": "Mensagem scrap"
}
```

- Após pressionar o botão **SEND** na tela de saída será exibido um json com *id único* + *titulo informado* + *mensagem informada* do scrap criado.


**:orange_circle: PUT | Método para editar scraps**

- Na rota `PUT` devem ser informados os itens abaixo:

 - No final da url `base_url` + `/scraps` deve ser iformado o `id` do scrap a ser editado
 
 - Deve ser selecionado o formato de entrada `JSON` e informados os novos valores de `title` e `message` desejados | Ex:

```
{
 "title": "Novo título scrap",
 "message": "Nova mensagem scrap"
}
```

- Após pressionar o botão **SEND** na tela de saída será exibido um json com *id único* + *novo titulo informado* + *novo mensagem informada* do scrap alterado.


**:red_circle: DEL | Método para deletar scraps**

- Na rota `DEL` devem ser informado no final da url `base_url` + `/scraps` o `id` do scrap a ser editado

- Após pressionar o botão **SEND** o scrap com o id iformado terá sido excluido. Para conferir basta executar o método GET.
