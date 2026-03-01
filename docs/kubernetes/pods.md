---
title: Pods
---

# Pods

Um Pod é a menor unidade deployável no Kubernetes.

## Características

- Pode conter um ou mais containers
- Compartilham o mesmo namespace de rede
- Possuem um IP único dentro do cluster

## Exemplo de manifesto

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: meu-pod
spec:
  containers:
    - name: app
      image: nginx:latest
      ports:
        - containerPort: 80
```
