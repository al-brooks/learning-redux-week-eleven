import { connect } from 'react-redux';

function DisplayCount(props) {
  return (
    <div id="displayDiv">
      <h2 id="displayH2">{props.count}</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(DisplayCount);
