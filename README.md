Instruções
IMPORTANTE
[SEMPRE.QUE.CRIAR.ALGUM.MODEL.DENTRO.DO.SCHEMA.PRISMA.LANÇAR.ESSE.COMANDO.NO.TERMINAL.PARA.ELE.CRIAR.AS.PASTAS]
3- npx nest generate resource ( nome, Y)

1- nest new .
2- npm run start:dev para rodar.

Lembrar:
Model é o cara que precisa ta la pras coisas funcionar
Controller é o cara que vai gerar as rotas
Service vai ser os cara que a gente vai meter função
importanto sempre colocar o Injectable.

3- npx nest generate resource ( nome, Y)
4- npm install prisma --save-dev
5- npx prisma init
6- alterar providers, [schema.prisma]
7- alterar Env : file:./dev.db
8- IR EM SCHEMA.prisma
9- CRIAR UM MODEL COMO POR EXEMPLO
'''
 model Category {
  id        Int      @id @default(autoincrement())
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @default(now())
}
'''
10- UTILIZAR O COMANDO :  npx prisma migrate dev
### (que é a criação da tabela para o bnanco de dados do model que vocE criou)
11 - npm instal @prisma/client
12- npx nest generate module  prisma (fica dentro da parta SRC )
13- npx nest generate service  prisma (fica dentro da pasta SRC)
14 - mexer na pasta  prisma/prisma.service.ts
### Código atribuido no github
[https://github.com/NicolasCastela/NESTJS-API-REST/blob/master/src/prisma/prisma.service.ts]














Extensão Rest client.
criar arquivo api.http
e ###
GET url
