import React from 'react';
import IndexLink from 'react-router/lib/IndexLink';
import Link from 'react-router/lib/Link';

const Navigation = React.createClass({
  render() {
    return (
      <ul className="links">
        <li><IndexLink to="/">Home</IndexLink></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/dynamic/10">Dynamic 10</Link></li>
        <li><Link to="/dynamic/20">Dynamic 20</Link></li>
        <li><Link to="/dynamic/50">Dynamic 50</Link></li>
      </ul>
    );
  }
});

export default Navigation;
