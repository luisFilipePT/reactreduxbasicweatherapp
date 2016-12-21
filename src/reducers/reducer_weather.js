/**
 * Created by luis on 21/12/2016.
 */
import FETCH_WEATHER from '../actions/index';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
            break;
        default:
            console.log("Something went wrong evaluating " + action.type + ".");
    }

    return state;
}