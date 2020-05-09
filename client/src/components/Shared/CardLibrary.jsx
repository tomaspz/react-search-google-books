import React from 'react';
import API from '../../utils/API';

const Card = (props) => {

    const style = {
        p: {
            fontSize: 12
        }
    }

    const handleClick = (event, data) => {
        console.log(data);
        API.saveBook(data);
        // .then(res =>{
        //     console.log(data);
        // })
        // .catch(err => {
        //     console.log(err);
        // })
    }

    return (
        <div className="card">
            <img src={props.image} className="card-img-top display-block" alt={props.title} style={{width: 225}} />
                <div className="card-body">
                    <h6 className="card-title"><strong>{props.title}</strong></h6>
                    <p style={style.p}><strong>Authors: </strong> {props.author}</p>
                    <p style={style.p} className="card-text"><strong>Description: </strong> {props.description}</p>
                    <p style={style.p}><strong>Category: </strong> {props.category}</p>
                    <div className="card-footer">
                        <button id={props.id} className="btn btn-danger" onClick={(e)=> handleClick(e, props)}>Delete</button> 
                    </div>
                </div>
        </div>
    );
};

export default Card;