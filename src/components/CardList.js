import React from "react";
import Card from './Card';

const CardList = ({kitties}) => {
    
    return (
        <div>
          {kitties.map((user , i) => {
            return (
            <Card 
              key={i} 
              id={user.id} 
              name={user.name} 
              username={user.username} 
              email={user.email} 
              />);
          })
          }
        </div> 
    );
}
export default CardList;