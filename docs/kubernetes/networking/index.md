---
title: Networking no Kubernetes
---

# Networking no Kubernetes

O modelo de rede do Kubernetes assume:

- Cada Pod recebe um IP próprio.
- Pods conseguem se comunicar entre si (diretamente ou via CNI).
- Serviços expõem acesso estável a Pods dinâmicos.

## Componentes essenciais

- **Service** — endpoint estável para backend de Pods.
- **EndpointSlice** — mapeamento eficiente de endpoints.
- **Ingress** — entrada HTTP/HTTPS para tráfego externo.
- **NetworkPolicy** — controle de tráfego entre Pods/namespaces.

## Tipos comuns de Service

- `ClusterIP` (interno ao cluster)
- `NodePort` (porta em todos os nós)
- `LoadBalancer` (balanceador externo, quando suportado)

> Para roteamento HTTP/HTTPS, avance para [Ingress](/kubernetes/networking/ingress).
