
let V;
let adj;

function Graph( v)
{
		V = v;
		adj = new Array(v);
		for (let i = 0; i < v; ++i)
			adj[i] = [];
}


function addEdge(v,w)
{
	adj[v].push(w);
}

function isReachable(s,d)
{
	let temp;

	
		let visited = new Array(V);
		for(let i = 0; i < V; i++)
			visited[i] = false;
		
		let queue = [];

	
		visited[s] = true;
		queue.push(s);

		while (queue.length != 0)
		{
		
			n = queue.shift();
			
			if(n == d)
				return true;
			for(let i = 0; i < adj[n].length; i++)
			{
				if (visited[adj[n][i]] == false)
				{
					queue.push(adj[n][i]);
					visited[adj[n][i]] = true;
				}
			}
			
		}

		return false;
}

// Driver method
Graph(4);
addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 2);
addEdge(2, 0);
addEdge(2, 3);
addEdge(3, 3);

let u = 1;
let v = 3;

if (isReachable(u, v))
	console.log("There is a path from " + u +" to " + v+"<br>");
else
console.log("There is no path from " + u +" to " + v+"<br>");

u = 3;
v = 1;
if (isReachable(u, v))
console.log("There is a path from " + u +" to " + v+"<br>");
else
console.log("There is no path from " + u +" to " + v+"<br>");
module.exports={Graph,addEdge,isReachable}

