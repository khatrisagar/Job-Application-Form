import express from 'express';
const router =  express.Router()
// const router = express.Router()

import { formController } from '../controllers/candidate/form.controller';
import { getEducationSelect } from '../controllers/dynamicformdata/getEducationSelect.controller';

router.post('/',formController);
router.get('/getEducation',getEducationSelect);


export = router