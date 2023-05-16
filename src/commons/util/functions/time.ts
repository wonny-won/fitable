export const time = (DBtime:number)=>{
    const timeStamp = DBtime;
    const javascriptDate = new Date(timeStamp*1000)
    const date = `${javascriptDate.getFullYear()}-${javascriptDate.getMonth()+1}-${javascriptDate.getDate()} `
    return date
}