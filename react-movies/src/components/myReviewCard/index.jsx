import React from 'react';

const MyReviewCard = (props) => {

    return (
          <div className="card" style={{backgroundColor: '#1c1c1c', color: 'white', width: "250px"}}>
            <p><strong>Author:</strong> {props.author}</p>
             <p><strong>Rating:</strong> {props.rating}</p>
            <p>{props.content}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default MyReviewCard;