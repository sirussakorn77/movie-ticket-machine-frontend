export const updateAllMovies = (data) => dispatch => {
    return dispatch({ type: 'UPMOVIES', payload: data })
}

export const sortAllMovies = (data) => dispatch => {
    switch(data.type){
        case "1":
            return dispatch({ type: 'SORTNAME', payload: data.movie })
        case "2":
            return dispatch({ type: 'SORTNAMEDESC', payload: data.movie })
        case "3":
            return dispatch({ type: 'SORTDATE', payload: data.movie })
        case "4":
            return dispatch({ type: 'SORTDATEDESC', payload: data.movie })
        default: return dispatch({ type: 'SORTNAME', payload: data.movie })
    }
}

export const clearData = () => dispatch => {
    return dispatch({ type: 'CLEARDATA', payload: [] })
}

export const calculatePrice = (data) => dispatch => {
    return dispatch({ type: 'CALCUPRICE', payload: data })
}

export const calculateChange = (data) => dispatch => {
    return dispatch({ type: 'CALCUCHANGE', payload: data })
}

export const checkDetail = (bool) => dispatch => {
    return dispatch({ type: 'CHECKDETAIL', payload: bool })
}