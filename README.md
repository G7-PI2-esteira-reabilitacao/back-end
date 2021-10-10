# back-end
back-end of FisioGama

## Configurações de ambiente

Os serviços do FisioGama utilizam Docker e Docker-compose para a configuração do ambiente.

O arquivo docker-compose se encontra nesse repositorio, e para ter acesso aos demias serviços é necessario que eles estajam na mesma pasta raiz do back-end, como no exemplo:

/FisioGama/back-end e /FisioGama/BP_service

### Dependencias

Para rodar a aplicação, instale as seguintes dependedências:

- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Docker Compose](https://docs.docker.com/compose/install/)

Para subir a aplicação é necessario seguir os comandos abaixo:

```
$ docker-compose up -d --build
// Utilizar ```--build``` apenas na primeira execução ou quando adicionar novas dependencias ao projeto.

$ docker-compose down
// Para encerrar os containers

$ docker ps
// Para ver uma lista dos containers rodando

$ docker logs [nome do container]
// Para ver o log do container, utilizar o nome do container disponibilizado na ultima coluna do $ docker ps

```