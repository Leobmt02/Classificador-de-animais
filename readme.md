# 👕 Classificador de Roupas

Este é um projeto simples de classificação de imagens utilizando um modelo treinado com [Teachable Machine](https://teachablemachine.withgoogle.com/) e executado com [TensorFlow.js](https://www.tensorflow.org/js).

A aplicação permite ao usuário **enviar uma imagem de uma roupa** (camisa, calça, casaco ou vestido) e o sistema classifica automaticamente o tipo da peça.

## 🧠 Modelo

O modelo foi treinado com imagens reais de roupas e exportado no formato web para uso local (arquivos `.json`, `.bin` e `.metadata.json`).

## 🛠 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (puro)
- TensorFlow.js
- Teachable Machine

## 📁 Estrutura de Pastas

```bash
classificador-roupas/

├── index.html          # Página principal da aplicação
├── style.css           # Estilos da aplicação
├── script.js           # Lógica JavaScript
├── my_model/           # Pasta contendo o modelo treinado
│   ├── model.json      # Configuração do modelo
│   ├── metadata.json   # Metadados do modelo
│   └── weights.bin     # Pesos da rede neural
```

## ▶️ Como rodar o projeto

> ⚠️ Este projeto **precisa ser executado em um servidor local via liver server**.

### ✅ Requisitos

- Navegador moderno (Chrome, Brave, Firefox...)
- Editor de código (VS Code recomendado)
- Extensão **Live Server** no VS Code

### 🧪 Passo a passo com Live Server (VS Code)

1. Clone o repositorio em sua maquina local.
2. Abra o VS Code e instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
3. Abra o repositorio pelo vscode e com liveserver ja instalado, selecione no canto inferior direito **"Go Live"**.
4. O navegador será aberto automaticamente e o sistema estará pronto para uso.
5. Envie uma imagem de roupa e clique em **"Classificar"** para ver o resultado.

### 🚫 Não funciona com duplo clique no `index.html`

Por segurança, navegadores modernos bloqueiam o acesso a arquivos locais via `file://`, impedindo que o modelo carregue corretamente.

Use sempre o Live Server para rodar o projeto localmente.