const exampleInitialState = {
    movies: []
  }

export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
      case 'UPMOVIES':
        return Object.assign({}, state, {
            movies: action.payload
        })
      default: return state
    }
  }