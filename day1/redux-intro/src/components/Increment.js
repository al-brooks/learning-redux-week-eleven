import { connect } from 'react-redux';

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
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' })
  };
};

export default connect(null, mapDispatchToProps)(Increment);
