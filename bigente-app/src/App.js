import { useSelector } from 'react-redux';
import './App.css';
import '../src/components/CSS/Cardcontainer.css'
//import Card from './components/Card';
import Card2 from './components/Card2';
import Header from './components/Header';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const buttonName = useSelector(state => state.navbar);

  useEffect(() => {
    const subredditName = buttonName;
    const apiUrl = `https://www.reddit.com/r/${subredditName}.json`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(apiData => {
        setData(apiData)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [buttonName]);
  

  const cards = [];
  if (data) {
    for (let i = 0; i < data.data.children.length; i++) {
      const post = data.data.children[i];
      cards.push(
        <Card2
          key={i}
          title={post.data.title}
          subreddit={post.data.subreddit}
          score={post.data.score}
          selftext={post.data.selftext}
          thumbnail={post.data.thumbnail}
          permalink={post.data.permalink}
        />
      );
    }
  }

  return (
    <div>
      <Header />
      {data ? (
        <div className="cardscontainer"> 
          {cards}
        </div>
      ) : (
        <div>Cargando...</div>
      )
    }
      
    </div>
  );
}

export default App;
