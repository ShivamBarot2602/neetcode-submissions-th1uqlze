class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */
    longestDiverseString(a, b, c) {
        let maxHeap = new MaxPriorityQueue(a => a[0]);
        let res = "";

        if(a > 0) maxHeap.enqueue([a, 'a']);
        if(b > 0) maxHeap.enqueue([b, 'b']);
        if(c > 0) maxHeap.enqueue([c, 'c']);

        while(maxHeap.size() > 0) {
            let [count, char] = maxHeap.dequeue();
            if(res.length > 1 && res[res.length-1] === char && res[res.length-2] === char) {
                if(maxHeap.isEmpty()) {
                    break;
                }
                let [count2, char2] = maxHeap.dequeue();
                res += char2;
                count2 -= 1;
                if(count2 > 0) {
                    maxHeap.enqueue([count2, char2]);
                }
            } else {
                res += char;
                count -= 1;
            }
            if(count > 0) {
                maxHeap.enqueue([count, char]);
            }
        }

        return res
    }
}
