import './App.css';
import Search from './components/search';
import CurrentWeather from './components/currentWeather';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <div className="container">
     <Search onSeaarchChange={handleOnSearchChange}/>
     <CurrentWeather />
    </div>
  );
}

export default App;
