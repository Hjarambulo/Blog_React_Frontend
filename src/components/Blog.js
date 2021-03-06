import React, { Component } from "react";
import axios from "axios";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Blog extends Component {
  render() {
    return (
      <div id="blog">
        <Slider title="Blog" size="slider-small" />
        <div className="center">
          <div id="content">
            {/* listado de articulos que vendran del api */}
            <Articles />
          </div>
          <Sidebar blog="true" />
        </div>
      </div>
    );
  }
}
export default Blog;
