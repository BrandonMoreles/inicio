
import Carousel from './components/Carousel';
import Header from './components/Header';
import News from './components/News';
import "../src/styles/principal.css"
function App() {
  return (
    <div className='principal'>
      <Header/>
      <Carousel/>
      <News/>
    </div>
  );
}

export default App;
