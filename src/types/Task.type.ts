import { AxiosRequestConfig } from '@augejs/axios';

export type TaskHttpData = AxiosRequestConfig;

export type TaskCode = 'http';
export type TaskData = TaskHttpData;
export type TaskResult = object;

export type TaskSchema = {
  delay: number | string
  code: TaskCode,
  data: TaskData,
}
