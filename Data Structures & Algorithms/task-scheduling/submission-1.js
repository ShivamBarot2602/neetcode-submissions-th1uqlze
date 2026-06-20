class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    // leastInterval(tasks, n) {
    //     let map = new Map();
    //     let maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);

    //     for(const task of tasks) {
    //         map.set(task, (map.get(task) || 0) + 1);
    //     }

    //     for(const [key, value] of map) {
    //         maxHeap.push([value, key])
    //     }

    //     let queue = new Queue();
    //     let time = 0;

    //     while(maxHeap.size() > 0 || queue.size() > 0) {
    //         time++;

    //         if(maxHeap.size() > 0) {
    //             let cnt = maxHeap.pop();
    //             if(cnt[0]-1 !== 0) {
    //                 queue.push([cnt[1], time+n, cnt[0]-1]);
    //             }
    //         }

    //         if(queue.size() > 0 && queue.front()[1] === time) {
    //             let item = queue.pop();
    //             maxHeap.enqueue([item[2], item[0]])
    //         }
    //     }

    //     return time
    // }

    leastInterval(tasks, n) {
        let map = new Map();
        let heap = new PriorityQueue((a, b) => b[0] - a[0]);
        let queue = new Queue();

        for(let task of tasks) {
            map.set(task, (map.get(task) || 0) + 1);
        }

        for(const [key, value] of map) {
            heap.enqueue([value, key])
        }

        let time = 0;
        while(heap.size() > 0 || queue.size() > 0) {
            time += 1;

            if(heap.size() > 0) {
                let curr = heap.dequeue();
                if(curr[0] - 1 !== 0) {
                    queue.enqueue([curr[1], time + n, curr[0] - 1])
                }
            }

            if(queue.size() > 0 && queue.front()[1] === time) {
                let item = queue.pop();
                heap.enqueue([item[2], item[0]])
            }
        }

        return time
    }
}
