import { combineReducers } from 'redux';

import auth from "./auth.js";
import posts from "./posts.js";

export default combineReducers({
    // normally posts: posts but key and value are the same
    // so posts by itself is ok
    auth,
    posts
});