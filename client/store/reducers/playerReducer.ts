import {PlayerAction, PlayerActionTypes, PlayerState} from "../../types/player";

const initialState: PlayerState = {
    currentTime: 0,
    duration: 0,
    active: null,
    volume: 50,
    pause: true
}

export const playerReducer = (state = initialState, action: PlayerAction): PlayerState => {
    switch (action.type) {
        case PlayerActionTypes.PAUSE:
            return {...state, pause:true}
        case PlayerActionTypes.PLAY:
            return {...state, pause:false}
        case PlayerActionTypes.SET_CURRENT_TIME:
            return {...state, currentTime: action.payload}
        case PlayerActionTypes.SET_VOLUME:
            return {...state, volume: action.payload}
        case PlayerActionTypes.SET_DURATION:
            return {...state, duration: action.payload}
        case PlayerActionTypes.SET_ACTIVE:
            return {...state, active: action.payload, duration: 0, currentTime: 0}
        default:
            return state

    }
}
