let parent = [];
let rank = [];

const intialize = (N) => {
    parent = new Array(N);
    rank = new Array(N).fill(0);
    for (let i = 0; i < N; i++) {
        parent[i] = i;
    }
}

const find = (x) => {
    if (parent[x] != x) {
        // Path compression 
        parent[x] = find(parent[x]);
    }
    return parent[x];
}

const union = (x, y) => {
    let xRoot = find(x), yRoot = find(y);
    if (xRoot === yRoot) {
        return;
    }
    //swapping based on ranks
    if (rank[xRoot] < rank[yRoot]) {
        parent[xRoot] = yRoot;
    } else if (rank[yRoot] < rank[xRoot]) {
        parent[yRoot] = xRoot;
    } else {
        parent[yRoot] = xRoot;
        rank[xRoot] = rank[xRoot] + 1;
    }
}



intialize(5);

find(3)

union(1, 4)

console.log(parent, rank);

/**
 * *Time Complexity : O(n)
 * *Space complexity : O(n)
 */

/**
 * Use Cases :
 * *  Krushal's Minimum Spanning Tree algorithm
 * * Image Processing
 * * Cycle Detection in Graph
 */