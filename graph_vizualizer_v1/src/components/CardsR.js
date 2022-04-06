import React from 'react';
import './CardsR.css';
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
              path='/resources/dfs'
            />
            <CardItem
              src='images/img-2.png'
              text='BREADTH FIRST SEARCH'
              label='BFS'
              path='/resources/bfs'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.png'
              text='DIJKSTRA SHORTEST PATH ALGORITHM'
              label='Dijkstra'
              path='/resources/dijkstra'
            />
            <CardItem
              src='images/img-4.jpeg'
              text='FLOYD WARSHALL ALGORITHM'
              label='Floyd'
              path='/resources/floyd'
            />
            <CardItem
              src='images/img-8.jpeg'
              text='BELLMAN FORD ALGORITHM'
              label='Bellman Ford'
              path='/resources/bellman'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
