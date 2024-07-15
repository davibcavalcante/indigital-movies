# SITE DE FILMES (REACT + VITE)

Este é um projeto pessoal que consome a API TMDB The Movies DataBase. Nele eu listo os filmes mais populares, permitindo ver os detalhes de cada um em uma rota dinâmica. Também é possível buscar filmes através do seu nome, digitando na barra de pesquisa no menu.

## COMO INICIAR O PROJETO:

* 1° Passo: Clonar este repositório: git clone https://github.com/davibcavalcante/indigital-movies.git
* 2° Passo: Ir para o diretório da raiz do projeto: cd indigital-movies
* 3° Passo: Instalar as dependências: npm install
* 4° Passo: Rodar a aplicação: npm run dev

## ROTAS CONFIGURADAS:

* Home: A home page utiliza 3 componentes (**Header**, MostPopularMovies, MoviesList)
* Movie/:id: Essa é uma rota dinâmica que carregará informações do filme do id do parâmetro (filme da home que o usuário clicar)

## TECNOLOGIAS:

* React.js
* Tailwindcss

### LIBS:

* Axios: Para consumir a API
* Lucide-React: Para ícones
* React-Router-Dom: Para criação de rotas