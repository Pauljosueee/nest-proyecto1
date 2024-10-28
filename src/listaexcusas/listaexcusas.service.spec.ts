import { Test, TestingModule } from '@nestjs/testing';
import { ListaexcusasService } from './listaexcusas.service';

describe('ListaexcusasService', () => {
  let service: ListaexcusasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListaexcusasService],
    }).compile();

    service = module.get<ListaexcusasService>(ListaexcusasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
