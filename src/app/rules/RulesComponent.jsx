import React from 'react';
import './RulesComponent.scss';

class RulesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
      }
    
    render(){
        return(
            <div>
                <p className="RulesComponent-body">Seven heaven is a dice game where the user "bets" on a round to be able to play it. 
                Each player that bet on the round then takes turns trying to roll a 7 or 11 on the first round. 
                If the player rolls these numbers on the first round, they win all the money that was put in. 
                If the player rolls a 2, 3, or 12 on the first round, they are out until some one wins. After the first round, each player tries to roll the number they got on the first roll, and if they get a 7 they are out.
                This goes on until only one player remains or someone rolls the number they got in the first round. 
                These matches go on for as long as the players desire or until one person has all of the money.</p>
            </div>
        );
    }
}

export default RulesComponent;