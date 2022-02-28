import Uncontrolled from '../Forms/Uncontrolled';
import Controlled from '../Forms/Controlled';
import Button from '../Forms/Button';
import Focus from '../Forms/Focus';
import Transition from '../Forms/Transition';
// import Motionx from '../Forms/Motion';
import Circle from '../Forms/Circle';
import RedCircle from '../Forms/RedCircle';

function App() {
  return (
    <div className="App">
      <Uncontrolled />
      <Controlled />
      <Button />
      <Focus />
      <Transition />
      {/* <Motionx /> */}
      <Circle x={40} y={40} radius={40} fill="blue" />
      <RedCircle x={40} y={40} radius={40} />
    </div>
  );
}

export default App;