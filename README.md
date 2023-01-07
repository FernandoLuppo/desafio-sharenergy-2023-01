<div align="center">
<h1> ⚡ Teste Sharenergy ⚡ </h1>
</div>
  
<p align="center">
  Olá!! Esse é o teste da Sharenergy, que consiste em um site com várias páginas com propósitos diferentes.
</p>
  
<p>💻 As tecnologias usadas no projeto foram:
   
<p>
<br> - TypeScript
<br> - CSS
<br> - HTML
<br> - React.js
<br> - React Router
<br> - React Icons
<br> - Node.js
<br> - Express
<br> - Axios
<br> - Cors
<br> - MongoDB
<br> - Mongoose
<br> - Bcryptjs
<br> - Ts-node-dev
</p>

<br><br>

<h3>
  Link do vídeo explicando o projeto no Youtube: https://www.youtube.com/watch?v=DgugeE-O4p4&ab_channel=fernandoluppo
</h3>

<h2>Overview</h2>
<p>
  Sobre o projeto, ele possui encriptação de senha para segurança do usuário, as rotas são bloqueadas até que o usuário faça login (apenas a página de Login e 
  Registro são liberadas), após o primeiro login as credenciais do usuário ficam salvas no localStorage dando acesso automático e toda liberdade que a memória
  do próprio fornece, as informações dos usuários são salvas com o banco de dados MongoDB, todos request são validados e seguem a Arquitetura REST.
</p>

<h2>Como usar</h2>

<p>
  Para garantir que todas as dependências estejam instaladas é preciso executar o comando npm install tanto na pasta raiz quanto na pasta "client" do react, 
  todas as dependências em sua versão tipada foram instaladas como devDependencies, após é necessário abrir 2 terminais.
</p>
<p>
  No primeiro terminal estando na raiz aplique o comando "npm run start:dev" para executar o servidor.
</p>
<p>
  No segundo terminal estando na raiz, vá a pasta "client" e aplique o comando "npm start" para executar o front do projeto.
</p>

<h2>Página de Registro e Login</h2>

<p>
  A página de Registro é onde o usuário vai se cadastrar, o sistema de cadastro é baseado pelo nome ou seja se já houver alguém utilizando o nome que o usuário está
  tentando cadastrar ele não irá dar continuidade ao processo de registro e retornará um erro, (normalmente eu faço esse processo utilizando o email como referência
  porém já que o teste não pediu nada relacionado eu não coloquei), a senha escolhida pelo usuário é criptografada e permanecerá assim salva no banco de dados, caso
  o usuário deixe de preencher algum campo ou coloque caracteres insuficientes também irá retornar um erro o avisando.
  
  A página de login segue a mesma lógica de validação da página de registro, após o usuário fazer login ele será direcionado para a página Home, caso o usuário
  decida voltar à página de login lá o botão estará diferente, dando acesso automático sem que o usuário necessite colocar novamente suas credenciais.
  
</p>
<img src=https://user-images.githubusercontent.com/95176596/211108051-5acba413-3587-4699-a4dc-0a427b77924a.png />
<img src=https://user-images.githubusercontent.com/95176596/211114311-5db63bfa-b0f1-4d29-90fc-29169d875f60.png />
<img src=https://user-images.githubusercontent.com/95176596/211114483-919bcee0-d9e4-49ff-b216-0175491ad583.png />

<h2>Home</h2>
<p>
  Na página Home há um pequeno fórum feito com a API "Random User Generator", cada usuário tem um nome completo, email, username e idade, o fórum é paginado
  tendo no total 20 usuários contendo 4 páginas com 6 usuários cada, há também um filtro onde você pode pesquisar alguém em específico usando o nome, username
  ou email dessa pessoa.
</p>

<img src=https://user-images.githubusercontent.com/95176596/211115042-dad9f10f-be23-444c-bdda-033a48f73dc6.png />

<h2>Página HTTP Cat</h2>
<p>
  Essa página possui apenas um simples input e uma breve descrição de sua função, nela o usuário pode colocar um número no input e com isso irá ser redirecionado
  para uma página onde irá mostrar uma imagem de um gato relacionado ao número que ele colocou, caso ele coloque um número que não esteja relacionado a algum
  status http será mostrado uma imagem de um gato com o status 404, o input tem uma validação onde não será ativado se estiver vazio.
</p>

<img src=https://user-images.githubusercontent.com/95176596/211115546-c79898ec-aff8-4f49-8868-a4cf4e561238.png />
<div align="center">
  <img src=https://user-images.githubusercontent.com/95176596/211115936-c6839141-ad9f-4b8d-aa14-c72d759bd41a.gif />
</div>

<h2>Página Random Dog</h2>
<p>
  A página Random Dog é similar com a página HTTP Cat, porém ao invés de ter um input tem um botão que encaminha o usuário a uma página com um gif ou imagem aleatória
  de um cachorro, a página é feita com base na API "Random Dog"
</p>

<img src=https://user-images.githubusercontent.com/95176596/211116319-38603444-485e-4023-83ae-aa2a4b57cc6b.png />
<div align="center">
  <img src=https://user-images.githubusercontent.com/95176596/211117076-5f3a43a4-d52a-4d64-8d29-41b2b8d38536.gif />
</div>

<h2>Página Lista de Clientes</h2>
<p>
  Essa é a página onde o usuário poderá cadastrar, editar e excluir um cliente, todos os inputs possuem validação e os inputs de telefone e CPF possuem máscaras,
  ao adicionar ou excluir um novo cliente ele irá automaticamente para lista sem precisar recarregar a página, ao clicar em editar ele irá abrir uma nova página
  onde será feita a edição daquele cliente.
</p>

<img src=https://user-images.githubusercontent.com/95176596/211120338-c50b0db3-f59f-444b-978f-72271c93ada6.png />

<h2>Página Lista de Clientes - Editar</h2>
<p>
  A página de edição da lista de clientes possui todas as validações da página principal, ela é criada a partir do id do cliente que o usuário quis editar, ao
  terminar a edição o usuário aparecerá automaticamente na lista de clientes.
</p>

<img src=https://user-images.githubusercontent.com/95176596/211121055-ef058552-079b-43be-befa-32796f8240e4.png />

<h2>No Mobile</h2>
<div align="center">
  <img src=https://user-images.githubusercontent.com/95176596/211121720-d402fdb1-41ef-4421-a8b3-6506236a3235.gif />
  <img src=https://user-images.githubusercontent.com/95176596/211121374-cc37bcda-4201-4add-be28-c55cc7c281ce.gif />
  <img src=https://user-images.githubusercontent.com/95176596/211121599-bdcdfe30-b2d8-45c8-b9b2-6499542c1c45.gif />
</div>


