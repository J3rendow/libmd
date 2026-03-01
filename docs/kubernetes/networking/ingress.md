---
title: Ingress
---

# Ingress

Ingress é um recurso do Kubernetes que gerencia o acesso externo aos serviços do cluster, tipicamente HTTP/HTTPS.

## Funcionalidades

- Roteamento baseado em host e path
- Terminação TLS
- Balanceamento de carga

## Exemplo

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: exemplo-ingress
spec:
  rules:
    - host: app.exemplo.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: meu-servico
                port:
                  number: 80
```
