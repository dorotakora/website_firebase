import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import IconRider from '../../../Resources/images/icon_rider.png'

class Text extends Component {

    animateFirst = () => (
        <Animate
            show={true}
            start={{
                opacity:0
            }}
            enter={{
                opacity:[1],
                timing:{duration: 500, ease:easePolyOut}
            }}
        >
            {({opacity})=>{
            return(
                <div className="featured_first"
                        style={{
                            opacity,
                            transform: `translate(273px,450px)`
                        }}
                >
                    Żużel
                </div>
            ) 
            }}
        </Animate>
    )

    animateSecond = () => (
        <Animate
        show={true}
        start={{
            opacity:0
        }}
        enter={{
            opacity:[1],
            timing:{delay:300,duration: 500, ease:easePolyOut}
        }}
    >
        {({opacity})=>{
        return(
            <div className="featured_second"
                    style={{
                        opacity,
                        transform: `translate(273px,586px)`
                    }}
            >
                Ekstraklasa
            </div>
        ) 
        }}
    </Animate>
    )

    animateRider  = () => (
        <Animate
        show={true}
        start={{
            opacity:0,
            x:[0],
            y:[275],
        }}
        enter={{
            opacity:[1],
            x:[580],
            y:[275],
            timing:{delay:300, duration: 1000, ease:easePolyOut}
        }}
    >
        {({opacity, x, y})=>{
        return(
            <div className="featured_rider"
                    style={{
                        opacity,
                        background: `url(${IconRider})`,
                        transform: `translate(${x}px,${y}px)`
                    }}
            >
            </div>
        ) 
        }}
    </Animate>
    )

    render() {
        return (
            <div className="featured_text">
                {this.animateRider()}
                {this.animateFirst()}
                {this.animateSecond()}
                
            </div>
        );
    }
}

export default Text;