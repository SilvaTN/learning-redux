const INCREMENT = 'increment'; //string is stored as variable to prevent spelling errors
const DECREMENT = 'decrement';

//https://youtu.be/wcXTCG8zMhY?t=1201 in redux, all your actions will be fxns that return maps, and the type is going to be what the action is.
// this function returns a map, hence the ({}) instead of just {}
export const increment = () => ({
    type: INCREMENT
}) 

export const decrement = () => ({
    type: DECREMENT
})


const initialState = {
    count: 0
    //examples of all the variables you might have in a state:
    // name: "",
    // id: "0",
    // country: "",
};

//implement the reducer itself.
//initialState is the default variable if none is provided.
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            //return a state where everything is the same except the count, which is count+1. 
            //This is cuz in regular applications, you may have a lot more variables in your (initial?)state, and whatever you return will override the state.
            return { ...state, count: state.count + 1 } ;
        case DECREMENT:
            return { ...state, count: state.count - 1 } ;;
        default: //for when it first gets run
            return state;
    }
}

export default myReducer