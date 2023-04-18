
import {selectData} from '../selectData.service'


export const educationSelectData = async (tableName: string[],columName: string[], columnVal: (string|number|boolean)[], and?:boolean) =>{
    let whereQuery:string = "";
    let len:number = columName.length
    for(let i:number = 0; i<len; i++){
        let tempCondition: string = ` ${columName[i]} = ${columnVal[i]} ${i != len-1 ? `${and == true ? "and" : "or"}` : "" }`
        whereQuery += tempCondition
    }
    let data = await selectData("select_master",tableName,whereQuery)
    return data
}
