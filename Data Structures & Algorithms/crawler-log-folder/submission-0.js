class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let operations = 0;

        for(let i=0; i<logs.length; i++) {
            if(logs[i][0] === ".") {
                if(logs[i][1] === "." && operations > 0) {
                    operations -= 1
                }
            } else {
                operations += 1
            }
        }

        return operations
    }
}
