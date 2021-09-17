//posts are going to be an array, set state to empty array 
// state will always be posts b/c in post reducer
//const reducer isn't being used so: export default 

const posts = (posts = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);
        case 'UPDATE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];

        default:
           return posts;
            
    }
}

export default posts;