import { Table, Model, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { EmployeeJob } from "./employee.job.model";
import { Job } from "./job.model";


@Table({
    timestamps: false,
    tableName: "employees"
})
export class Employee extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    surname!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!: string;

    @BelongsToMany(() => Job, {
        through: () => EmployeeJob,
        foreignKey: 'employeeId',
        otherKey: 'jobId'
      })
    jobs!: Job[]
}