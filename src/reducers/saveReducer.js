import { SAVE_COMMENT } from '../actions/constants';

let commentsArray = [];

function saveReducer(state=null, action) {
    switch(action.type) {
        case SAVE_COMMENT:
            commentsArray.push(action.payload);
            return commentsArray;
        default:
            return state;
    }
}

export default saveReducer;