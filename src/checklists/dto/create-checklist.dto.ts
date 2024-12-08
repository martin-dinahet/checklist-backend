import { ChecklistStatus } from "../entities/checklist.entity";

export class CreateChecklistDto {
  title: string;
  description: string;
  status?: ChecklistStatus;
}
