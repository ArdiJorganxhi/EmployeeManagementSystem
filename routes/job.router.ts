import express from 'express'
import { container } from 'tsyringe'
import JobController from '../controllers/job.controller';
import VerifyToken from '../middlewares/verify.token';


const router = express.Router();

const jobController = container.resolve(JobController)
const verifyToken = new VerifyToken();

router.post('/', verifyToken.verifyUser, jobController.createJob.bind(jobController));
router.get('/:id', verifyToken.verifyUser, jobController.getJobById.bind(jobController));
router.delete('/:id', verifyToken.verifyUser, jobController.deleteJobById.bind(jobController))

export default router