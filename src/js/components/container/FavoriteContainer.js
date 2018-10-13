import React, { Component } from 'react';
import axios from 'axios';
import Favorite from '../presentational/Favorite';

class FavoriteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: {},
    };
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  componentDidMount() {
  }

  handleFavorite(elem) {
    const favoriteObj = this.state.favorited;
    if (!favoriteObj[elem]) {
      const newFavoriteObj = favoriteObj;
      // This is done because altering state directly in React is not recommended
      newFavoriteObj[elem] = "checked"
      this.setState({
        favorited: newFavoriteObj
      })
    }
    if (favoriteObj[elem]) {
      const newFavoriteObj = favoriteObj;
      delete newFavoriteObj[elem];
      this.setState({
        favorited: newfavoriteObj
      })
    }
  }

  render() {
    return (
      <div>
        <Favorite data={} handleFavorite={this.handleFavorite} />
      </div>
    );
  }
}

export default FavoriteContainer;
