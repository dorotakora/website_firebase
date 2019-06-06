import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup';
import { reverseArray }from '../ui/misc';

class MatchesList extends Component {

    state = {
        matcheslist:[]
    };

    static getDerivedStateFromProps(props,state){
        let matcheslist = reverseArray(props.matches);
        return state = {
            matcheslist
        }
    }


    showMatches = () => (
        this.state.matcheslist ?
            <NodeGroup
                data={this.state.matcheslist}
                keyAccessor={(d)=> d.id}

                start={()=>({
                    opacity:0,
                    x:-200
                })}

                enter={(d,i)=>({
                    opacity:[1],
                    x:[0],
                    timing:{duration: 500, delay: i * 50, ease: easePolyOut}
                })}

                update={(d,i)=>({
                    opacity:[1],
                    x:[0],
                    timing:{duration: 500, delay: i * 50, ease: easePolyOut}
                })}

                leave={(d,i)=>({
                    opacity:[0],
                    x:[-200],
                    timing:{duration: 500, delay: i * 50, ease: easePolyOut}
                })}
            >
                {(nodes)=>(
                    <table  className="match_box_big">
                        <tbody className="block_wraper">
                        { nodes.map(({key, data, state:{ x, opacity}})=>(
                            <tr
                                key={key}
                                className="block"
                                style={{
                                    opacity,
                                    transform: `translate(${x}px)`
                                }}
                            >
                                        <td><img src={`images/team_icons/${data.localThmb}.jpg`} alt={'team-thumbnails'}/></td>
                                        <td className="team">{data.local}</td>
                                        <td className="result">{data.resultLocal}<strong> : </strong>{data.resultAway}</td>
                                        <td className="team">{data.away}</td>
                                        <td><img src={`images/team_icons/${data.awayThmb}.jpg`} alt={'team-thumbnails'}/></td>
                                <td className="nfo">
                                    <span><strong>Data:</strong> {data.date}</span>
                                    <span><strong>Stadion:</strong> {data.stadium}</span>
                                    <span><strong>Kolejka:</strong> {data.round}</span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}

            </NodeGroup>
            :null
    )


    render() {
        return (
            <div>
                {this.showMatches()}
            </div>
        );
    }
}

export default MatchesList;