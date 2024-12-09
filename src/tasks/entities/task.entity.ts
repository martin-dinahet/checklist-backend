import { Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Column } from "typeorm";
import { ManyToOne } from "typeorm";
import { Checklist } from "../../checklists/entities/checklist.entity";

@Entity()
export class Task {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column({ default: false })
  isChecked: boolean;

  @ManyToOne(() => Checklist, (checklist) => checklist.tasks)
  checklist: Checklist;
}
