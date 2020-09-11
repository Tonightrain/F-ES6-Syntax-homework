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
