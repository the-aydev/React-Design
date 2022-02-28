import { Motion, spring } from 'react-motion';

const Motionx = () => (
  <Motion
    defaultStyle={{ opacity: 0.01 }}
    style={{ opacity: spring(1) }}
  >
    <h1 style={interpolatingStyle}>Hello, React!</h1>
  </Motion>
);

export default Motionx;