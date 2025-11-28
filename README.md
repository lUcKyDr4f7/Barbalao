# Bar Balão - Plataforma Web

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

> Plataforma web para divulgação, cardápio digital e atendimento online do Bar Balão, desenvolvida como projeto acadêmico para o curso de Análise e Desenvolvimento de Sistemas do IFSP - Câmpus Bragança Paulista.

## Sobre o Projeto

O *Bar Balão* é um empreendimento local em Águas de Lindóia que buscava modernizar seu atendimento. Este projeto visa ampliar a presença digital do bar, permitindo que clientes visualizem o cardápio e façam pedidos de forma ágil, além de oferecer aos gerentes um painel para controle de produtos.

A solução foca na *praticidade* para o cliente final (pedidos via WhatsApp) e na *autonomia* para o proprietário (CRUD de produtos, categorias e banners).

---

## Funcionalidades

### Para o Cliente
- *Cardápio Digital:* Visualização de Lanches, Pastéis e Porções com fotos e descrições.
- *Carrinho de Compras:* Adição de itens e cálculo automático do total.
- *Integração com WhatsApp:* Ao finalizar o pedido, o cliente é redirecionado para o WhatsApp do bar com a lista de itens já formatada.
- *Busca e Filtros:* Facilidade para encontrar produtos específicos.

### Para o Administrador (Gerente)
- *Login Seguro:* Acesso restrito à área administrativa.
- *Gestão de Produtos, Categorias e Banners:* Cadastro, edição e exclusão de itens do cardápio.
- *Dashboard:* Visão geral das categorias e banners do site.

---

## Tecnologias Utilizadas

O sistema foi desenvolvido utilizando a seguinte arquitetura:

* *Front-end:* ReactJS, HTML, CSS, JavaScript (Vite).
* *Back-end:* Python.
* *Banco de Dados:* postgresql.
* *Host:* Render.
* *Ferramentas:*
  - **ReactJS**: Biblioteca para construção da interface do usuário.
  - **React Router**: Gerenciamento de rotas.
  - **Axios**: Comunicação com a API.
  - **CSS Modules**: Estilização modular e reutilizável.
  - **Vite**: Ferramenta de build para desenvolvimento rápido.

---

## Screenshots

| Tela Inicial | Produtos | Sobre Nós |
|:---:|:---:|:---:|
| ![Topo do Site](./assets/Home.png) | ![Seção de Produtos](./assets/Produtos.png) |  ![Sobre Nós](./assets/Sobre.png) |

| Login | Menu Administrativo | Painel de Produtos | Painel de Categorias |
|:---:|:---:|:---:|:---:|
| ![Login](./assets/login.png) | ![Menu Admin](./assets/Menu.png) | ![Painel Produtos](./assets/ProdAdm.png) | ![Painel Categorias](./assets/CategAdm.png) | 

> Observação: As imagens ilustrativas do projeto estão salvas na pasta assets.

---

## Estrutura do Projeto

```plaintext
Barbalao/
├── public/                # Arquivos públicos (imagens, ícones, etc.)
├── src/                   # Código-fonte principal
│   ├── Components/        # Componentes reutilizáveis
│   ├── pages/             # Páginas da aplicação
│   ├── Routes/            # Configuração de rotas
│   ├── assets/            # Recursos estáticos
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Ponto de entrada
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
└── README.md              # Documentação do projeto
```

---

## Instalação e Execução

Este projeto é dividido em duas partes: Cliente (Front-end) e Servidor (Back-end/API).

### Pré-requisitos
* [Node.js](https://nodejs.org/) (v18+)
* API rodando em: [https://back-end-barbalao.onrender.com](https://back-end-barbalao.onrender.com)

## Rodando o front-End

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/barbalao.git
cd barbalao

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
