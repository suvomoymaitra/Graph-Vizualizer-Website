import React from 'react';
import './style.css';
import { Button} from 'react-bootstrap';


export default function DFSR() {
  return(<>
   <body>
    <div class="head">
    <h1><u>Depth First Search (DFS)</u></h1>
    </div>
    <div class = "theory">
      <div class ="overview">
    <h2><strong><u>Overview</u></strong> </h2><br />
    <p>DFS is the most fundamental kind of algorithm we can use to explore the nodes and edges of a graph.
        It’s a form of traversal algorithm. The first and foremost fact about DFS is its engineering simplicity
        and understandability. DFS runs with a time complexity of O(V + E) where O stands for Big O, V for
        vertices and E for edges. Still, it’s coherence could be leveraged to other different applications
        such as detecting bridges and articulation points, counting connected components and estimating 
        the connectivity.</p><br />
        <p>The DFS algorithm is a recursive algorithm that uses the idea of backtracking. It involves exhaustive searches of all the nodes by going ahead, if possible, else by backtracking.</p><br />
<p>Here, the word backtrack means that when you are moving forward and there are no more nodes along the current path, you move backwards on the same path to find nodes to traverse. All the nodes will be visited on the current path till all the unvisited nodes have been traversed after which the next path will be selected.</p><br />
<p>This recursive nature of DFS can be implemented using stacks. The basic idea is as follows:<br />
<ol>
<li>Pick a starting node and push all its adjacent nodes into a stack.<br /></li>
<li>Pop a node from stack to select the next node to visit and push all its adjacent nodes into a stack.</li>
</ol>

Repeat this process until the stack is empty. However, ensure that the nodes that are visited are marked. This will prevent you from visiting the same node more than once. If you do not mark the nodes that are visited and you visit the same node more than once, you may end up in an infinite loop. </p><br />

</div>
<div class ="image_dfs">
<h2><strong><u>Working of DFS</u></strong> </h2><br />

<img alt="enter image description here" src='/images/dfs_working.jpg' /><p></p><br/>
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
<h2><strong><u>Application of DFS</u></strong> </h2><br/>

<ol>
<li><strong>Detecting cycle in a graph :</strong> A graph has cycle if and only if we see a back edge during DFS. So we can run DFS for the graph and check for back edges. </li>
<li><strong>Topological Sorting :</strong>Topological Sorting is mainly used for scheduling jobs from the given dependencies among jobs. In computer science, applications of this type arise in instruction scheduling, ordering of formula cell evaluation when recomputing formula values in spreadsheets, logic synthesis, determining the order of compilation tasks to perform in makefiles, data serialization, and resolving symbol dependencies in linkers.</li>
<li><strong> To test if a graph is bipartite :</strong> We can augment either BFS or DFS when we first discover a new vertex, color it opposited its parents, and for each other edge, check it doesn’t link two vertices of the same color.</li>
<li><strong>Finding Strongly Connected Components of a graph:</strong> A directed graph is called strongly connected if there is a path from each vertex in the graph to every other vertex. </li>
<li><strong>Solving puzzles with only one solution</strong> </li>
</ol><br/>

<a href="https://suvomoymaitra.github.io/dfsinput/">Visualize</a>
</div>
    </div>
    </body>
  </>);
}