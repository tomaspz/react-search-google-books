import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../components/Shared/Card';

export default class Search extends Component {

    state = {
        book: "",
        results: []
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.book}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API}`)
        .then(res => {
            console.log(res.data.items);
            this.setState({
                results: res.data.items
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col d-flex justify-content-center">
                        
                        <h4 style={{marginRight:40, marginTop:5}}>Search for a Book</h4>
                
                        <form id="search-form" onSubmit={this.handleSubmit}>

                            <div className="input-group mb-3">
                                <input 
                                    type="text"
                                    name="book" 
                                    className="input-control" 
                                    placeholder="Book's title" 
                                    aria-label="Book's title" 
                                    onChange={this.handleInputChange}
                                />
                                <div className="input-group-append">
                                    <button 
                                        type="submit" 
                                        id="search-button" 
                                        className="btn btn-outline-secondary">Search
                                    </button>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-4 mx-auto" style={{marginTop: 75}}>

                            {this.state.results.map(book => {
                                return (
                                    <Card 
                                        key={book.id} 
                                        id={book.id}
                                        title={book.volumeInfo.title} 
                                        image={book.volumeInfo.imageLinks.thumbnail}
                                        author={book.volumeInfo.authors}
                                        description={book.volumeInfo.description}
                                        category={book.volumeInfo.categories}
                                    />
                                )
                            })}

                   
                </div>
            </div>
        )
    }
}
