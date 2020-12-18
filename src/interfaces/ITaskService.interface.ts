import { JobEntity, TaskEntity } from "../entities";
import { TaskData, TaskResult } from "../types";

export interface ITaskService {
  run(job: JobEntity, task: TaskEntity) : Promise<TaskResult>
}
