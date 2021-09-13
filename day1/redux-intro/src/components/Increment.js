import { connect } from 'react-redux';

function Increment(props) {
  const handleIncrement = () => {
    props.onIncrement();
  };

  const handleDecrement = () => {
    props.onDecrement();
  };

  return (
    <div>
      <h2>Increment-Decrement Counter</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
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
