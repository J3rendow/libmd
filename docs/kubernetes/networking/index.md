---
title: Networking no Kubernetes
---

# Networking no Kubernetes

O modelo de rede do Kubernetes exige que cada Pod tenha um IP único e que todos os Pods possam se comunicar entre si.

## Componentes

- **Services** — abstração para acessar Pods
- **Ingress** — roteamento HTTP/HTTPS externo
- **Network Policies** — regras de firewall entre Pods
