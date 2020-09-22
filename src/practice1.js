const parseData = (jsonData) => {
    // TODO 解构可以优化到函数接受参数中
    const {data, column} = jsonData;
    // TODO 使用map做数组与数组的转化，不用声明新数组
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
