import { Injectable } from '@nestjs/common';
import { CreateListaexcusaDto } from './dto/create-listaexcusa.dto';
import { UpdateListaexcusaDto } from './dto/update-listaexcusa.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ListaexcusasService {
  constructor(private prisma: PrismaService){}

  create(createListaexcusaDto: CreateListaexcusaDto) {
    return this.prisma.listaexcusas.create({
      data: createListaexcusaDto,
    });
  }


  findAll() {
    return this.prisma.listaexcusas.findMany({
      
    });
  }

  findOne(id: number) {
    return this.prisma.listaexcusas.findUnique({
      where:{id},
  
  });
  }

  update(id: number, updateListaexcusaDto: UpdateListaexcusaDto) {
    return this.prisma.listaexcusas.update({
      where:{id},
      data: updateListaexcusaDto,
    });
  }

  

  remove(id: number) {
    return this.prisma.listaexcusas.delete({
      where:{id},
  })
}

}