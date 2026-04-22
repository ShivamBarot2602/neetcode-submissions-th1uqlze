class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = new Array();

        for(let i=0; i<asteroids.length; i++) {
            while(asteroids[i] < 0 && stack[stack.length-1] > 0) {
                let diff = asteroids[i] + stack[stack.length-1];
                if(diff < 0) {
                    stack.pop();
                } else if(diff > 0) {
                    asteroids[i] = 0;
                } else { // case when both are equal
                    asteroids[i] = 0; 
                    stack.pop();
                }
            }

            if(asteroids[i] !== 0) {
                stack.push(asteroids[i]);
            }
        }

        return stack
    }
}
