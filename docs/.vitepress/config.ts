import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Minha Base de Conhecimento",
  description: "Docs estáticos gerados de Markdown",
  base: "/libmd/",
  themeConfig: {
    sidebar: [
      {
        text: "Introdução",
        link: "/",
      },
      {
        text: "Kubernetes",
        items: [
          { text: "Arquitetura", link: "/kubernetes/arquitetura" },
          { text: "Extensão e Componentes", link: "/kubernetes/extensao-componentes" },
          { text: "Pods", link: "/kubernetes/pods" },
          {
            text: "Networking",
            items: [
              { text: "Visão Geral", link: "/kubernetes/networking/" },
              { text: "Ingress", link: "/kubernetes/networking/ingress" },
            ],
          },
        ],
      },
      {
        text: "Git",
        items: [{ text: "Branch Model", link: "/git/branch-model" }],
      },
      {
        text: "Java",
        items: [{ text: "JVM", link: "/java/jvm" }],
      },
      {
        text: "Node.js",
        items: [
          { text: "Visão Geral", link: "/nodejs/" },
          { text: "Peculiaridades", link: "/nodejs/peculiaridades" },
          { text: "Problemas Comuns", link: "/nodejs/problemas" },
          { text: "Frameworks Modernos", link: "/nodejs/frameworks-modernos" },
          { text: "Vantagens e Desvantagens", link: "/nodejs/vantagens-desvantagens" },
          { text: "Casos de Uso", link: "/nodejs/casos-de-uso" },
        ],
      },
    ],
  },
});
