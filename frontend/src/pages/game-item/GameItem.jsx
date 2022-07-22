import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {BASEURL} from "../../functions/api";
import axios from "axios";
import './gameitem.css'

const GameItem = () => {
    const {id} = useParams()
    const [game, setGame] = useState({})

    const [firstPlayer, setFirstPlayer] = useState(0)
    const [secondPlayer, setSecondPlayer] = useState(0)

    const url = BASEURL + id + '/';
    const getGame = () => {
        axios.get(url)
            .then((response) => {
                const singleGame = response.data
                setGame(singleGame)
                setFirstPlayer(singleGame.first_pl_points)
                setSecondPlayer(singleGame.second_pl_points)
            })
            .catch(error => console.log(error))
    }

    const updateScoreRequest = async (firstPlayer, secondPlayer) => {
        const response = await axios.put(url, {
            "first_pl_points": firstPlayer, "second_pl_points": secondPlayer, "win": 1
        })

        getGame(response.data)
    }

    useEffect(() => {
        getGame()
    }, [])

    return (<div>
        <div className="turn">
            <h1 className="turn__item">{game.turn}</h1>
        </div>
        <div className="players_turn">
            <div className="turn">
                <h1 className="turn__item">{firstPlayer}</h1>
            </div>
            <div className="turn">
                <h1 className="turn__item">{secondPlayer}</h1>
            </div>
        </div>
        <div className="players">
            <div className="button" onClick={() => {
                updateScoreRequest(firstPlayer + 1, secondPlayer)
            }}><h1>+1 score to player {game.first_pl?
                q
                    qq

                        .username}</h1></div>
            <div className="button" onClick={() => {
                updateScoreRequest(firstPlayer, secondPlayer + 1)
            }}>
                <h1>+1 score to player {game.second_pl?.username}</h1>
            </div>
        </div>
    </div>);
};

export default GameItem;