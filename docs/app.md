# Podcast Menager

### Descricao

Um app ao estilo netflix, aonde posa centralizar diferentes episódios de podcasts separados por categoria

### Features

-Listas os episodios podcasts em sessões de categorias
    -[saúde,bodybuilder,mentalidade,humor]
-Filtrar episodios por nome do Podcast

### Dominio

Podcasts feitos em vídeo

## Como

#### Feature:

-Listas os episodios podcasts em sessões de categorias

### Como vou implementar:

GET : retorna lista de episodios

response:

```js
[
{
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    categories: ["saúde", "esporte", "bodybuilder"]

},
{
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categories: ["esporte", "corrida"]

}
]


```


GET : retorna lista de episodios baseado em um parametro enviado  pelo cliento do nome do podcast
