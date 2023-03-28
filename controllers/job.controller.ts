import express, { Request, Response } from 'express'
import CreateJobRequest from "../models/requests/create.job";
import EmployeeService from "../services/employee.service";
import JobService from "../services/job.service";

class JobController {

    private jobService = new JobService()


    public async createJob(req: Request, res: Response): Promise<Response> {
        let request: CreateJobRequest = req.body;

        const job = await this.jobService.createJob(request);

        if (job) {
            return res.status(201).send({ message: "Job is created!" })
        }

        return res.status(500).send({ message: "Something wrong happened!" })
    }

    public async getJobById(req: Request, res: Response): Promise<Response> {

        let { id } = req.params

        const job = await this.jobService.getJobById(parseInt(id))

        if (job) {
            return res.status(200).send(job)
        }

        return res.status(404).send({ message: "Job not found!" })
    }

    public async deleteJobById(req: Request, res: Response): Promise<Response> {

        let { id } = req.params;

        const job = await this.jobService.deleteJobById(parseInt(id))

        if(job){
            return res.status(200).send({message: "Job is deleted!"})
        }

        return res.status(500).send({message: "Something wrong happened!"})
    }
}

export default JobController