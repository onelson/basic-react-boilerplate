import React, { PropTypes } from 'react';
import request from 'superagent';

import { LayoutStyles } from '../state/actions';

const { SERVER_ROOT } = global.settings;

const ServerDataList = React.createClass({
  propTypes: {
    itemCount: PropTypes.number.isRequired,
    layout: PropTypes.string
  },
  getDefaultProps() {
    return { itemCount: 0 };
  },
  getInitialState() {
    return {
      serverError: false,
      fetching: false,
      items: []
    };
  },
  componentWillMount() {
    if (!this.state.fetching) {
      const { itemCount } = this.props;
      this.fetchItems(itemCount);
    }
  },
  componentWillReceiveProps(nextProps) {
    if (!this.state.fetching) {
      this.fetchItems(nextProps.itemCount);
    }
  },
  fetchItems(count) {
    this.setState({ fetching: true });
    if (count <= 0) {
      this.setState({
        fetching: false,
        items: []
      });
    }
    else {
      request.get(`${SERVER_ROOT}/items`)
          .query({ limit: count })
          .end((err, resp) => {
            if (err || !resp.ok) {
              console.log(err);
              this.setState({
                fetching: false,
                serverError: true,
                items: []
              });
            }
            else {
              this.setState({
                items: resp.body.items,
                fetching: false,
                serverError: false
              });
            }
          });
    }
  },
  render() {
    if (this.state.serverError) {
      return (<h3>Server Error?</h3>);
    }

    if (this.state.fetching) {
      return (<p>Fetching data...</p>);
    }

    if (this.state.items.length === 0) {
      return (<p>No items to show.</p>);
    }

    const layoutClass = this.props.layout === LayoutStyles.FLEX ? 'flex' : '';

    return (
      <div className={`server-data-list ${layoutClass}`}>
        <h4>Wow, ok so here's some server data. Probably about {this.state.items.length} of them.</h4>
        <ul>
          {this.state.items.map((word, idx) => <li key={idx}>{word}</li>)}
        </ul>
      </div>
    );
  }
});

export default ServerDataList;
