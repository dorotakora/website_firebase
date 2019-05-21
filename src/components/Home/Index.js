import React from 'react';
import Featured from "./Featured/Index";
import MatchesHome from "./Matches/Index";
import MeetPlayers from "./MeetPlayers/Index";
import Promotion from "./Promotion/Index";


const Home = () => {
    return (
        <div className={'bck_blue'}>
           <Featured/>
           <MatchesHome/>
           <MeetPlayers/>
           <Promotion/>
        </div>
    );
};

export default Home;