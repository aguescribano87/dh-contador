import { Button, InputNumber, Calendar, FullCalendar } from '@oneloop/jopijs';
import './App.css';
import Contador from './components/Contador';
//import {InputNumber} from '@oneloop/input-number'

function App() {

  return (
    <div className="App">
      <Contador />
      <InputNumber
        text='Minutes before'
      />
      <Button variant={['primary', 'large']}>{'Label'}</Button>
      <FullCalendar variant={'days'} />
    </div>
  );
}
// prueba

export default App;
