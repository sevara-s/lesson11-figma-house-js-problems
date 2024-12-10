function getAverage(marks){
    return Math.round(marks.reduce((sum,mark)=>sum+mark,0)/marks.length);
 }
//  testdan o'tdi attemp qilinganda 2 ta testcasedan o'tmadi. 