import './App.css';
import { Stars } from './components/Stars.jsx';

function App() {
  
  return (
    <div>
      <div> Рейтинг: 0
        < Stars count={0} />
      </div>
      <div> Рейтинг: 1
        < Stars count={1} />
      </div>
      <div> Рейтинг: 3
        < Stars count={3} />
      </div>
      <div> Рейтинг: 3.7
        < Stars count={3.7} />
      </div>
      <div> Рейтинг: 5
        < Stars count={5} />
      </div>
      <div> Рейтинг: 8
        < Stars count={8} />
      </div>
      <div> Рейтинг: Текст
        < Stars count={'Текст'} />
      </div>
    </div>
  )
}

export default App;