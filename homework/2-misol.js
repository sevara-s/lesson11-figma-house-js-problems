function printArray(array){
    let res="";
    for (let i = 0; i<array.length;i++){
      res+=array[i] + ",";
       
    }
    res = res.slice(0,-1);
    return res
  }