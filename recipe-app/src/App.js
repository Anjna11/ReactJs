import { useState } from 'react';
import './App.css';
import List from './List';

function App() {
  
  const [item, setItem] = useState(null);
  const [itemList, updateItemList] = useState([]);

  const changehandler = (e) => {
    setItem(e.target.value)
  };

  const addItemList = () => {
    updateItemList([...itemList, {item:item, key:Date.now()}]);
    setItem("");
  };

  return (
    <div className='container'>
      <div className='top-bar'> 
        <input placeholder='Enter todo....' value={item} onChange={changehandler}/>
        <button onClick={addItemList}>+</button>
      </div>
      <hr/>
      <List itemList={itemList} updateItemList={updateItemList} />
    </div>
  );
}

export default App;
