# Podcast Manager

## Descrição

Podcast Manager é um aplicativo no estilo Netflix, onde você pode centralizar diferentes episódios de podcasts, organizados por categorias.

### Features

- Listar os episódios de podcasts em sessões de categorias:
- Filtrar episódios por nome do podcast

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias:

* **Node.js** : Ambiente de execução JavaScript
* **TypeScript** : Superconjunto de JavaScript que adiciona tipagem estática ao código
* **Tsup** : Ferramenta de build rápida para TypeScript
* **Tsx** : Executar TypeScript sem a necessidade de compilação manual
* **@types/node** : Tipos TypeScript para Node.js

## Como Funciona

### Feature: Listar Episódios de Podcasts em Sessões de Categorias

#### Como será implementado:

**GET**: Retorna uma lista de episódios

**Resposta**:

```json
[
    {
        "podcastName": "flow",
        "episode": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "categories": ["saúde", "esporte", "bodybuilder"]
    },
    {
        "podcastName": "flow",
        "episode": "RUBENS BARRICHELLO - Flow #339",
        "videoId": "4KDGTdiOV4I",
        "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        "categories": ["esporte", "corrida"]
    }
]
```

**GET**: Retorna uma lista de episódios baseado em um parâmetro enviado pelo cliente (nome do podcast)

## Código

```typescript
import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    // Query String 
    const baseUrl = request.url?.split("?")[0];
  
    // Listar podcasts
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }
  
    // Filtrar podcasts por nome
    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }
};
```

## Como Usar

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Inicie o servidor com `start:dev`.
4. Acesse as rotas `/list` para listar os episódios e `/episode` para filtrar episódios por nome do podcast.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.
