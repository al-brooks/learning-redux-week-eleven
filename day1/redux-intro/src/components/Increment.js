import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/actionCreators';

function Increment(props) {
  return (
    <div id="incrementDiv">
      <h2 id="incrementH2">Increment-Decrement Counter</h2>
      <button className="incrementBtn" onClick={() => props.onIncrement()}>
        Increment
      </button>
      <button className="incrementBtn" onClick={() => props.onDecrement()}>
        Decrement
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(actionCreators.incrementCounter()),
    onDecrement: () => dispatch(actionCreators.decrementCounter())
  };
};

export default connect(null, mapDispatchToProps)(Increment);
