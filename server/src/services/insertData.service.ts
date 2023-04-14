import promisifyQuery from "../helper/promisify.helper"


const insertData = (tableName: string, columnNameArr: string[], valueArr: string[]) => {

    try {
        let newValue: string = "";
        for (let i = 0; i < valueArr.length; i++) {
            if (i == valueArr.length - 1) {
                newValue = newValue.concat(`"`, valueArr[i], `"`)
            } else {
                newValue = newValue.concat(`"`, valueArr[i], `"`, `,`)
            }
        }

        let insertQuery = `insert into ${tableName}(${columnNameArr})values(${newValue})`

        promisifyQuery(insertQuery)

    }
    catch (err:any) {
        throw new Error(err)
    }
}

export = insertData