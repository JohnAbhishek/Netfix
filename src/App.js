
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import {originals,Action,Horror, Comedy, Romance, Docu, Trending} from './urls'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost url={originals} title='netflix originals' />
     <RowPost url={Trending} title='Trend Yo Yo' isSmall/>
     <RowPost url={Action} title='Idi Padam' isSmall/>
     <RowPost url={Horror} title='Pretha padam' isSmall/>
     <RowPost url={Comedy} title='Chiri Padam' isSmall/>
     <RowPost url={Romance} title='Sneha Padam' isSmall/>
     <RowPost url={Docu} title='Award padamaan' isSmall/>
    </div>
  );
}

export default App;
