# Netflix — Tela de Login

Clone da tela de login estilo Netflix, feito com HTML, CSS e JavaScript puros (sem frameworks ou dependências externas).

## Preview

Fundo escuro com gradiente, formulário centralizado com inputs de label flutuante, botão de ação em vermelho e validação de campos em tempo real.

## Estrutura do projeto

```
netflix-login/
├── index.html   # Estrutura da página
├── style.css    # Estilos visuais e responsividade
├── script.js    # Validação, interações e simulação de login
└── README.md
```

## Como usar

Não é necessário instalar nada. Basta abrir o arquivo `index.html` diretamente no navegador.

Se preferir rodar com um servidor local (recomendado para evitar problemas de cache):

```bash
# Python
python3 -m http.server 8000

# Node (com o pacote serve instalado globalmente)
npx serve .
```

Depois acesse `http://localhost:8000`.

## Funcionalidades

- **Labels flutuantes**: o rótulo do campo sobe automaticamente quando o usuário digita ou o campo está em foco.
- **Validação de campos**: exibe mensagens de erro para email inválido ou senha muito curta (mínimo 4 caracteres), apenas depois que o campo é tocado.
- **Mostrar/ocultar senha**: botão que alterna a visibilidade do texto digitado no campo de senha.
- **Simulação de login**: ao enviar o formulário com dados válidos, o botão entra em estado de carregamento e depois exibe uma notificação (toast) de boas-vindas.
- **Responsivo**: layout adaptado para telas menores (mobile).
- **Acessibilidade básica**: foco visível nos campos, `aria-label` no botão de mostrar senha, e respeito à preferência de movimento reduzido (`prefers-reduced-motion`).

## Personalização

- **Cores**: as cores principais (vermelho, cinzas, preto) estão centralizadas como variáveis CSS no topo do `style.css`, na seção `:root`. Basta alterar os valores ali para mudar o tema.
- **Textos**: os textos da interface estão diretamente no `index.html`.
- **Regra de senha**: o tamanho mínimo da senha pode ser ajustado no atributo `minlength` do input, no `index.html`, e na mensagem correspondente no `script.js`.

## Observações

Este projeto é apenas para fins de estudo e demonstração de front-end (layout, validação de formulário e interatividade com JavaScript). Não há backend real: o "login" é simulado no navegador e nenhum dado é enviado a um servidor.
