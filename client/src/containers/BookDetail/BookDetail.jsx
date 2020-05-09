import React from 'react';
import Card from '../../components/Shared/Card';

const BookDetail = (props) => {
    return (
        <div>
            <Card 
                key={props.id} 
                id={props.id}
                title={props.title} 
                image={props.image}
                author={props.author}
                description={props.description}
                category={props.category}
            />
        </div>
    );
};

export default BookDetail;