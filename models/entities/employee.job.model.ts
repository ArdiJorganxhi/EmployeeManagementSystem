import {Table, Model, Column, BelongsToMany, ForeignKey, DataType} from 'sequelize-typescript'
import { Employee } from './employee.model'
import { Job } from './job.model'



@Table({
    timestamps: false,
    tableName: "employees_jobs"
})
export class EmployeeJob extends Model {
    @ForeignKey(() => Employee)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    employeeId!: number

    @ForeignKey(() => Job)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    jobId!: number

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    salary!: number

    @Column({
        type: DataType.DATEONLY,
        allowNull: false
    })
    dateEntered!: Date

    @Column({
        type: DataType.DATEONLY,
        allowNull: true
    })
    dateLeft!: Date



}