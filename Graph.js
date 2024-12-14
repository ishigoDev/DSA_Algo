class Graph {
    constructor(v) {
        this.V = v;
        this.adj = new Array(v);
        for (let i = 0; i < v; i++) {
            this.adj[i] = [];
        }
    }
    addEdge(v, w) {
        this.adj[v].push(w);
    }
    print() {
        console.log(this.adj);
    }
    bfs(s, dist, pred) {
        let visited = new Array(this.V).fill(false);
        let queue = [];
        visited[s] = true;
        queue.push(s);
        while (queue.length !== 0) {
            s = queue[0];
            console.log(s + " ");
            let cur = queue.shift();
            for (let i = 0; i < this.adj[cur].length; i++) {
                let neighbour = this.adj[cur][i];
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    dist[neighbour] = dist[cur] + 1;
                    pred[neighbour] = cur;
                    queue.push(neighbour);
                }
                if (neighbour == dist) {
                    console.log('true', dist, neighbour)
                    return true;
                }
            }
        }


        return false;
    }
    depthFirstSearchUtil(v, visited) {
        visited[v] = true;
        for (let i of this.adj[v]) {
            let n = i
            if (!visited[n])
                this.dfsUtil(n, visited);
        }
    }
    // Dept First Search is used for exploring or traversing graph or tree structures, solving problems like pathfinding, cycle detection, topological sorting, connected components, puzzle solving, and analyzing network reliability.
    depthFirstSearch(v) {
        let visited = new Array(this.V).fill(false);
        this.depthFirstSearchUtil(v, visited)
    }
    
    isCyclicUtil(v, visited, parent) {
        visited[v] = true;
        for (let i of this.adj[v]) {

            if (!visited[i]) {
                if (this.isCyclicUtil(i, visited, v)) return true;
            } else if (parent !== i) {
                return true;
            }
        }

    }
    isCyclic() {
        let visited = new Array(this.V).fill(false);
        for (let i = 0; i < this.V; i++) {
            if (!visited[i])
                if (this.isCyclicUtil(i, visited, -1)) return true
        }
        return false;
    }
    isCyclicDirectedUtil(v, visited, recS) {
        visited[v] = true;
        recS[v] = true;
        for (let i of this.adj[v]) {
            if (!visited[i]) {
                if (this.isCyclicDirectedUtil(i, visited, recS)) return true;
            } else if (recS[i]) {
                return true;
            }
        }
        recS[v] = false;
        return false;
    }
    isCyclicDirected() {
        let visited = new Array(this.V).fill(false);
        let recS = new Array(this.V).fill(false);
        for (let i = 0; i < this.V; i++) {
            if (!visited[i])
                if (this.isCyclicDirectedUtil(i, visited, recS)) return true
        }
    }
    topologicalutil(v, visited, stack) {
        visited[v] = true;
        for (let i of this.adj[v]) {
            if (!visited[i]) {
                if (this.topologicalutil(i, visited, stack)) return true;
            }
        }
        stack.push(v);
    }
    topological() {
        let visited = new Array(this.V).fill(false);
        let stack = [];
        for (let i = 0; i < this.V; i++) {
            if (!visited[i])
                this.topologicalutil(i, visited, stack)
        }
        if (stack.length !== 0)
            console.log('topogical ', stack)
    }
    kahn() {
        let inDeg = new Array(this.V).fill(0);
        for (let i = 0; i < this.V; i++) {
            for (let j = 0; j <= this.adj[i].length - 1; j++) {
                inDeg[this.adj[i][j]]++;
            }
        }
        let ans = [];
        this.bfsKahn(ans, inDeg);

        return ans
    }
    bfsKahn(ans, inDeg) {
        let que = [];
        for (let i = 0; i < this.V; i++) {
            if (inDeg[i] == 0) {
                que.push(i);
            }
        }
        while (que.length != 0) {
            let u = que.shift();
            ans.push(u);
            for (let node = 0; node < this.adj[u].length; node++) {
                if (--inDeg[this.adj[u][node]] == 0)
                    que.push(this.adj[u][node]);
            }
        }

    }


}

// This graph is in maxtrix [ [ 1, 2 ], [ 2 ], [ 0, 1 ], [ 3 ] ]

var graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 1);
graph.addEdge(3, 3);
graph.print();
graph.depthFirstSearch(2);