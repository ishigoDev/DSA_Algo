function floydWarshall(graph) {
    let V = graph.length;

    for (let k = 0; k < V; k++) {

        for (let i = 0; i < V; i++) {

            for (let j = 0; j < V; j++) {

                // If vertex k is on the shortest path from
                // i to j, then update the value of graph[i][j]
                if ((graph[i][j] === -1 || 
                    graph[i][j] > (graph[i][k] + graph[k][j]))
                    && (graph[k][j] !== -1 && graph[i][k] !== -1))
                    graph[i][j] = graph[i][k] + graph[k][j];
            }
        }
    }
}


let graph = [
    [0, 4, -1, 5, -1],
    [-1, 0, 1, -1, 6],
    [2, -1, 0, 3, -1],
    [-1, -1, 1, 0, 2],
    [1, -1, -1, 4, 0]
];

floydWarshall(graph);

for (let i = 0; i < graph.length; i++) {
    console.log(graph[i].join(" "));
}


// Time Complexity: O(V3), where V is the number of vertices in the graph and we run three nested loops each of size V.
// Auxiliary Space: O(V2), to create a 2-D matrix in order to store the shortest distance for each pair of nodes.