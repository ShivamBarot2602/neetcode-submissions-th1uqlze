class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let arr = new Array();

        for(let i=0; i<operations.length; i++) {
            if(operations[i] === "+") {
                arr.push(Number(arr[arr.length-1]) + Number(arr[arr.length-2]));
            } else if(operations[i] === "D") {
                arr.push(2*Number(arr[arr.length-1]));
            } else if(operations[i] === "C") {
                arr.pop();
            } else {
                arr.push(operations[i])
            }
        }

        let sum=0;
        for(let i=0; i<arr.length; i++) {
            sum += +arr[i]
        }

        return sum
    }
}
