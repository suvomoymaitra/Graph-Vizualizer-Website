import React from 'react';
import './CardsV.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.png'
              text='DEPTH FIRST SEARCH'
              label='DFS'
              path='/visualizer/dfs'
            />
            <a href='https://suvomoymaitra.github.io/dfs/'>Visualize</a>
            <CardItem
              src='images/img-2.png'
              text='BREADTH FIRST SEARCH'
              label='BFS'
              path='/visualizer/bfs'
            />
            <a href='https://suvomoymaitra.github.io/bfs/'>Visualize</a>
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.png'
              text='DIJKSTRA SHORTEST PATH ALGORITHM'
              label='Dijkstra'
              path='/visualizer/dijkstra'
            />
            <CardItem
              src='images/img-4.jpeg'
              text='FLOYD WARSHALL ALGORITHM'
              label='Floyd'
              path='/visualizer/floyd'
            />
            <CardItem
              src='images/img-8.jpeg'
              text='BELLMAN FORD ALGORITHM'
              label='Bellman Ford'
              path='/visualizer/bellman'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
