# Peculiaridades do Node.js

## 1) Event loop e I/O não bloqueante

O Node.js usa um modelo orientado a eventos com **I/O assíncrono**, permitindo lidar com muitas conexões simultâneas sem criar uma thread por requisição.

## 2) Single-thread no JavaScript

O código JavaScript da aplicação roda em uma única thread principal. Operações pesadas de CPU podem bloquear o loop de eventos, degradando a latência.

## 3) Ecossistema npm muito amplo

A produtividade costuma ser alta graças ao npm, porém a abundância de pacotes exige curadoria para segurança, manutenção e qualidade.

## 4) Mesmo idioma no front e back

Um diferencial comum é usar JavaScript/TypeScript no cliente e no servidor, simplificando compartilhamento de modelos e validações.

## 5) Forte cultura de APIs e microserviços

Node.js é muito adotado em APIs HTTP, gateways, BFFs e serviços orientados a eventos, com boa integração em arquiteturas distribuídas.
