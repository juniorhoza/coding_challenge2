

const evaluate_Button=document.getElementById("evaluate")
 let input_box=document.getElementById("input-values")
 const result_box=document.getElementById("Result")
 let extracted_values=[]
 

evaluate_Button.onclick=(()=>{
    let tmp=input_box.value.split(",")
    tmp.map((e)=>{
        extracted_values.push(parseInt(e))
    })
    
    
   result_box.value=FindsingleSalary()
   extracted_values=[]
   input_box.value=""
})

function FindsingleSalary(){
    let singleSalary=0;
    for( let i=0;i<extracted_values.length;i++){
        for(let j=i+1; j<extracted_values.length;j++){
            if(extracted_values[i] == extracted_values[j]){
                break
            }
            else{
                singleSalary=extracted_values[i]
            }
        }
    }
    return singleSalary
}

