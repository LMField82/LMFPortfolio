import React, { Component } from 'react';
import ProjectCard from "../Components/ProjectCards/index";
import cards from "../cards.json";

 
// const handleClick = (event) => {
//     event.preventDefault();
    
//  }

    class Projects extends Component {
    state = {
      cards
    };

render()  {
   
    return (
        <div className="row">
            {this.state.cards.map(cards => (
                
            <ProjectCard 
                key={cards.id}
                id={cards.id}
                image={cards.image}
                title={cards.title}
                text={cards.text}
                btnText={cards.btnText}
                link={cards.link}
            />
            ))}
        </div>
      )
  
    }
};

export default Projects;