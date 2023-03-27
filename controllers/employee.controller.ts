import express, { Request, Response } from 'express'
import EmployeeService from '../services/employee.service';


class EmployeeController {

    private employeeService = new EmployeeService();
    public async getEmployeeById(req: Request, res: Response): Promise<Response> {
        let { id } = req.params;

        let employee = await this.employeeService.getEmployeeById(parseInt(id));
        if (employee) {
            return res.status(200).send(employee)
        }
        return res.status(404).send({ message: "Employee not found!" })


    }

    public async deleteEmployeeById(req: Request, res: Response): Promise<Response> {
        let { id } = req.params;
        let employee = await this.employeeService.deleteEmployeeById(parseInt(id));
        if (employee) {
            return res.status(200).send({ message: "Employee is deleted!" })
        }

        return res.status(500).send({ message: "Something wrong happened!" })
    }
}

export default EmployeeController;