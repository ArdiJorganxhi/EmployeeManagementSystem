import EmployeeMapper from "../mappers/employee.mapper";
import EmployeeDto from "../models/dtos/employee.dto";
import { Employee } from "../models/employee.model";


class EmployeeService {

    private employeeMapper = new EmployeeMapper();

    public async getEmployeeById(employeeId: number): Promise<EmployeeDto> {

        const employee = await Employee.findOne({
            where: {
                id: employeeId
            }
        });

        if (!employee) {
            throw new Error("Employee not found!")
        }

        return this.employeeMapper.toDto(employee);

    }
    public async deleteEmployeeById(employeeId: number): Promise<Number> {

        return await Employee.destroy({ where: { id: employeeId } });
    }
}
export default EmployeeService;