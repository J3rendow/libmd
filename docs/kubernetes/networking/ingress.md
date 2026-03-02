---
title: Ingress
---

# Ingress

`Ingress` define regras de entrada HTTP/HTTPS para serviços internos do cluster. Ele depende de um **Ingress Controller** (como NGINX Ingress Controller ou Traefik) para funcionar.

## Funcionalidades comuns

- Roteamento por host e caminho.
- Terminação TLS.
- Regras centralizadas para múltiplos serviços.

## Exemplo

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: exemplo-ingress
spec:
  tls:
    - hosts:
        - app.exemplo.com
      secretName: app-tls
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

## Complementos importantes

- Sem Ingress Controller instalado, o recurso não roteia tráfego.
- Para casos não HTTP (TCP/UDP), geralmente usa-se `Service` do tipo `LoadBalancer`.
