import express, { Request, Response, NextFunction } from 'express';
import { educationSelectData } from '../../services/education/education.service';
import {selectData} from '../../services/selectData.service'

export const getEducationSelect =async (req:Request, res:Response)=>{
    try{
        let tabelNameArr = ["select_name"]
        let whereColName:string[] = ['fk_option_id']
        let whereColCourseVal: (string|number|boolean)[] = [1]

        let courseData = await educationSelectData(tabelNameArr,whereColName,whereColCourseVal,true)
        
        let whereColUniVal:(string|number|boolean)[] = [2]

        let universityData =  await educationSelectData(tabelNameArr,whereColName,whereColUniVal,true )
        console.log("uniData",universityData)
        res.json({courseData,universityData})
    }
    catch(err: any){
        throw new Error(err)
    }
}


// sudo chown sagar-khatri:sagar-khatri /var/run/docker.sock
