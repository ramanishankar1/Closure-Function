 var addTo=function(passed){

 
 var addNum=(num)=>{
    return passed+num
 }
 return addNum
}
//Generating Closure
 var addNos=addTo(1)
 console.log(addNos(2))
  

 var add=(x,y)=>{
     z=x+y
 
 var concatNum=()=>{
    let getNo=[10,20,50,41,86,100]
    return getNo.concat(z)
 }
 return concatNum
 }
 //Generating Closure
 var out=add(1,10)
 console.log(out());