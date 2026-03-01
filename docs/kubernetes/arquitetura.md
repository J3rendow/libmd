---
title: Arquitetura do Kubernetes
---

# Arquitetura do Kubernetes

A arquitetura do Kubernetes é baseada em um modelo master-worker.

## Control Plane

- **kube-apiserver** — ponto de entrada da API
- **etcd** — armazenamento de estado
- **kube-scheduler** — agendamento de pods
- **kube-controller-manager** — controladores de reconciliação

## Worker Nodes

- **kubelet** — agente que roda em cada nó
- **kube-proxy** — regras de rede
- **container runtime** — execução dos containers
