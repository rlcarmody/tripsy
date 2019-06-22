import React from "react";

function Card({ title, children, className }) {
  return (
    <div className={`card mt-4 ${className}`}>
      <div className="card-header">
        <h3>
          <strong>
            {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;
