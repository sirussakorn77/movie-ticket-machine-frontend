export const updateAllMovies = (data) => dispatch => {
 return dispatch({ type: 'UPMOVIES', payload: data })
}

export const sortAllMovies = (data) => dispatch => {
    return dispatch({ type: 'SORT', payload: data })
}

export const clearData = () => dispatch => {
    return dispatch({ type: 'CLEARDATA', payload: [] })
}

 