# libmd

Base de conhecimento estática gerada com [VitePress](https://vitepress.dev/) a partir de arquivos Markdown, com deploy automático no GitHub Pages.

## Estrutura

```
docs/
├── .vitepress/config.ts   # configuração do VitePress e sidebar
├── index.md               # página principal
├── kubernetes/            # seção Kubernetes
├── git/                   # seção Git
└── java/                  # seção Java
```

## Desenvolvimento local

```bash
npm install
npm run docs:dev
```

## Build

```bash
npm run docs:build
npm run docs:preview
```

## Deploy

O deploy para GitHub Pages é feito automaticamente via GitHub Actions ao fazer push na branch `main`.

> **Nota:** O `base` em `docs/.vitepress/config.ts` está configurado como `/libmd/` para corresponder ao nome do repositório. Se o repositório for renomeado ou se um domínio customizado for utilizado, atualize o valor de `base` conforme necessário.