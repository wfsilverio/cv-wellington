# 🧾 Currículo Digital – Wellington de Faria Fernandes Silvério

Este projeto é um **Currículo Digital Dinâmico**, desenvolvido em HTML, CSS, JavaScript e Bootstrap, com conteúdo carregado a partir de um **arquivo JSON externo**, permitindo edição simples, rápida e modular.

A página é totalmente responsiva, com vídeo de fundo, layout moderno e animações suaves.  
O conteúdo do currículo é carregado automaticamente via JavaScript, sem necessidade de alterar o HTML diretamente.

---

## 🚀 Demo Online

👉 **Acesse a versão publicada:**  
https://wfsilverio.github.io/cv-wellington/

---

## 📌 Como o sistema funciona

O currículo utiliza uma arquitetura simples e eficiente:

- O HTML contém apenas **estrutura vazia com IDs** para receber o conteúdo.
- O CSS, armazenado em `assets/styles.css`, estiliza todo o layout.
- O JavaScript (`assets/script.js`) faz:
  - Carregamento do arquivo JSON
  - Montagem dinâmica das seções (Sobre, Contato, Skills, Formação, Experiência, Idiomas)
  - Efeitos visuais nas skills
  - Botão de compartilhar com Web Share API
  
- O arquivo `assets/data.json` contém **todo o conteúdo do currículo**, permitindo edição rápida sem alterar HTML/JS.

Essa abordagem deixa o projeto extremamente modular e fácil de manter.

---

## 📂 Estrutura de Pastas
cv-wellington/
│
├── index.html
│
└── assets/
├── styles.css # Estilos do currículo
├── script.js # Monta o conteúdo dinamicamente
├── data.json # Todas as informações do currículo
└── video-2.mp4 # Vídeo de fundo

---

## 🛠 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **JavaScript Vanilla**
- **JSON Data Binding**
- **Web Share API** (compatível com mobile)
- **GitHub Pages** para deploy

---

## 🧩 Como editar o conteúdo

Todo o conteúdo do currículo está em: assets/data.json


Nesse arquivo você pode editar:

- Nome
- Título profissional
- Resumo
- Contatos
- Skills
- Formação
- Idiomas
- Experiência profissional (empresa, cargo, período, atividades e badges)

Exemplo de modificação rápida:

```json
{
  "sobre": {
    "nome": "Seu nome aqui",
    "titulo": "Seu cargo",
    "resumo": "Seu resumo profissional"
  }
}


