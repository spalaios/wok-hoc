import { SAVE_COMMENT } from './constants';


function saveComment(text) {
    return {
        type: SAVE_COMMENT,
        payload: text
    }
}

export default saveComment;