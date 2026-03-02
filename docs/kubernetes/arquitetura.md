---
title: Arquitetura do Kubernetes
---

# Arquitetura do Kubernetes

A arquitetura do Kubernetes segue o modelo **control plane + worker nodes**. O plano de controle decide *o que* deve acontecer; os nós executam *como* isso acontece.

## Control Plane

- **kube-apiserver** — porta de entrada da API e validação de manifestos.
- **etcd** — banco chave-valor consistente com o estado do cluster.
- **kube-scheduler** — seleciona o nó ideal para novos Pods.
- **kube-controller-manager** — reconcilia estado desejado e estado atual.
- **cloud-controller-manager (opcional)** — integra recursos de nuvem.

## Worker Nodes

- **kubelet** — agente local do nó que garante execução dos Pods.
- **kube-proxy** — regras de rede para Services.
- **container runtime** — execução dos containers (containerd/CRI-O).

## Fluxo resumido de funcionamento

1. O manifesto é enviado ao `kube-apiserver`.
2. O estado é persistido no `etcd`.
3. Controllers detectam divergências e criam/ajustam recursos.
4. O scheduler define o nó de execução.
5. O kubelet cria os containers via runtime.

> Para detalhes de execução de workloads, continue em [Pods](/kubernetes/pods).
