import './App.css';
import { connect } from 'react-redux';
import Increment from './Increment';
import AddSub from './AddSub';
import DisplayCount from './DisplayCount';

function App(props) {
  return (
    <div>
      <h1>App</h1>
      <span>count: {props.count}</span>
      <Increment />
      <AddSub />
      <DisplayCount />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
