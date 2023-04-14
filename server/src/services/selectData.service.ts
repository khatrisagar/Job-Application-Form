import promisifyQuery from "../helper/promisify.helper";

export const selectData = async(tableName: string, colNameArr: string[],where?: string)=>{
    try{
        const selectQuery = `select ${colNameArr} from ${tableName} ${where ? `where ${where}` : "" }`
        let resultData = await promisifyQuery(selectQuery)
        console.log("select service",resultData)
        return resultData
    }
    catch(err: any){
        throw new Error(err)
    }
}
