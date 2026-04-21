class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    // evalRPN(tokens) {
    //     let stack = [];
    //     for(let i=0; i<tokens.length; i++) {
    //         if(tokens[i] === "+" || 
    //             tokens[i] === "-" || 
    //             tokens[i] === "/" || 
    //             tokens[i] === "*") {
    //                 let operand1 = stack.pop();
    //                 let operand2 = stack.pop();
    //                 if(tokens[i] === "+") {
    //                     stack.push(operand1+operand2)
    //                 } else if(tokens[i] === "-") {
    //                     stack.push(operand2-operand1)
    //                 } else if(tokens[i] === "/") {
    //                     stack.push(Math.trunc(operand2 / operand1))
    //                 } else {
    //                     stack.push(operand1*operand2)
    //                 }
    //         } else {
    //             stack.push(parseInt(tokens[i]))
    //         }
    //     }
    //     return stack[0]
    // }

    evalRPN(tokens) {
        let stack = new Array();

        for(let i=0; i<tokens.length; i++) {
            console.log("Stack ",stack)
            if(["+", "*", "-", "/"].includes(tokens[i])) {
                let val1 = Number(stack.pop());
                let val2 = Number(stack.pop());
                if(tokens[i] === "+") {
                    stack.push(val1 + val2)
                } else if(tokens[i] === "*") {
                    stack.push(val1 * val2)
                } else if(tokens[i] === "-") {
                    stack.push(val2 - val1)
                } else {
                    stack.push(Math.trunc(val2 / val1))
                }
            } else {
                stack.push(tokens[i]);
            }
        }
        return stack[0]
    }
    
}
