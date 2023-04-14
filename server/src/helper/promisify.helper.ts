import conn from '../config/dbConnetion'

const promisifyQuery = async (databaseQuery: string) => {
    try {
        var resp:any;
        await new Promise((resolve, reject) => {
            conn.query(databaseQuery, function (err: any, data: string) {
                console.log("in promise")
                if (err) return reject(err)
                resolve(data)
                resp = data
                // return data
            })
        })
        return resp
    }
    catch (err: any) {
        throw new Error(err)
    }
}

export = promisifyQuery
