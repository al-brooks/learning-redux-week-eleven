import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes';

function Increment(props) {
  const handleIncrement = () => {
    props.onIncrement();
  };

  const handleDecrement = () => {
    props.onDecrement();
  };

  return (
    <div id="incrementDiv">
      <h2 id="incrementH2">Increment-Decrement Counter</h2>
      <button className="incrementBtn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="incrementBtn" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrement: () => dispatch({ type: actionTypes.DECREMENT })
  };
};

export default connect(null, mapDispatchToProps)(Increment);
