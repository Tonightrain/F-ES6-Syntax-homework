const parseData = (jsonData) => {
    const {data, column} = jsonData;
    const result = [];
    for (let detail of data){
        let resultData = {};
        column.forEach((value,index) => {
            resultData[value.name] = detail[index];
        })
        result.push(resultData);
    }
    return result;
}
export { parseData };
