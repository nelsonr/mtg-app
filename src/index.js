import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

import "./css/index.css";

async function changeScreenOrientation(orientation) {
    try {
        let requestFullScreen =
            window.document.documentElement.requestFullscreen ||
            window.document.documentElement.mozRequestFullScreen ||
            window.document.documentElement.webkitRequestFullScreen ||
            window.document.documentElement.msRequestFullscreen;

        if (!document.fullscreenElement) {
            await requestFullScreen.call(window.document.documentElement);
        }
    } catch (err) {
        console.error(err);
    }

    await window.screen.orientation.lock(orientation).catch(reason => {
        console.log(reason);
    });

    return true;
}

const initialState = {
    screen: "GAME",
    startingLife: 20,
    activePlayers: 2,
    players: [
        { name: "Player 1", life: 20 },
        { name: "Player 2", life: 20 },
        { name: "Player 3", life: 20 },
        { name: "Player 4", life: 20 }
    ]
};

const playersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_SCREEN":
            if (action.value === "OPTIONS") {
                changeScreenOrientation("portrait");
            } else {
                if (state.activePlayers > 2) {
                    changeScreenOrientation("landscape");
                } else {
                    changeScreenOrientation("portrait");
                }
            }

            return Object.assign({}, state, {
                screen: action.value
            });

        case "SET_STARTING_LIFE":
            return Object.assign({}, state, {
                startingLife: action.value,
                players: state.players.map(player => {
                    player.life = action.value;

                    return player;
                })
            });

        case "SET_ACTIVE_PLAYERS":
            return Object.assign({}, state, {
                activePlayers: action.value
            });

        case "INCREMENT_LIFE":
            return Object.assign({}, state, {
                players: state.players.map((player, index) => {
                    if (index === action.index) {
                        player.life = player.life + 1;
                    }

                    return player;
                })
            });

        case "DECREMENT_LIFE":
            return Object.assign({}, state, {
                players: state.players.map((player, index) => {
                    if (index === action.index) {
                        player.life = player.life - 1;
                    }

                    return player;
                })
            });

        case "RESET_LIFE":
            return Object.assign({}, state, {
                players: state.players.map(player => {
                    player.life = state.startingLife;

                    return player;
                })
            });

        default:
            return state;
    }
};

const store = createStore(playersReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
