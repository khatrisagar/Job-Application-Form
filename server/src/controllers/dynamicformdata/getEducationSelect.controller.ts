import express, { Request, Response, NextFunction } from 'express';
import { educationSelectData } from '../../services/education.service';
import {selectData} from '../../services/selectData.service'

export const getEducationSelect =async (req:Request, res:Response)=>{
    try{
        let columnNameArr = ["select_name"]
        let whereColName:string[] = ['fk_option_id']
        let whereColVal: (string|number|boolean)[] = [1]

        let whereCondition = educationSelectData(whereColName,whereColVal,true)
        // console.log("where con",whereCondition)
        let data = await selectData("select_master",columnNameArr,whereCondition)
        console.log("data",data)
        res.json(data)
    }
    catch(err: any){
        throw new Error(err)
    }
}


