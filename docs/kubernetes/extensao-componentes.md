---
title: Kubernetes — Extensão e Componentes
---

# Kubernetes — Extensão e Componentes

Este guia apresenta uma visão **mais extensa** do Kubernetes, cobrindo os principais blocos da plataforma, como eles se conectam e quais responsabilidades cada componente possui.

## Visão geral dos componentes

O Kubernetes pode ser dividido em três grandes camadas:

- **Control Plane** — toma decisões e mantém o estado desejado do cluster.
- **Worker Nodes** — executam as cargas de trabalho (Pods/containers).
- **Objetos e recursos da API** — modelam as aplicações e políticas.

## Árvore ASCII do Kubernetes (legendada)

```text
Kubernetes Cluster
├── [CP] Control Plane
│   ├── kube-apiserver
│   ├── etcd
│   ├── kube-scheduler
│   ├── kube-controller-manager
│   └── cloud-controller-manager (opcional)
├── [WN] Worker Nodes (N nós)
│   ├── kubelet
│   ├── kube-proxy
│   ├── container runtime (containerd/CRI-O)
│   └── Pods
│       ├── app container(s)
│       └── sidecar/init container(s)
└── [API] Objetos da API
    ├── Workloads
    │   ├── Pod
    │   ├── Deployment
    │   ├── StatefulSet
    │   ├── DaemonSet
    │   ├── Job
    │   └── CronJob
    ├── Rede
    │   ├── Service
    │   ├── Endpoints / EndpointSlice
    │   ├── Ingress
    │   └── NetworkPolicy
    ├── Configuração e segurança
    │   ├── ConfigMap
    │   ├── Secret
    │   ├── ServiceAccount
    │   ├── Role / ClusterRole
    │   └── RoleBinding / ClusterRoleBinding
    └── Armazenamento
        ├── PersistentVolume (PV)
        ├── PersistentVolumeClaim (PVC)
        └── StorageClass
```

### Legenda da árvore

- **[CP]**: componentes centrais de controle e reconciliação do cluster.
- **[WN]**: componentes dos nós de execução das aplicações.
- **[API]**: recursos declarativos manipulados via Kubernetes API.

## Componentes do Control Plane

### kube-apiserver

É a porta de entrada do Kubernetes. Toda operação (`kubectl`, controllers e integrações) passa por ele.

### etcd

Banco chave-valor consistente que armazena o estado do cluster.

### kube-scheduler

Seleciona o melhor nó para um novo Pod com base em recursos, afinidade/anti-afinidade, taints/tolerations e políticas.

### kube-controller-manager

Executa controladores que reconciliam o estado desejado com o estado atual (por exemplo, Deployment, Node, ReplicaSet).

### cloud-controller-manager (opcional)

Integra o cluster com provedores de nuvem (load balancer, rotas, nós e volumes, dependendo do ambiente).

## Componentes dos Worker Nodes

### kubelet

Agente do nó que garante que os Pods agendados estejam rodando corretamente.

### kube-proxy

Implementa a conectividade de rede dos Services (regras de encaminhamento).

### container runtime

Responsável por executar containers (ex.: containerd, CRI-O).

### Pods

Menor unidade de execução do Kubernetes, podendo conter um ou mais containers com ciclo de vida compartilhado.

## Objetos fundamentais da API

- **Deployment**: gerencia réplicas e rollout de aplicações stateless.
- **StatefulSet**: indicado para workloads com identidade estável e estado.
- **DaemonSet**: garante um Pod por nó (ou subconjunto de nós).
- **Job/CronJob**: execução pontual ou agendada.
- **Service**: endpoint estável para acessar Pods.
- **Ingress**: entrada HTTP/HTTPS com roteamento por host/caminho.
- **ConfigMap/Secret**: configuração e dados sensíveis.
- **PV/PVC/StorageClass**: abstrações para persistência.

## Fluxo simplificado de funcionamento

1. Você aplica manifestos YAML na API.
2. O `kube-apiserver` persiste o estado no `etcd`.
3. Controllers detectam divergências e ajustam o cluster.
4. O scheduler escolhe nós para novos Pods.
5. O kubelet inicia os containers no runtime.
6. Services/Ingress expõem o acesso à aplicação.

Com isso, o Kubernetes mantém continuamente o estado desejado definido nos manifestos.
