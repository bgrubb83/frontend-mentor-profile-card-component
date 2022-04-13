import Card from './components/Card'
import DecorationTop from './components/DecorationTop';
import DecorationBottom from './components/DecorationBottom';
import './App.css';

function App() {
  return (
    <>
      <DecorationTop />
      <div className='card-wrapper'>
        <Card />
      </div>
      <DecorationBottom />
    </>
  );
}

export default App;
