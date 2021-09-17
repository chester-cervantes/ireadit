import { FETCH_ALL, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST } from '../actionType';

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE_POST:
            return [...posts, action.payload];
        case UPDATE_POST:
            // return updated post if post._id matches updated post in action.payload._id, otherwise return the og post
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE_POST:
            // keep posts except with the id == action.payload_id
            return posts.filter((post) => post._id !== action.payload._id);
        case LIKE_POST:
            // return updated post if post._id matches updated post in action.payload._id, otherwise return the og post
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        default:
            return posts;

    }
}