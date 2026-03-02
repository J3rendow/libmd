# Problemas comuns no Node.js

## 1) Bloqueio do event loop

Processamentos intensivos (ex.: compressão pesada, loops longos, criptografia sem offload) podem bloquear a thread principal e afetar todo o serviço.

**Mitigações:** usar filas, Worker Threads, processamento assíncrono e serviços dedicados.

## 2) Complexidade assíncrona

Apesar de `async/await` melhorar bastante, fluxos complexos com concorrência podem gerar erros sutis, vazamento de promessas e difícil rastreabilidade.

**Mitigações:** padronização de tratamento de erro, observabilidade, timeout/circuit breaker e controle de concorrência.

## 3) Dependências em excesso

Projetos Node podem acumular muitas dependências transitivas, elevando superfície de vulnerabilidades e risco de incompatibilidades.

**Mitigações:** auditoria frequente, atualização contínua, lockfile versionado e escolha criteriosa de pacotes.

## 4) Quebras entre versões/ecossistema

Mudanças de módulos CommonJS/ESM, versões de runtime e bibliotecas podem causar fricções em migrações.

**Mitigações:** estratégia de versionamento, testes automatizados e atualização incremental.

## 5) Uso inadequado para cargas CPU-bound

Node não é a melhor opção para workloads fortemente computacionais sem desenho arquitetural específico.

**Mitigações:** separar serviços CPU-bound em tecnologias mais apropriadas ou usar processamento paralelo controlado.
