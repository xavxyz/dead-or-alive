import { Component } from 'react';

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <main>
          {this.props.content}
        </main>
      </div>
    );
  }
};
