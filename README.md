# NodeJS / RabbitMQ PDI

Construção de APIs NodeJS e serviço de fila RabbitMQ no modelo Produtor/Consumidor para consolidar PDI 

## Pré-requisitos

 - Docker
 - NodeJS


### Habilitando o serviço do Rabbit (com html)

```bash
$ docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.8-management
```
Com o serviço do Rabbit rodando, acesse o painel em http://localhost:15672. O user e senha: guest/guest

### Habilitando o produtor

```bash
$ cd producer
$ npm i
$ npm start  
```

### Habilitando o consumidor

```bash
$ cd consumer
$ npm i
$ npm start  
```

Acesse http://localhost:3000/producer para enviar mensagens para a fila:

![alt text](https://devadriano.com.br/images/dev/producer.jpeg)

### Considerações:
A mensagem enviada possui os seguintes status:
- 0 não enviada
- 1 enviada para a fila (check cinza no lado direito da mensagem)
- 2 consumida e enviada pra fila (check verde no lado direito mensagem)

Acesse http://localhost:15672 para ver os detalhes da fila 