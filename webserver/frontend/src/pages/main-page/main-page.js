import React, {useEffect, useState} from "react";
import './main-page.css'
import axios from "axios";
import {BASEURL} from "../../functions/api";
import {useNavigate} from 'react-router-dom'


function MainPage() {
    const [games, setGame] = useState([])
    const url = BASEURL;

    const navigate = useNavigate()

    const getAllGames = () => {
        axios.get(url)
            .then((response) => {
                const allGames = response.data
                setGame(allGames)
            })
            .catch(error => console.log(error))
    }
    useEffect(() => {
        getAllGames();
    }, [])
    return (
        <div>
            <table border="1" className="main_table">
                <tr>
                    <th className="main_th">id</th>
                    <th className="main_th">first Player</th>
                    <th className="main_th">second Player</th>
                </tr>
                {games.map((game, index) => {
                    return (
                        game &&
                        <tr key={game.id}>
                            <td className="main_th" onClick={() => {
                                navigate('/game/' + game.id)
                            }}>{index}</td>
                            <td className="main_th">{game.first_pl.username}</td>
                            <td className="main_th">{game.second_pl.username}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    )
}

export default MainPage