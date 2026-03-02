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
          { text: "Pods", link: "/kubernetes/pods" },
          { text: "Networking", link: "/kubernetes/networking/" },
          {
            text: "Networking (conceitos)",
            items: [
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
    ],
  },
});
