import express from 'express';
const router =  express.Router()
// const router = express.Router()

import { formController } from '../controllers/form.controller';

router.post('/',formController);


export = router