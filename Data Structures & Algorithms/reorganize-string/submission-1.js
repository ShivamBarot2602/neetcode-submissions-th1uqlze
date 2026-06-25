class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        let map = new Map();
        for(let str of s) {
            map.set(str, (map.get(str) || 0) + 1);
        }

        let maxHeap = new PriorityQueue((a, b) => 
                    a[0] === b[0] ? b[1] - a[1] : b[0] - a[0]);
        
        for(let [key, value] of map) {
            maxHeap.enqueue([value, key]);
        }

        let queue = new Queue();
        let i=0;
        let str="";

        while(queue.size() > 0 || maxHeap.size() > 0) {
            if(maxHeap.size() > 0) {
                let [value, key] = maxHeap.dequeue();
               
                if(str[str.length-1] === key) {
                    str = ""
                    break;
                }
                str += key
                if(value - 1 !== 0) {
                    queue.enqueue([value-1, key, i+1]);
                }
            }
            
            if(queue.size() > 0 && queue.front()[2] === i) {
                let [value, key] = queue.dequeue();
                maxHeap.enqueue([value, key])
            }

            i+=1;
        }

        return str;
    }
}
