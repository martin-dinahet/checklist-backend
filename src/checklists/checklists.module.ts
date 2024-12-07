import { Module } from "@nestjs/common";
import { ChecklistsService } from "./checklists.service";
import { ChecklistsController } from "./checklists.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Checklist } from "./entities/checklist.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Checklist])],
  controllers: [ChecklistsController],
  providers: [ChecklistsService],
})
export class ChecklistsModule {}
