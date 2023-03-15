import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.props.pageTitle}</title>
          <meta name="Descriere" content={this.props.descriere} />
          {/* Facebook tags */}
          <meta property="og:type" content={this.props.facebookType} />
          <meta property="og:url" content="www.webappdynamicx.ro" />
          <meta property="og:title" content={this.props.facebookTitle} />
          <meta
            property="og:description"
            content={this.props.facebookDescription}
          />
          <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />
          {/* End Facebook tags */}
          {/* Twitter tags */}
          <meta name="twitter:creator" content={this.props.twitterName} />
          <meta name="twitter:card" content={this.props.twitterType} />
          <meta name="twitter:title" content={this.props.twitterTitle} />
          <meta
            name="twitter:description"
            content={this.props.twitterDescription}
          />
          {/* End Twitter tags */}
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
