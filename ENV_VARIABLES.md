# Variáveis de Ambiente

Este arquivo documenta as variáveis de ambiente necessárias para o funcionamento completo do blog.

## Google Analytics

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Para obter seu ID do Google Analytics:

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Crie uma propriedade para seu site
3. Copie o ID que começa com "G-"

## Giscus Comments

```bash
NEXT_PUBLIC_GISCUS_REPO=your-username/your-repo
NEXT_PUBLIC_GISCUS_REPOSITORY_ID=your-repository-id
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=your-category-id
```

Para configurar o Giscus:

1. Acesse [Giscus](https://giscus.app/)
2. Configure com seu repositório GitHub
3. Copie as configurações geradas

## Newsletter (Buttondown)

```bash
BUTTONDOWN_API_KEY=your-buttondown-api-key
```

Para configurar o Buttondown:

1. Acesse [Buttondown](https://buttondown.email/)
2. Crie uma conta e obtenha sua API key

## Como usar

1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione as variáveis necessárias
3. Para produção, configure as variáveis no Vercel

## Exemplo de .env.local

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-ABC123DEF4

# Giscus Comments
NEXT_PUBLIC_GISCUS_REPO=padilhafe/fp-blog
NEXT_PUBLIC_GISCUS_REPOSITORY_ID=R_kgDOOgSPBA
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDOOgSPBM4Cve0H

# Newsletter
BUTTONDOWN_API_KEY=your-api-key-here
```
