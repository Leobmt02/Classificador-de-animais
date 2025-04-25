# Classificador de Animais 🐶🐱🦁🐬

Este projeto é um **classificador de animais** que utiliza **inteligência artificial** para identificar diferentes espécies (como cachorro, gato, leão e golfinho) a partir de imagens.  
O modelo foi treinado usando o [Teachable Machine](https://teachablemachine.withgoogle.com/) do Google e é executado **diretamente no navegador** com o auxílio da biblioteca **TensorFlow.js**.

---

## 🐶 Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript  
- TensorFlow.js  
- Teachable Machine

---

## 🐱 Estrutura do Projeto

- `index.html` → Página principal da aplicação  
- `style.css` → Estilos da interface  
- `script.js` → Lógica da aplicação e carregamento do modelo  
- `my_model/` → Pasta contendo o modelo treinado (`model.json`, `metadata.json`, arquivos `.bin`)

---

## 🦁 Como Funciona

1. O usuário abre o `index.html` no navegador.  
2. Faz upload de uma imagem de um animal.  
3. O modelo identifica a espécie com base no que aprendeu durante o treinamento.  
4. O resultado é exibido instantaneamente na tela!

---

## 🐬 Como Usar

```bash
# Clone o repositório
git clone https://github.com/Leobmt02/Classificador-de-animais.git

# Acesse a pasta
cd Classificador-de-animais

# Abra o index.html no navegador (clique duas vezes ou arraste para o navegador)
