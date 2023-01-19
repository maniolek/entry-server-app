import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entry } from './entry.entity';

@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(Entry)
    private entryRepository: Repository<Entry>,
  ) {}

  findAll(): Promise<Entry[]> {
    return this.entryRepository.find();
  }

  findOne(id: number): Promise<Entry> {
    return this.entryRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.entryRepository.delete(id);
  }

  async add(name: string): Promise<void> {
    await this.entryRepository.insert({ name });
  }
}
