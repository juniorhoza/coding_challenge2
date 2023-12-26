const evaluate_Button=document.getElementById("evaluate")
 let input_box=document.getElementById("input-values")
 const result_box=document.getElementById("Result")
 let extracted_values=[]
 let target=document.getElementById("input-target")


evaluate_Button.onclick=(()=>{
    
    let tmp=input_box.value.split(",")
    tmp.map((e)=>{
        extracted_values.push(parseInt(e))
    })
    
    
    
   result_box.value=findFirstAndLastPos(parseInt(target.value),extracted_values)
   extracted_values=[]
   input_box.value=""
   target.value=""
})


function findFirstAndLastPos(target,numbers){
    let positions= [-1,-1]
    if(numbers.indexOf(target)!=-1){
        positions[0]= numbers.indexOf(target)
            if(numbers[numbers.indexOf(target)+1]== target){
                //this if statement is used to find if the secound value after the first occurance of the target are the same, that is equals to the target
                positions[1]=numbers.indexOf(target)+1
            }
    }
    return positions
}