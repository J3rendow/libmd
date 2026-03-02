---
title: Pods
---

# Pods

O **Pod** é a menor unidade deployável no Kubernetes. Ele encapsula um ou mais containers que compartilham rede e armazenamento local.

## Características principais

- Um único endereço IP por Pod.
- Containers no mesmo Pod compartilham `localhost`.
- Ciclo de vida compartilhado entre containers.
- Suporte a containers de inicialização (*init containers*).

## Quando usar 1 ou mais containers no mesmo Pod

- **1 container**: caso mais comum (aplicação única).
- **Múltiplos containers**: padrão sidecar (ex.: logging/proxy).

## Exemplo de manifesto

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: meu-pod
  labels:
    app: exemplo
spec:
  containers:
    - name: app
      image: nginx:latest
      ports:
        - containerPort: 80
```

## Boas práticas rápidas

- Prefira `Deployment` ao invés de Pod avulso em produção.
- Defina `resources.requests` e `resources.limits`.
- Configure `readinessProbe` e `livenessProbe`.

> Para conectividade e exposição de Pods, veja [Networking](/kubernetes/networking/).
