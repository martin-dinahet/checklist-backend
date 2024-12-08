import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChecklistsModule } from "./checklists/checklists.module";
import { TasksModule } from "./tasks/tasks.module";
import { Checklist } from "./checklists/entities/checklist.entity";
import { Task } from "./tasks/entities/task.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db/sqlite.db",
      entities: [Checklist, Task],
      synchronize: true,
    }),
    ChecklistsModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
