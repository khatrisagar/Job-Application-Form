import express, { Request, Response, NextFunction } from 'express';
import insertData = require('../services/insertData.service');

type basicDataType = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: number,
    state: string,
    city: string,
    address: string
    gender: "male" | "female" | "other"
}


export const formController = (req: Request, res: Response) => {
    try {
        // const {first_name, last_name,email,phone_number,state,city,address,gender}:basicDataType = req.body
        let basicDataObject: string[] = []



        for (let x in req.body) {
            basicDataObject.push(`${req.body[x]}`)
        }

        const colNameArr = ["first_name", "last_name", "email", "phone_number", "state", "city", "address", "gender", "zipcode"]
        insertData("new_table", colNameArr, basicDataObject)
        res.end()
    }
    catch (err: any) {
        throw new Error(err)
    }

}

// module.exports = {formController}


