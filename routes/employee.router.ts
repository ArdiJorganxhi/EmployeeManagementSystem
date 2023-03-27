import express from 'express'
import { container } from 'tsyringe'
import EmployeeController from '../controllers/employee.controller'
import VerifyToken from '../middlewares/verify.token';

const router = express.Router();

const employeeController = container.resolve(EmployeeController);
const verifyToken = new VerifyToken();

router.get('/:id', verifyToken.verifyUser,  employeeController.getEmployeeById.bind(employeeController));
router.delete('/:id', verifyToken.verifyUser, employeeController.deleteEmployeeById.bind(employeeController));

export default router