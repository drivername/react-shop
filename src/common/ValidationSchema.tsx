interface Result{
    min:string
    max:string
    isEmail:string,
    passwords:string
}

export default function check(valueToCheck:any,min:number,max:number,isEmail:any,lackSpecialSign?:any){
    
    let result:Result={
        min:'',
        max:'',
        isEmail:'',
        passwords:''
    }
    if(min){
        if(valueToCheck.length<min)result.min=`You have to provide minimum ${min} characters`
        else{result.min=''}
    }
    if(max){
        if(valueToCheck.length>max)result.max=`Maximum length available is ${max}`
        else{
            result.max=''
        }
    }
    if(isEmail){
       if(valueToCheck){
        let value=[...valueToCheck]
        let effect=value.includes('@')
        if(effect){
            result.isEmail=''
        }
        else{
            result.isEmail='You have to provide correct email'
        }
    }
       else{
        result.isEmail=`You have to provide correct e-mail with '@'`
       }
    }
 
    if(result.min||result.max||result.isEmail||result.passwords){
        return {msg:`${result.min} 
        ${result.max} 
        ${result.isEmail} ${result.passwords}`,status:true}
    }
    return {msg:'',status:false}
}
//It will be developed
export function checkPassword(pass1:any,pass2:any){
    if(pass1===pass2){
        return {status:false,msg:''}
    }
    else{
        return {status:true,msg:'Both password have to be the same!'}
    }
}