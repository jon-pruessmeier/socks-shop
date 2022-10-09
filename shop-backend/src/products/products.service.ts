import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class ProductsService implements OnModuleInit {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAll() {
    return this.productsRepository.find();
  }

  async onModuleInit(): Promise<void> {
    const shopSocksData: Product[] = [
      {
        id: 1,
        name: 'One Pair Black Allstars',
        price: 12,
        description: 'Classic black ones for every situation.',
        imageSrc: 'black-standard.jpg',
      },
      {
        id: 2,
        name: 'Five Pairs of Color',
        price: 24,
        description: 'The perfect color mix for the creatives.',
        imageSrc: 'mix-standard.jpg',
      },
      {
        id: 3,
        name: 'Three Pairs Premium Box',
        price: 39,
        description: 'Our premium socks - high quality cotton to win the day.',
        imageSrc: 'box-standard.jpg',
      },
    ];

    const data = await this.findAll();
    if (data && data.length > 0) {
      //deletes existing data:
      await this.productsRepository.delete(data.map((item) => item.id));
    }

    await this.productsRepository.insert(shopSocksData);
    return;
  }
}
