import express from 'express';
import ResultsController from '../../controllers/results/results';
import InPutValidation from '../../validation/inPutValidation'

const { validateAddResult } = InPutValidation;

   const {
      AddResults,GetAllReults,
   } = ResultsController;  
   
const router = express.Router();
router.post('/',validateAddResult,AddResults);
router.get('/',GetAllReults);


export default router;
