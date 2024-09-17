import { Router } from "express";
import { createMedicine } from "../Controller/medicineController";
import { createValidation } from "../Middleware/medicineValidation";
const router = Router()

router.post(`/`, [createValidation],createMedicine)

/** show all medicine */
router.get('/', readMedicine)

export default router