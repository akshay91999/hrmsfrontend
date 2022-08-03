import React,{useState} from 'react'

function useForm(initialFvalues) {
  const [values,setValues]=useState(initialFvalues)
  const handleInputChange=(e)=>{
    const{ name,value }=e.target
    console.log(values)
    setValues({
      ...values,
      [name] : value
    })
  }
  return {
   values,
   setValues,
   handleInputChange
}
}

export default useForm
