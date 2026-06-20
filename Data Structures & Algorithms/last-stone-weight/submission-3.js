class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    // lastStoneWeight(stones) {
    //     let heap = new MaxPriorityQueue();

    //     for(let stone of stones) {
    //         heap.enqueue(stone)
    //     }

    //     while(heap.size() > 1) {
    //         let x = heap.dequeue();
    //         let y = heap.dequeue();

    //         if(x - y > 0) {
    //             heap.enqueue(x-y)
    //         }
    //     }

    //     return heap.size() === 0 ? 0 : heap.front()
    // }

    lastStoneWeight(stones) {
        let heap = new MaxPriorityQueue();

        for(const stone of stones) {
            heap.enqueue(stone);
        }

        while(heap.size() > 1) {
            let first = heap.dequeue();
            let second = heap.dequeue();

            if(first !== second) {
                heap.enqueue(first-second);
            }
        }

        return heap.size() === 0 ? 0 : heap.front()
    }
}
