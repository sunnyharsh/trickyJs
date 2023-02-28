let obj = {
  name:'A',
  address:'B',
  obj1:{
     name:'A1',
     address:'B1',
     obj2:{
      name:'A2',
      address:'B2',
      obj3:{
        // And so on...
      }
     }
  }
}
function objDemo(obj, keyName){
   if(typeof obj != "object" ){
    return obj
   }
    let keys=Object.keys(obj)
    for(let i=0; i< keys.length; i++){
        let key=keys[i];
        let value=obj[key]
        str=`${keyName}_${key}`
        if(typeof value != "object"){
            console.log(str , "=", value)
        }else{
            str=objDemo(value, str)
        }
   }
}
objDemo(obj, "obj")

// output :- 
//   obj_name = 'A'
//   obj_address = 'B'
//   obj_obj1_name = 'A1'
//   obj_obj1_address = 'B1'
//   obj_obj1_obj2_name = 'A2'
//   obj_obj1_obj2_address = 'B2'
//   obj_obj1_obj2_obj3_name = 'A3'
//   obj_obj1_obj2_obj3_address = 'B3'