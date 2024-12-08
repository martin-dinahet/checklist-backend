import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Checklist } from "./entities/checklist.entity";
import { Repository } from "typeorm";
import { CreateChecklistDto } from "./dto/create-checklist.dto";
import { UpdateChecklistDto } from "./dto/update-checklist.dto";

@Injectable()
export class ChecklistsService {
  constructor(
    @InjectRepository(Checklist)
    private checklistRepository: Repository<Checklist>,
  ) {}

  create = (createChecklistDto: CreateChecklistDto) => {
    const checklist = this.checklistRepository.create(createChecklistDto);
    return this.checklistRepository.save(checklist);
  };

  findAll = () => {
    return this.checklistRepository.find({ relations: ["tasks"] });
  };

  findOne = async (id: string) => {
    const checklist = await this.checklistRepository.findOne({
      where: { id },
      relations: ["tasks"],
    });
    if (!checklist) {
      throw new NotFoundException(`Checklist with id ${id} not found`);
    }
    return checklist;
  };

  update = async (id: string, updateChecklistDto: UpdateChecklistDto) => {
    const checklist = await this.checklistRepository.findOne({
      where: { id },
      relations: ["tasks"],
    });
    Object.assign(checklist, updateChecklistDto);
    return this.checklistRepository.save(checklist);
  };

  remove = async (id: string) => {
    const checklist = await this.checklistRepository.findOne({
      where: { id },
      relations: ["tasks"],
    });
    return this.checklistRepository.remove(checklist);
  };
}
