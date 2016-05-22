import React, { PropTypes } from 'react';

import ServerDataList from '../components/server-data-list';

const Dynamic = React.createClass({
  propTypes: {
    params: PropTypes.object.isRequired
  },
  render() {
    const count = parseInt(this.props.params.itemCount, 10);
    return (
      <div>
        <h1>Dynamic Server Content</h1>
        <ServerDataList itemCount={count}/>
    </div>);
  }
});

export default Dynamic;
