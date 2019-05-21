import React from 'react';
import Featured from "./Featured/Index";
import MatchesHome from "./Matches/Index";
import MeetPlayers from "./MeetPlayers/Index";


const Home = () => {
    return (
        <div className={'bck_blue'}>
           <Featured/>
           <MatchesHome/>
           <MeetPlayers/>
        </div>
    );
};

export default Home;