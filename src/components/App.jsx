import React, { Component } from 'react';
import {Container} from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {Button} from './Button/Button';

import { getImagesByQuery } from "components/Api/images";

export class App extends Component {
  state = {
    query: '',
    images: [],
    loading: false,
    page: 1,
    showBtn: false,
    
  }

  handleFormSubmit = searchItem => {
    this.setState({query: searchItem})
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const newQuery = this.state.query;
    if(prevQuery !== newQuery)  {
        this.setState({images: []});
        this.handleSearch();
    }
    if(prevState.page !== this.state.page){
      this.handleSearch();
    }
}

handleSearch = async() => {
    try{
        this.setState({loading: true}) 
        const data = await getImagesByQuery(this.state.query, this.state.page)
        this.setState((prev) => ({images: [...prev.images, ...data.hits], showBtn: this.state.page < (data.totalHits / 12), loading: false}))
    } catch {

    }
}

onButtonClick = () => {
  this.setState((prev) => ({ page: prev.page + 1}))
}

  render() {
    return (
      <Container>
        <Searchbar onFormSubmit={this.handleFormSubmit}/>
        <ImageGallery imagesToRender={this.state.images}/>
        <Button onClick={this.onButtonClick}/>
      </Container>
      
    )
  }
};
