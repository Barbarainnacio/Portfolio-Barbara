# Portfólio Profissional — Bárbara Marcella

Este projeto consiste no desenvolvimento do meu portfólio profissional, criado durante a disciplina de Laboratório de Desenvolvimento de Software do curso de Engenharia de Software da PUC Minas.

O objetivo é apresentar de forma moderna, organizada e responsiva minha trajetória acadêmica e profissional, meus projetos e formas de contato.

## 🌐 Site publicado

O portfólio está disponível em:

https://portfolio-barbara-navy.vercel.app

## 👩‍💻 Sobre o portfólio

O site possui as seguintes seções:

- **Sobre Mim:** apresentação pessoal e profissional em português e inglês;
- **Experiências:** apresentação das minhas experiências profissionais;
- **Formação:** informações sobre minha formação acadêmica;
- **Projetos:** projetos acadêmicos desenvolvidos durante a graduação;
- **Contato:** links para minhas redes profissionais e formulário para envio de mensagens.

## 🛠️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando:

- React
- TypeScript
- Vite
- HTML
- CSS
- Tailwind CSS
- Git
- GitHub
- Vercel

## 📦 Bibliotecas e dependências

Entre as principais bibliotecas e ferramentas utilizadas no projeto estão:

- **React** — construção da interface;
- **React DOM** — renderização da aplicação React;
- **Vite** — ambiente de desenvolvimento e build;
- **TypeScript** — tipagem e desenvolvimento da aplicação;
- **Radix UI** — componentes de interface acessíveis e reutilizáveis;
- **Lucide React** — ícones utilizados na interface;
- **Tailwind CSS** — estilização e construção do layout;
- **React Hook Form** — apoio no gerenciamento de formulários;
- **Motion** — animações e transições;
- **Recharts** — componentes para visualização de dados;
- **Sonner** — notificações e mensagens da interface;
- **Web3Forms** — serviço utilizado para o envio das mensagens do formulário de contato.

As demais dependências e suas versões podem ser consultadas no arquivo `package.json`.

## 📁 Estrutura de diretórios

A estrutura principal do projeto está organizada da seguinte forma:

```text
src/
├── app/
│   ├── data/
│   │   └── portfolio.ts
│   ├── features/
│   │   └── projects/
│   ├── layout/
│   ├── pages/
│   ├── shared/
│   └── App.tsx
│
├── assets/
├── styles/
└── main.tsx
```

### Principais diretórios

- `data/` — informações utilizadas nas páginas do portfólio;
- `features/` — componentes relacionados às funcionalidades específicas;
- `layout/` — componentes estruturais, como cabeçalho, rodapé e background;
- `pages/` — páginas principais do site;
- `shared/` — componentes reutilizáveis;
- `assets/` — imagens e recursos visuais;
- `styles/` — arquivos responsáveis pela estilização da aplicação.

## 🚀 Instalação e execução

Para executar o projeto localmente, é necessário possuir o **Node.js** e o **npm** instalados.

### 1. Clone o repositório

```bash
git clone https://github.com/Barbarainnacio/Portfolio-Barbara.git
```

### 2. Entre na pasta do projeto

```bash
cd Portfolio-Barbara
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure a variável de ambiente

Para que o formulário de contato funcione, crie um arquivo `.env` na raiz do projeto e adicione:

```env
VITE_WEB3FORMS_ACCESS_KEY=SUA_CHAVE_WEB3FORMS
```

> A chave real de acesso não deve ser publicada no GitHub.

### 5. Execute o projeto

```bash
npm run dev
```

Após iniciar o servidor, acesse o endereço local exibido pelo Vite, normalmente:

```text
http://localhost:5173
```

## 📦 Build de produção

Para gerar uma versão de produção:

```bash
npm run build
```

Os arquivos gerados ficarão disponíveis no diretório `dist/`.

## ☁️ Hospedagem

O projeto está hospedado na Vercel e conectado ao repositório do GitHub.

As alterações enviadas para a branch principal podem gerar automaticamente uma nova versão do site.

**Site publicado:**

https://portfolio-barbara-navy.vercel.app

## 🖼️ Wireframes

Os wireframes utilizados como referência durante o desenvolvimento estão disponíveis no diretório:

```text
docs/wireframes/
```

Eles incluem os protótipos das páginas:

- Página inicial;
- Sobre Mim;
- Experiências;
- Projetos;
- Detalhes dos projetos;
- Contato.

## 📚 Projetos apresentados

O portfólio apresenta projetos acadêmicos desenvolvidos ao longo da graduação, incluindo:

- Simulador SAP;
- Sistema de Folha de Pagamento;
- Sistema para Oficina Mecânica — Trabalho Interdisciplinar II;
- Instituto Transformar e Evoluir — Trabalho Interdisciplinar III;
- Trabalho Interdisciplinar IV — em desenvolvimento.

## 👩‍🎓 Autora

**Bárbara Marcella Inácio da Silva**

Estudante de Engenharia de Software — PUC Minas

**GitHub:**  
https://github.com/Barbarainnacio

**LinkedIn:**  
https://www.linkedin.com/in/barbara-marcella-36785520a/

## 🎯 Objetivo

Além de atender aos requisitos da disciplina, este portfólio funciona como uma apresentação profissional da minha trajetória, reunindo experiências, formação acadêmica, projetos e formas de contato em um único ambiente.