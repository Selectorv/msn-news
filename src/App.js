import React, {useState, useEffect} from 'react';
import Menu from './Components/Menu'
import NewsGrid from './Components/NewsGrid'


function App() {

  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [category, setCategory] = useState ("general")
  

  useEffect(() => {
    fetch(` https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=3e032a9e100f432f9b207bc608d2b071 `)
    .then(res => res.json())
    .then(data => setItems(data.articles))
  }, [category])
  return (
    <div className="App">
      <h1 className='title'><span>M</span>SN <span>N</span>EWS</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
      
      
     
    </div>
  );
}

export default App;
