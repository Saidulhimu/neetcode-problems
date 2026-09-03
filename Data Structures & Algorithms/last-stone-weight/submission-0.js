class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();

        for (const stone of stones) {
            maxHeap.enqueue(stone);
        }

        while (maxHeap.size() > 1) {
            let first = maxHeap.dequeue();
            let second = maxHeap.dequeue();

            if (first !== second) {
                maxHeap.enqueue(first - second);
            }
        }

        return maxHeap.size() === 1 ? maxHeap.front() : 0;
    }
}