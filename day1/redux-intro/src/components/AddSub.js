import { connect } from 'react-redux';
import { useState } from 'react';
import * as actionCreators from '../store/actions/actionCreators';

function AddSub(props) {
  let [value, setValue] = useState(0);

  const handleOnChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <div id="addSubDiv">
      <h2 id="addSubH2">Add-Subtract Counter</h2>
      <input
        id="addSubInput"
        type="text"
        placeholder="Enter Number"
        onChange={handleOnChange}
      />
      <button className="addSubBtn" onClick={() => props.onAdd(value)}>
        Add
      </button>
      <button className="addSubBtn" onClick={() => props.onSub(value)}>
        Subtract
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (value) => {
      dispatch(actionCreators.addValue(value));
    },
    onSub: (value) => {
      dispatch(actionCreators.subValue(value));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddSub);
