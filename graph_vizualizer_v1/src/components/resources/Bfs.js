import React from 'react';
import './style.css';

export default function BFSR() {
  return(<>
  <body>
    <div class="head">
    <h1><u>Breadth First Search (BFS)</u></h1>
    </div>
    <div class = "theory">
      <div class ="overview">
    <h2><strong><u>Overview</u></strong> </h2><br />
    <p>There are many ways to traverse graphs. BFS is the most commonly used approach.  </p>
<p>Breadth first search is a graph traversal algorithm that starts traversing the graph from root node and explores all the neighbouring nodes. Then, it selects the nearest node and explore all the unexplored nodes. The algorithm follows the same process for each of the nearest node until it finds the goal.</p>
<p>As the name BFS suggests, you are required to traverse the graph breadthwise as follows:</p>
<ol>
<li>First move horizontally and visit all the nodes of the current layer</li>
<li>Move to the next layer</li>
</ol>
</div>
<div class ="image_bfs">
<h2><strong><u>Working of BFS</u></strong> </h2><br />

<img alt="enter image description here" src='/images/bfs_working.jpg' /><p></p><br/>
</div>
<div class ="img_exp">
<p>The traversing will start from the source node and push <em>s</em> in queue. <em>s</em> will be marked as 'visited'.  </p><br/>
<h4><em>First iteration</em></h4>
<ul>
<li>s will be popped from the queue </li>
<li>Neighbors of s i.e. 1 and 2 will be traversed</li>
<li>1 and 2, which have not been traversed earlier, are traversed. They will be:<ul>
<li>Pushed in the queue</li>
<li>1 and 2 will be marked as visited</li>
</ul>
</li>
</ul><br/>
<h4><em>Second iteration</em></h4>
<ul>
<li>1 is popped from the queue</li>
<li>Neighbors of 1 i.e. s and 3 are traversed</li>
<li>s is ignored because it is marked as 'visited'</li>
<li>3, which has not been traversed earlier, is traversed. It is:<ul>
<li>Pushed in the queue</li>
<li>Marked as visited</li>
</ul>
</li>
</ul><br/>
<h4><em>Third iteration</em></h4>
<ul>
<li>2 is popped from the queue</li>
<li>Neighbors of 2 i.e. s, 3, and 4 are traversed</li>
<li>3 and s are ignored because they are marked as 'visited'</li>
<li>4, which has not been traversed earlier, is traversed. It is:<ul>
<li>Pushed in the queue</li>
<li>Marked as visited</li>
</ul>
</li>
</ul><br/>
<h4><em>Fourth iteration</em></h4>
<ul>
<li>3 is popped from the queue</li>
<li>Neighbors of 3 i.e. 1, 2, and 5 are traversed</li>
<li>1 and 2 are ignored because they are marked as 'visited'</li>
<li>5, which has not been traversed earlier, is traversed. It is:<ul>
<li>Pushed in the queue</li>
<li>Marked as visited</li>
</ul>
</li>
</ul><br/>
<h4><em>Fifth iteration</em></h4>
<ul>
<li>4 will be popped from the queue</li>
<li>Neighbors of 4 i.e. 2 is traversed</li>
<li>2 is ignored because it is already marked as 'visited'</li>
</ul><br/>
<h4><em>Sixth iteration</em></h4>
<ul>
<li>5 is popped from the queue</li>
<li>Neighbors of 5 i.e. 3 is traversed</li>
<li>3 is ignored because it is already marked as 'visited'</li>
</ul><br/>
<p>The queue is empty and it comes out of the loop.  All the nodes have been traversed by using BFS.</p><br/>
<p>If all the edges in a graph are of the same weight, then BFS can also be used to find the minimum distance between the nodes in a graph.</p><br/>
</div>
<div class ="pseudocode">
<h2><strong><u>Pseudocode</u></strong> </h2><br/>

<p></p><pre class="pseudocode"><code>
      DFS-iterative (G, s):                                   //Where G is graph and s is source vertex <br/>
      let S be stack
      S.push( s )            //Inserting s in stack <br/>
      mark s as visited.<br/>
      while ( S is not empty):<br/>
          //Pop a vertex from stack to visit next<br/>
          v  =  S.top( )<br/>
         S.pop( )<br/>
         //Push all the neighbours of v in stack that are not visited<br/>  
        for all neighbours w of v in Graph G:<br/>
            if w is not visited :<br/>
                     S.push( w )  <br/>       
                    mark w as visited<br/>


    DFS-recursive(G, s):<br/>
        mark s as visited<br/>
        for all neighbours w of s in Graph G:<br/>
            if w is not visited:<br/>
                DFS-recursive(G, w)<br/>
</code></pre><br/></div>
<div class ="application">
<h2><strong><u>Application of BFS</u></strong> </h2><br/>

<ol>
<li><strong>Un-weighted Graphs:</strong> BFS algorithm can easily create the shortest path and a minimum spanning tree to visit all the vertices of the graph in the shortest time possible with high accuracy.</li>
<li><strong>P2P Networks:</strong> BFS can be implemented to locate all the nearest or neighboring nodes in a peer to peer network. This will find the required data faster.</li>
<li><strong>Web Crawlers:</strong> Search engines or web crawlers can easily build multiple levels of indexes by employing BFS. BFS implementation starts from the source, which is the web page, and then it visits all the links from that source.</li>
<li><strong>Navigation Systems:</strong> BFS can help find all the neighboring locations from the main or source location.</li>
<li><strong>Network Broadcasting:</strong> A broadcasted packet is guided by the BFS algorithm to find and reach all the nodes it has the address for.</li>
</ol><br/>
<a href="https://suvomoymaitra.github.io/bfsinput/">Visualize</a>
</div>
    </div>
    </body>
  </>);
}