import { useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [listOfCoins, setListOfCoins] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en';

  useEffect(() => {
    axios.get(url).then((response) => {
        setListOfCoins(response.data);
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
    

  }, []);

  return (
    
    <div>
      {/* <div>
        {listOfCoins.map((coin) => {
          <h1>{coin.name}</h1>;
        })}
      </div> */}
    </div>
  );
}

export default App;
