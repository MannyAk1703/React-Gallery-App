import React, { Component } from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";

class PhotoContainer extends Component {
  //Specific URL for each image
  createUrl = (server, id, secret) => {
    return `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
  };

  // Renders picture into container using map function
  render() {
    const results = this.props.data;

    if (results.length > 0) {
      return (
        <div className="photo-container">
          <p>{this.props.title} results </p>
          {/* Creates a list item for each image and adds a key and title */}
          <ul>
            {this.props.data.map((photo) => (
              <Photo
                url={this.createUrl(photo.server, photo.id, photo.secret)}
                key={photo.id}
                alt={photo.title}
              />
            ))}
          </ul>
        </div>
      );
    } else {
      //If no search found
      return (
        <div className="photo-container">
          <NotFound />
        </div>
      );
    }
  }
}

export default PhotoContainer;
