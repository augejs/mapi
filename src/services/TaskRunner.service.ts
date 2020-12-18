import { Inject, Provider, GetScanNode, IScanNode } from "@augejs/module-core";
import { AXIOS_IDENTIFIER, AxiosInstance, AxiosResponse } from '@augejs/axios';
import { JobEntity, TaskEntity } from '../entities';
import { HttpTaskService } from './HttpTask.service';
import { ITaskService } from '../interfaces';
import { TaskResult } from "../types";

const TaskMapping = {
  'http': HttpTaskService,
};

@Provider()
export class TaskRunnerService {

  @GetScanNode()
  scanNode!: IScanNode;

  async run(job: JobEntity, task: TaskEntity) {
    const taskService: ITaskService = this.scanNode.context.container.get<ITaskService>(TaskMapping[task.taskSchema.code] as any);
    try {
      const taskResult: TaskResult = await taskService.run(job, task);
    } catch (error) {
    }
  }
}
