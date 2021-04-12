import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import Nav from "./Components/Nav";
import SearchForm from "./Components/SearchForm";
import PhotoContainer from "./Components/PhotoContainer";
import PageNotFound from "./Components/PageNotFound";
import apiKey from "./config";

//All major components rendered here
export default class App extends Component {
  constructor() {
    //states defined
    super();
    this.state = {
      photos: [],
      superman: [],
      marvel: [],
      sports: [],
      api: apiKey,
    };
  }

  componentDidMount() {
    this.photoSearch();
    //this fetches the search input json data for superman tag and adds it to the state
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.api}&per_page=24&page=1&tags=superman&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          superman: response.data.photos.photo,
          title: "superman",
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
    //this fetches the search input json data for marvel tag and adds it to the state
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.api}&per_page=24&page=1&tags=marvel&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          marvel: response.data.photos.photo,
          title: "marvel",
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });

    //this fetches the search input json data for sports tag and adds it to the state
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.api}&per_page=24&page=1&tags=sports&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          sports: response.data.photos.photo,
          title: "sports",
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }
  //this function fetches the search input json data with the default search being 'Pets and adds it to the state
  photoSearch = (query = "Pets") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.api}&per_page=24&page=1&tags=${query}&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          photos: response.data.photos.photo,
          query: `${query}`,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };
  //React Components inserted as well as Routes
  render() {
    return (
      <BrowserRouter basename="/React-Gallery-App/">
        <div>
          <h1>React Gallery App</h1>
          <Route render={() => <SearchForm onSearch={this.photoSearch} />} />

          <Nav />

          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <PhotoContainer
                  data={this.state.photos}
                  title={this.state.query}
                />
              )}
            />
            <Route
              exact
              path="/superman"
              render={() => (
                <PhotoContainer data={this.state.superman} title={"Superman"} />
              )}
            />
            <Route
              exact
              path="/marvel"
              render={() => (
                <PhotoContainer data={this.state.marvel} title={"Marvel"} />
              )}
            />
            <Route
              exact
              path="/sports"
              render={() => (
                <PhotoContainer data={this.state.sports} title={"Sports"} />
              )}
            />

            <Route
              path="/search/:topic"
              render={(props) => <PhotoContainer data={this.state.photos} />}
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
