import { connect } from 'react-redux';
import { useState } from 'react';

function AddSub(props) {
  let [value, setValue] = useState(0);

  const handleOnChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  const handleAdd = () => {
    props.onAdd(value);
  };

  const handleSub = () => {
    props.onSub(value);
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
      <button className="addSubBtn" onClick={handleAdd}>
        Add
      </button>
      <button className="addSubBtn" onClick={handleSub}>
        Subtract
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (value) => {
      dispatch({ type: 'ADD', payload: value });
    },
    onSub: (value) => {
      dispatch({ type: 'SUB', payload: value });
    }
  };
};

export default connect(null, mapDispatchToProps)(AddSub);
