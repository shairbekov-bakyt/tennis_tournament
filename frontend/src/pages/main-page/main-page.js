import React, {useEffect, useState} from "react";
import './main-page.css'
import axios from "axios";



function MainPage() {
    const [games, setGame] = useState([])
    const url = 'http://127.0.0.1:8000/api/v1/game/';
    const getAllGames= () =>{
        axios.get(url)
            .then((response) => {
                const allGames = response.data
                setGame(allGames)
                console.log(games)
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
                { games.map((game)=> {
                    return (
                        <tr>
                            <td className="main_th">{game.id}</td>
                            <td className="main_th">{game.first_pl.username}</td>
                            <td className="main_th">{game.second_pl.username}</td>
                        </tr>
                    );
                    })
                }
        </table>
        </div>
    )
}
export default MainPage