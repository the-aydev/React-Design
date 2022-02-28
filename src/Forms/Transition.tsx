import CSSTransitionGroup from 'react-addons-css-transition-group';

const Transition = () => (
  <CSSTransitionGroup
    transitionName="fade"
    transitionAppear
    transitionAppearTimeout={500}
  >
    <h1>Hello, world!</h1>
  </CSSTransitionGroup>
);

export default Transition;