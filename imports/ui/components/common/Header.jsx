import React from 'react';

import { FlowRouter } from 'meteor/kadira:flow-router-ssr';

export const Header = ({ content }) => {
  return (
    <nav id="main-nav" className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <a className="navbar-brand" href="/"><i className="fa fa-money"></i></a>
        </div>


        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><a href="https://medium.com/welcome-to-thefamily/stay-focus-b5de376b1359"><i className="fa fa-fw fa-eye"></i> Stay Focus</a></li>
            <li><a href="http://hacklearnmake.com" target="_blank"><i className="fa fa-fw fa-cogs"></i> {'{Hack, Learn} = Make'}</a></li>
          </ul>
          { content === 'app'
              ? (<ul className="nav navbar-nav navbar-right">
                  <li><a onClick={() => { Meteor.logout(() => FlowRouter.go('/')); }}><i className="fa fa-fw fa-flash"></i> Log Out</a></li>
                </ul>)
              : "" }
        </div>

      </div>
    </nav>
  )
};