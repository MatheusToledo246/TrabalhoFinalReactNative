# 🗺️ MT Viagens

**Seu gerador de roteiros de viagens personalizados**

MT Viagens é um aplicativo móvel desenvolvido em React Native que utiliza inteligência artificial para gerar roteiros de viagem personalizados. O usuário simplesmente descreve seu destino ou tipo de viagem desejada e recebe um roteiro completo e detalhado.

## ✨ Funcionalidades

- 🤖 **IA Integrada**: Utiliza Google Gemini AI para gerar roteiros inteligentes
- 🎯 **Roteiros Personalizados**: Cada roteiro é único baseado na descrição do usuário
- 📱 **Interface Intuitiva**: Design clean e fácil de usar
- 📜 **Visualização Completa**: ScrollView para roteiros longos
- 🎨 **Animações Suaves**: Transições fluidas com Moti
- 🌐 **Multiplataforma**: Funciona em Android, iOS e Web

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework principal
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **Google Gemini AI** - Inteligência artificial
- **Moti** - Animações
- **Expo Router** - Navegação file-based

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Expo CLI
- Chave da API do Google Gemini

## 🛠️ Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/MatheusToledo246/TrabalhoFinalReactNative.git
   cd TrabalhoFinalReactNative
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure a API Key**
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione sua chave da API do Google Gemini:
   ```env
   EXPO_PUBLIC_GEMINI_API_KEY=sua_chave_aqui
   ```

4. **Inicie o projeto**
   ```bash
   npx expo start
   ```

## 📱 Como Usar

1. **Abra o aplicativo**
2. **Descreva sua viagem** no campo de texto (ex: "Viagem para Paris", "Turismo rural no interior")
3. **Toque em "Gerar roteiro personalizado!"**
4. **Aguarde a IA processar** sua solicitação
5. **Visualize seu roteiro** completo no card que aparece
6. **Role para ver todo o conteúdo** se o roteiro for longo

## 🎯 Exemplos de Uso

- "Viagem romântica para Paris de 5 dias"
- "Turismo de aventura na Chapada Diamantina"
- "Roteiro gastronômico em São Paulo"
- "Viagem em família para Disney"
- "Mochilão pela Europa com orçamento baixo"

## 📂 Estrutura do Projeto

```
📁 MT-Viagens/
├── 📁 app/
│   ├── index.tsx          # Tela principal
│   └── _layout.tsx        # Layout e navegação
├── 📁 services/ia/
│   └── generator.ts       # Serviço de IA
├── 📁 styles/
│   └── index.ts          # Estilos globais
├── 📁 assets/            # Imagens e recursos
├── package.json          # Dependências
└── app.json             # Configurações do Expo
```

## 🎨 Design System

### Paleta de Cores
- **Primary**: `#4600ebff` (Roxo principal)
- **Secondary**: `#ee6c02ff` (Laranja de fundo)
- **Text Light**: `#e2ddddff` (Texto claro)
- **White**: `#ffffff` (Branco)
- **Gray**: `#333333` (Cinza escuro)

## 🧪 Como Testar

### No Navegador
```bash
npx expo start
# Pressione 'w' para abrir no navegador
```

### No Celular
1. Instale o **Expo Go** na App Store ou Google Play
2. Escaneie o QR code que aparece no terminal
3. O app será carregado automaticamente

### No Emulador Android
```bash
npx expo start
# Pressione 'a' para abrir no emulador Android
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Matheus Toledo**
- GitHub: [@MatheusToledo246](https://github.com/MatheusToledo246)
- Projeto: [TrabalhoFinalReactNative](https://github.com/MatheusToledo246/TrabalhoFinalReactNative)

## 📞 Suporte

Se você encontrar algum problema ou tiver sugestões, por favor:
1. Abra uma [issue](https://github.com/MatheusToledo246/TrabalhoFinalReactNative/issues)
2. Descreva o problema detalhadamente
3. Inclua screenshots se necessário

---

**MT Viagens** - Transformando ideias em roteiros incríveis! 🚀✈️
