// TODO 逻辑纰漏，当sections内items顺序不是index顺序时会有问题
// TODO 从先排序sections 和 反向插入 方面思考如何改进
const inject =(items, sections) => {
    let currentIndex = 0;
    for(let section of sections){
        if (section.index <= currentIndex){
            items.splice(section.index,0,section.content)
        }else {
            items.splice(section.index+1,0,section.content)
            currentIndex = section.index;
        }
    }
    return items;
}
export { inject };
