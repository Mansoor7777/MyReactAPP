import React from 'react';
import Card from './Card';
const CardList = ({robots}) => {
	
	return(
	 <div>
	 {
	    robots.map((user,x)=>{
	    return(
	 	<Card key={x} id={robots[x].id} 
	 	name={robots[x].name} 
	 	email={robots[x].email}/>
		  );
	 })
   }
   </div>
  );
}
export default CardList;