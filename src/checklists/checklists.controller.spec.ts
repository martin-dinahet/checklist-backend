import { Test, TestingModule } from "@nestjs/testing";
import { ChecklistsController } from "./checklists.controller";
import { ChecklistsService } from "./checklists.service";
import { CreateChecklistDto } from "./dto/create-checklist.dto";
import { Checklist, ChecklistStatus } from "./entities/checklist.entity";

describe("ChecklistsController", () => {
  let controller: ChecklistsController;
  let service: ChecklistsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChecklistsController],
      providers: [
        ChecklistsService,
        {
          provide: ChecklistsService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ChecklistsController>(ChecklistsController);
    service = module.get<ChecklistsService>(ChecklistsService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("create", () => {
    it("should create a checklist", async () => {
      const createChecklistDto: CreateChecklistDto = {
        title: "Test checklist",
        description: "This is a test checklist",
        status: ChecklistStatus.NOT_STARTED,
      };
      const expectedResult: Checklist = {
        id: "1",
        title: "Test checklist",
        description: "This is a test checklist",
        status: ChecklistStatus.NOT_STARTED,
        tasks: [],
      };
      jest.spyOn(service, "create").mockResolvedValue(expectedResult);

      expect(await controller.create(createChecklistDto)).toBe(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createChecklistDto);
    });
  });
});
