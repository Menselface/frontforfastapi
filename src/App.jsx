import React, { useState, useEffect } from 'react';
import { Menu, Spin } from 'antd';
import axios from 'axios';
import CryptocurrencyCard from './components/CryptocurrencyCard';

function getItem(title, key, children, type) {
  return { title, key, children, type };
}


const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [currencyId, setCurrencyId] = useState(1);
  const [currencyData, setCurrencyData] = useState(null);

  const fetchCurrencies = () => {
    axios.get("http://127.0.0.1:8000/cryptocurrencies")
      .then(response => {
        const currencyData = response.data;

        const menuItems = currencyData.map(c => ({
          key: c.id.toString(),
          label: c.name // Используем свойство `name` для отображения имени криптовалюты
        }));

        setCurrencies([
          {
            label: "Новые монеты",
            key: "g1",
            children: menuItems,
            // type: 'group'
          }
        ]);
      })
      .catch(error => {
        console.error("Error fetching currencies:", error);
      });
  };

  const fetchCurrency = () => {
    axios.get(`http://127.0.0.1:8000/cryptocurrencies/${currencyId}`)
      .then(response => {
        setCurrencyData(response.data)

      })
    }


  useEffect(() => {
    fetchCurrencies();
  }, []);

  
  useEffect(() => {
    setCurrencyData(null)
    fetchCurrency();
  }, [currencyId]);


  const onClick = (e) => {
    setCurrencyId(e.key)
  };

  return (
    <div className="flex">
   

        <Menu
          onClick={onClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={currencies}
          className='h-screen overflow-scroll'
        />
        <div className='mx-auto my-auto'> 
        { currencyData ? <CryptocurrencyCard currency = {currencyData}/> : <Spin size='large'/>}
          
        </div>
        
        </div>

  );
};

export default App;