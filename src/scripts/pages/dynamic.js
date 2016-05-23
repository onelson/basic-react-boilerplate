import React, { PropTypes } from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/components/connect';

import ServerDataList from '../components/server-data-list';
import { ActionCreators, LayoutStyles } from '../state/actions';

function stateToProps(state) {
  return { layoutStyle: state.dynamicListLayout };
}

function dispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

const Dynamic = React.createClass({
  propTypes: {
    dynamicListLayoutChanged: PropTypes.func.isRequired,
    layoutStyle: PropTypes.string.isRequired,
    params: PropTypes.object.isRequired
  },
  handleUpdateLayout(layoutStyle) {
    return () => {
      if (this.props.layoutStyle !== layoutStyle) {
        this.props.dynamicListLayoutChanged(layoutStyle);
      }
    };
  },
  render() {
    const count = parseInt(this.props.params.itemCount, 10);
    return (
      <div>
        <h1>Dynamic Server Content</h1>
        <div>
          <label>Block Layout
            {' '}
            <input type="checkbox"
                   name="layout"
                   checked={this.props.layoutStyle === LayoutStyles.BLOCK}
                   onChange={this.handleUpdateLayout(LayoutStyles.BLOCK)}/>
          </label>
          <label>Flex Layout
            {' '}
            <input type="checkbox"
                   name="layout"
                   checked={this.props.layoutStyle === LayoutStyles.FLEX}
                   onChange={this.handleUpdateLayout(LayoutStyles.FLEX)}/>
          </label>
        </div>
        <ServerDataList layout={this.props.layoutStyle} itemCount={count}/>
    </div>);
  }
});

export default connect(stateToProps, dispatchToProps)(Dynamic);
