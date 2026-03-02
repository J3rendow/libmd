---
title: Kubernetes — Guia de Conceitos
---

# Kubernetes

Esta seção foi reorganizada como uma **pasta de conceitos**, com cada tema em uma página específica para evitar conteúdo duplicado e facilitar a navegação.

## Mapa de conceitos

- [Arquitetura](/kubernetes/arquitetura)
- [Pods](/kubernetes/pods)
- [Networking](/kubernetes/networking/)
  - [Ingress](/kubernetes/networking/ingress)

## Árvore ASCII legendada do cluster

```text
Kubernetes Cluster
├── [CP] Control Plane
│   ├── kube-apiserver
│   ├── etcd
│   ├── kube-scheduler
│   ├── kube-controller-manager
│   └── cloud-controller-manager (opcional)
├── [WN] Worker Nodes
│   ├── kubelet
│   ├── kube-proxy
│   ├── container runtime
│   └── Pods
└── [API] Objetos da API
    ├── Workloads (Pod, Deployment, StatefulSet, DaemonSet, Job, CronJob)
    ├── Rede (Service, Ingress, EndpointSlice, NetworkPolicy)
    ├── Configuração e segurança (ConfigMap, Secret, RBAC)
    └── Armazenamento (PV, PVC, StorageClass)
```

### Legenda

- **[CP]**: camada de controle e reconciliação do estado desejado.
- **[WN]**: nós que executam workloads.
- **[API]**: objetos declarativos enviados ao Kubernetes API Server.

## Como estudar esta pasta

1. Comece por **Arquitetura** para entender a base do cluster.
2. Vá para **Pods** para dominar a menor unidade de execução.
3. Finalize em **Networking** e **Ingress** para exposição e roteamento de tráfego.
