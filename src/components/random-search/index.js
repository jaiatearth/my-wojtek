import React, { Component } from "react";
import axios from 'axios';
var _ = require('lodash');
import '../../styles/styles.less';

class RandomSearch extends Component {

    constructor(props) {
        super(props);
        this.getRandomNonAlcoholicBeer = this.getRandomNonAlcoholicBeer.bind(this)
        this.state = { randomBeer: [] ,
                       allBeers: [], 
                       getRandomBeerAPI : 'https://api.punkapi.com/v2/beers/random',
                       getAllBeers : 'https://api.punkapi.com/v2/beers',                       
                     };
    }
    
    componentDidMount() {
        fetch(this.state.getRandomBeerAPI)
            .then(response => response.json())
            .then(randomBeer => this.setState({ randomBeer }))
    }

    // Get Random beer...
    getRandomBeer(){
        fetch(this.state.getRandomBeerAPI)
                .then(response => response.json())
                .then(randomBeer => this.setState( { randomBeer }, () => {
                    const isNonAlcohol = false;
                    this.setBeer(this.state.randomBeer, isNonAlcohol);
                }));
    }

    setBeer(allBeers, isNonAlcohol){
        this.setState(
                {
                    randomBeer : isNonAlcohol ? Array.of(_.sample(_.filter(allBeers, item => item.abv < 5.0))) : allBeers
                },
                () => {
                }
        )  
    }

    //Get Non Alcoholic beer based on abv value..
    getRandomNonAlcoholicBeer(){
        fetch(this.state.getAllBeers)
            .then(response => response.json())
            .then(allBeers => this.setState( { allBeers }, () => {
                                const isNonAlcohol = true;
                                this.setBeer(this.state.allBeers, isNonAlcohol);
                              }));                
    }

    render() {
        const { randomBeer } = this.state;
        return (
           <div className="random-beer">

                {randomBeer.map(currentBeer => 
                <div key={currentBeer.id}>
                    <div className="random-beer__header"> 
                         <span className="name"> {currentBeer.name} - &nbsp; </span>
                         <span className="tagline"> <i>" {(currentBeer.tagline).split(".")[0]} "</i></span>
                         <span className="contribution"> <i>Contributed By :&nbsp;</i> {(currentBeer.contributed_by).split("<")[0]}</span>
                    </div>
                    <div className="random-beer__content">
                        <div className="image">
                            <img src={currentBeer.image_url} alt="Smiley face" height="250" width="70" />
                        </div>
                        <div className="random-beer__content-details">
                            <div className="description">
                                {currentBeer.description}
                            </div>
                            <div className="brewer-label">
                                Brewer Tips
                            </div>
                            <div className="brewer-tips">
                                {currentBeer.brewers_tips}
                            </div>
                            <div className="action-controls">
                                <button id="getAnotherBeer" onClick={ () => this.getRandomBeer() }>
                                Another Beer
                                </button>
                                <button id="getNonAlcohol" onClick={ () => this.getRandomNonAlcoholicBeer() }>
                                Random Non Alcoholic Beer
                                </button>
                            </div>
                        </div>
                        <div className="random-beer__content-origin">
                            <div className="content">
                                
                                <div className="date-container"> 
                                <div className="label"> First Brewed </div>
                                    <div className="date">{currentBeer.first_brewed}</div>
                                    <div className="ph">pH&nbsp;{currentBeer.ph}</div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>    
                )}


                
        
          </div>
        );
    }
}

export default RandomSearch;


