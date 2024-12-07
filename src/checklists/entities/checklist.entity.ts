import { Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Column } from "typeorm";
import { OneToMany } from "typeorm";
import { Task } from "../../tasks/entities/task.entity";

export enum ChecklistStatus {
  NOT_STARTED = "not started",
  IN_PROGRESS = "in progress",
  DONE = "done",
}

@Entity()
export class Checklist {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: "simple-enum",
    enum: ChecklistStatus,
    default: ChecklistStatus.NOT_STARTED,
  })
  status: ChecklistStatus;

  @OneToMany(() => Task, (task) => task.checklist)
  tasks: Array<Task>;
}
