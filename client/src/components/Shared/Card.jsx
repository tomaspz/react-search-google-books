import React from 'react';

const Card = ({id, title, image, author, description, category}) => {

    const style = {
        p: {
            fontSize: 12
        }


    }

    return (
        <div className="card">
            <img src={image} className="card-img-top display-block" alt={title} style={{width: 225}} />
                <div className="card-body">
                    <h6 className="card-title"><strong>{title}</strong></h6>
                    <p style={style.p}><strong>Author: </strong> {author}</p>
                    <p style={style.p} className="card-text"><strong>Description: </strong> {description}</p>
                    <p style={style.p}><strong>Category: </strong> {category}</p>
                    <div className="card-footer">
                        <button id={id} className="btn btn-primary">Add To Library</button> 
                    </div>
                </div>
        </div>
    );
};

export default Card;