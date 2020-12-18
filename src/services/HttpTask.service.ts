import { Inject, Provider } from "@augejs/module-core";
import { AXIOS_IDENTIFIER, AxiosInstance, AxiosResponse } from '@augejs/axios';
import { JobEntity, TaskEntity } from '../entities';
import { ITaskService } from "../interfaces";
import { TaskResult } from "../types";

@Provider()
export class HttpTaskService implements ITaskService {

  @Inject(AXIOS_IDENTIFIER)
  httpService!: AxiosInstance;

  async run(job: JobEntity, task: TaskEntity):Promise<TaskResult> {
    const taskSchema = task.taskSchema;
    const httpRequestData = taskSchema.data;
    const response: TaskResult = await this.httpService.request(httpRequestData) as TaskResult;
    return response
    // here will go to next step or finish the job
  }
}
