import './App.css';
import { Decommas, ChainName} from '@decommas/sdk';
function App() {
  const API_KEY = "43a10f82bed5dbc25c4a21012a083281203d05e9";

  const decommas = new Decommas(API_KEY);  

  const getVitalikERC20Balances = async () => {

    const address = '0xEE012490079F057aE1d9E46b6dCad404276c828F'; // any address

    const tokens = await decommas.address.getTokens({ address });
    console.log(tokens);
  };

  return (
    <>
      <h1>hello world</h1>
      <button onClick={async ()=>  await getVitalikERC20Balances()}>prueva</button>
      <input placeholder='address' name='address'/>
      
      
  </>


  );
}

export default App;
