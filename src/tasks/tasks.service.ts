import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";
import { Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  create = (createTaskDto: CreateTaskDto) => {
    const task = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(task);
  };

  findAll = () => {
    return this.taskRepository.find({ relations: ["checklist"] });
  };

  findOne = async (id: string) => {
    const task = await this.taskRepository.findOne({
      where: { id },
      relations: ["checklist"],
    });
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return task;
  };

  update = async (id: string, updateTaskDto: UpdateTaskDto) => {
    const task = await this.taskRepository.findOne({
      where: { id },
      relations: ["checklist"],
    });
    Object.assign(task, updateTaskDto);
    return this.taskRepository.save(task);
  };

  remove = async (id: string) => {
    const task = await this.taskRepository.findOne({
      where: { id },
      relations: ["checklist"],
    });
    return this.taskRepository.remove(task);
  };
}
