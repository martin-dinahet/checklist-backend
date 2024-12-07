import { Controller } from "@nestjs/common";
import { ChecklistsService } from "./checklists.service";

@Controller("checklists")
export class ChecklistsController {
  constructor(private readonly checklistsService: ChecklistsService) {}
}
