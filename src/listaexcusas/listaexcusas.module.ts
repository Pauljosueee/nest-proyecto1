import { Module } from '@nestjs/common';
import { ListaexcusasService } from './listaexcusas.service';
import { ListaexcusasController } from './listaexcusas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ListaexcusasController],
  providers: [ListaexcusasService],
  imports: [PrismaModule],

})
export class ListaexcusasModule {}
