Catálogo Mobile

Aplicativo mobile de catálogo interativo desenvolvido como parte do estudo de caso da disciplina de Desenvolvimento Mobile.

O aplicativo permite que o usuário realize um login, navegue por produtos das categorias Masculino e Feminino e visualize informações detalhadas sobre cada produto.

Funcionalidades
Login com validação de e-mail e senha
Gerenciamento de autenticação com Redux Toolkit
Logout do usuário
Navegação entre telas
Abas para produtos Masculinos e Femininos
Listagem de produtos em formato de grade
Visualização de imagem, nome, preço e desconto
Tela de detalhes do produto
Consumo de produtos através de API externa
Tecnologias utilizadas
React Native
Expo
JavaScript
Redux Toolkit
Axios
React Navigation
DummyJSON API
API

O projeto utiliza a API DummyJSON para obter os dados dos produtos.

API utilizada:

https://dummyjson.com/

Categorias utilizadas:

Masculino
mens-shirts
mens-shoes
mens-watches
Feminino
womens-bags
womens-dresses
womens-jewellery
womens-shoes
womens-watches
Estrutura do projeto

O projeto está organizado da seguinte forma:

src/navigation — arquivos responsáveis pela navegação entre as telas
src/screens — telas do aplicativo
src/services — configuração e comunicação com a API
src/store — gerenciamento do estado global com Redux Toolkit
App.js — arquivo principal da aplicação
package.json — dependências e configurações do projeto

Como executar
Clone o repositório:

git clone https://github.com/arilson-hue/estudo_de_caso_mobile.git

Entre na pasta do projeto:

cd estudo_de_caso_mobile/catalogo-mobile

Instale as dependências:

npm install

Inicie o Expo:

npx expo start

Abra o aplicativo utilizando o Expo Go em um dispositivo compatível.
Autenticação

O login é realizado através de uma validação local dos campos de e-mail e senha. O estado de autenticação é gerenciado utilizando Redux Toolkit.

Navegação

O aplicativo possui as seguintes telas principais:

Login
Catálogo de Produtos
Detalhes do Produto

A tela de catálogo possui abas para separar os produtos Masculinos e Femininos.


Autor

Arilson Lira