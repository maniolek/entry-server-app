import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEntryDto } from './create-entry-dto';
import { Entry } from './entry.entity';
import { EntryService } from './entry.service';

@Controller('entry')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Get()
  getEntries(): Promise<Entry[]> {
    return this.entryService.findAll();
  }

  @Post()
  createEntry(@Body() createEntryDto: CreateEntryDto): Promise<void> {
    return this.entryService.add(createEntryDto.name);
  }
}
