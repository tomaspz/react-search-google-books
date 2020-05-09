import React, { Component } from 'react';
import API from '../../utils/API';
import CardLibrary from '../../components/Shared/CardLibrary';

class Library extends Component {

    state = {
        books: []
    }

    componentDidMount(){
        API.getBooks().then(res =>{
            console.log(res.data);
            this.setState({
                books: res.data 
            })
        }).catch(err =>{
            console.log(err);
        });
    }

    render() {
        return (
            <div className="row row-cols-1 row-cols-md-4 mx-auto" style={{marginTop: 75}}>
                
                {this.state.books.map(book => {
                    return(    
                        <CardLibrary 
                            key={book.id} 
                            id={book.id}
                            title={book.title} 
                            image={book.image}
                            author={book.author}
                            description={book.description}
                            category={book.category}
                        />
                    )
                })}
 
            </div>
        );
    }
}

export default Library;