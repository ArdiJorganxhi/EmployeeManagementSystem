import { Table, Model, Column, DataType } from 'sequelize-typescript'

@Table({
    timestamps: false,
    tableName: "jobs"
})

export class Job extends Model {

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    department!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    salary_range!: number

}
