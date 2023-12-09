import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      "Status": "Está api está funcionando corretamente.",
      "Criador": "Está api foi criada por NícolasBC",
      "StatusAPI": "Api está em forma de desenvolvimento",
      "Funcionalidade": "Api criada para ser integrada e consumida pelo front de forma leve, tendo uma produção mais rapida.",
      "Recursos": ["prisma", "nestjs", "sqlite", "swagger", "vuejs3", "vuetify"]
    };
  }
}
