const isValidParams = (str)=>{
    const stack = [];

    const bracket ={
        "{":"}",
        "(":")",
        "[":"]",
    }

    for (const char of str) {
        if(bracket[char]){
            stack.push(char)
        }else{
            const top = stack.pop();

            if(bracket[top] != char){
                return false
            }
        }
    }


    return stack.length ==0;
}