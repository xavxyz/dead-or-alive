import React from 'react';

export class MainLayout extends React.Component {
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
