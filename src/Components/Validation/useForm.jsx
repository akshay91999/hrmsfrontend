import {useState} from 'react'

export default function useForm(initialFvalues) {
  const [values,setValues]=useState(initialFvalues)
  const [errors,setErrors]=useState({})
  const handleInputChange=(e)=>{
    const{ name,value }=e.target
    
    setValues({
       
      ...values,
      [name] : value
    })
  }
  console.log(values)
  return {
   values,
   setValues,
   errors,
   setErrors,
   handleInputChange
}
}


