import express, { Request, Response } from 'express'
import EmployRequest from '../models/requests/employ.request';
import EmployeeJobService from '../services/employee.job.service';
import EmployeeService from '../services/employee.service';


class EmployeeController {

    private employeeService = new EmployeeService();
    private employeeJobService = new EmployeeJobService();

    public async getEmployeeById(req: Request, res: Response): Promise<Response> {

        let employee = await this.employeeService.getEmployeeById();
        if (!employee) {
            return res.status(404).send({ message: "Employee not found!" })
        }

        return res.status(200).send(employee)



    }

    public async deleteEmployeeById(req: Request, res: Response): Promise<Response> {
        let { id } = req.params;
        let employee = await this.employeeService.deleteEmployeeById(parseInt(id));
        if (!employee) {
            return res.status(500).send({ message: "Something wrong happened!" })

        }
        return res.status(200).send({ message: "Employee is deleted!" })


    }

    public async employ(req: Request, res: Response): Promise<Response> {
        let { employeeId, jobId } = req.params;
        let request: EmployRequest = req.body;
        let employment = await this.employeeJobService.employ(parseInt(employeeId), parseInt(jobId), request);

        if (!employment) {
            return res.status(500).send({ message: "Something went wrong!" })
        }

        return res.status(200).send({ message: "Employment is successful!" })
    }

    public async unemploy(req: Request, res: Response): Promise<Response> {
        let { employeeId, jobId } = req.params;

        let unemployment = await this.employeeJobService.unemploy(parseInt(employeeId), parseInt(jobId));

        if (!unemployment) {
            return res.status(500).send({ message: "Something went wrong!" })
        }

        return res.status(200).send({ message: "Unemployment is successful!" })

    }
}

export default EmployeeController;