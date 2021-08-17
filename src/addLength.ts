import { Length } from "./Length"
import { cmToMetre,mmToMetre, metreToCM, metreToMM,mmToCM, cmToMM } from "./Conversion"

const convertIntoMetre=(val1:number, val2:number, type:string)=>{
    let result:number
    return type==="cm"?
                result = val1 + cmToMetre(val2):
                result = val1 + mmToMetre(val2)
} 

const convertIntoCM = (val1:number, val2:number, type:string) => {
    let result:number
    return type==="metres"?
            result = val1 + metreToCM(val2):
            result = val1 + mmToCM(val2)
}
const convertIntoMM=(val1:number, val2:number, type:string)=>{
    let result:number
    return type==="metres"?
            result = val1 + metreToMM(val2):
            result = val1 + cmToMM(val2)
}

export const addLengths = (length1: Length, length2:Length) => {
    let result:number=0
    if(length1.unit==="metres" && length2.unit!=="metres"){
        result = convertIntoMetre(length1.value, length2.value, length2.unit)
    }
    else if(length1.unit==="cm" && length2.unit!=="cm"){
        result = convertIntoCM(length1.value, length2.value, length2.unit)
    }
    else if( length1.unit==="mm" && length2.unit!=="mm"){
        result = convertIntoMM(length1.value, length2.value, length2.unit)
    }
    return result
}
