import { connect } from 'react-redux';

function DisplayCount(props) {
  return (
    <div>
      <h2>{props.count}</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(DisplayCount);
