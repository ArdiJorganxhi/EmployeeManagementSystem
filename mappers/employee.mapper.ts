import EmployeeDto from "../models/dtos/employee.dto";
import { Employee } from "../models/employee.model";

class EmployeeMapper {

    public toDto(employee: Employee): EmployeeDto {

        const employeeDto = new EmployeeDto(employee.id, employee.name, employee.surname);
        return employeeDto;
    }
}
export default EmployeeMapper