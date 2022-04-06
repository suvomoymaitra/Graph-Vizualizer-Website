import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Visualizer from './components/pages/Visualizer';
import Resources from './components/pages/Resources';
import Login from './components/pages/Login';


import DfsR from './components/resources/Dfs';
import BfsR from './components/resources/Bfs';
import DijkstraR from './components/resources/Dijkstra';
import FloydR from './components/resources/Floyd';
import BellmanR from './components/resources/Bellman';


import DfsV from './components/visualizer/Dfs';
import BfsV from './components/visualizer/Bfs';
import DijkstraV from './components/visualizer/Dijkstra';
import FloydV from './components/visualizer/Floyd';
import BellmanV from './components/visualizer/Bellman';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* Resources */}
          <Route path='/resources/dfs' component={DfsR} />
          <Route path='/resources/bfs' component={BfsR} />
          <Route path='/resources/dijkstra' component={DijkstraR} />
          <Route path='/resources/bellman' component={BellmanR} />
          <Route path='/resources/floyd' component={FloydR} />
          <Route path='/resources' component={Resources} />

          {/* visualizer */}
          <Route path='/visualizer/dfs' component={DfsV} />
          <Route path='/visualizer/bfs' component={BfsV} />
          <Route path='/visualizer/dijkstra' component={DijkstraV} />
          <Route path='/visualizer/bellman' component={BellmanV} />
          <Route path='/visualizer/floyd' component={FloydV} />
          <Route path='/visualizer' component={Visualizer} />
          
          <Route path='/signup' component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/home' component={Home}/>
          <Route path='/' exact component={Home} />

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
