import React from 'react';

const MyReviewCard = (props) => {

    return (
          <div className="card" style={{backgroundColor: '#333333', color: 'white', width: "250px"}}>
            <h3><strong>Review</strong></h3>
            <p><strong>Author:</strong> {props.author}</p>
             <p><strong>Rating:</strong> {props.rating}</p>
            <p><strong>Content:</strong> {props.content}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default MyReviewCard;