import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import Iframe from 'react-iframe';

const iframe =
  '<iframe src="https://developer.mozilla.org/en-US/docs/Glossary" width="540" height="450"></iframe>';

class ProjectsPage extends React.Component {
  iframe = () => {
    return {
      __html: this.props.iframe,
    };
  };

  render() {
    return (
      <div>
        <Iframe
          url="https://www.fip.fr/player/tout-nouveau-tout-fip"
          width="450px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    );
  }
}

export default ProjectsPage;
