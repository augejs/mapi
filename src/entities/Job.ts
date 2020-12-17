import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from "@augejs/typeorm";
import { JobStatusEnum, JobScheduleTypeEnum, JobScheduleStatusEnum } from '../enums';

@Entity()
@Index(['status', 'scheduleStatus'])
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    nullable: false,
    comment: `org id means an organization`
  })
  orgId!: string;

  @Column({
    length: 32,
    nullable: false,
    comment: `app id means an application`
  })
  appId!: string;

  @Column({
    comment: `biz id means an business point id`
  })
  bizId!: string;

  @Column('enum', {
    enum: JobStatusEnum,
    default: JobStatusEnum.NORMAL,
  })
  status: string = JobStatusEnum.NORMAL

  @Column('text', {
    default: '',
  })
  desc: string = '';

  @Column('enum', {
    enum: JobScheduleStatusEnum,
    default: JobScheduleStatusEnum.WAITING,
  })
  executeStatus: JobScheduleStatusEnum = JobScheduleStatusEnum.WAITING;

  @Column('json')
  scheduleSchema: any = {};

  @Column('int')
  scheduleCurStep: number = 0;

  @Column('int')
  scheduleTotalStep: number = 0;

  @Column('timestamp')
  executeTimeStamp!: Date;

  @Column({
    length: 32,
    nullable: false,
    comment: `processor fingerprint default equals to env.ProcessorFingerprint or equals ip + port`
  })
  PFP!: string;

  @CreateDateColumn()
  createAt!: Date;

  @UpdateDateColumn()
  updateAt!: Date;
}
