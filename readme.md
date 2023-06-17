[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Cozinha Todo Dia - Back

API de um site de receitas

## Tecnologias

- MongoDB
- Mongoose
- NodeJS

## Projeto

Neste projeto, um usuário pode fazer cadastro no site, assim como logar, visualizar, postar, editar, e excluir receitas.

## Uso

### Receitas

Caso queira utilizar este projeto, para ter acesso ao sistema de receitas, é necessário utilizar a URL "https://cozinha-todo-dia-api.onrender.com/api/recipes".

Para puxar as receitas que já estão no banco(GET), seja puxando só uma, ou todas, basta utilizar o link providenciado acima.

Para adicionar(POST) ou alterar(PUT) uma receita, é necessário providenciar uma string de nome, método, e imagem(link da imagem), e um array de ingredientes, conforme código abaixo.

"const postData = {
name: state.name,
ingredients: state.ingredients,
method: state.method,
image: state.image,
};"

As receitas possuem um ID que vem do banco de dados, para alterar ou visualizar somente uma receita, basta utilizar este ID na URL(https://cozinha-todo-dia-api.onrender.com/api/recipes/{ID}).

### Login

Para utilizar a parte de contas, a URL é a "https://cozinha-todo-dia-api.onrender.com/auth/register".

Similar ao sistema de criação de receita, é necessário passar 4 strings ao criar uma conta(nome, email, senha, e confirmação de senha), conforme exemplo abaixo.

"const postData = {
name: state.name,
email: state.email,
password: state.password,
confirmPassword: state.confirmPassword,
};"

Para o login, somente é necessário passar o email e a senha do usuário, conforme abaixo.

"const postData = {
email: state.email,
password: state.password,
};"

Ambos os métodos(login e criação de conta) utilizam o POST.

## Melhorias

É sabido que a coleta de dados do método de preparo não é das melhores, uma vez que ele utiliza uma string, então não são consideradas quebras de linha. No futuro pretendo estudar como melhorar essa parte, e implementar uma nova solução.

## Sobre

Este projeto vem de uma série de desafios propostos por [Jean Meira](https://github.com/JCDMeira).
Você pode encontrar estes desafios [aqui](https://github.com/JCDMeira/challenge-roadmap-index)

## Licença

Feito com a licença MIT

MIT License

Copyright (c) 2023 Vitor Bulbovas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
