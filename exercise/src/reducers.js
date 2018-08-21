const exampleInitialState = {
    movies: []
  }

export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
      case 'UPMOVIES':
        return Object.assign({}, state, {
            movies: action.payload
        })
        case 'SORT':
        console.log('sort', action.payload)
          const data = action.payload
          data.sort((a,b)=>{
            const aName = a.name.toLowerCase()
            const bName = b.name.toLowerCase()

            if(aName > bName){
              return -1
            }
            if(aName < bName){
              return 1
            }
            return 0
          })
          return Object.assign({}, state, {
              movies: data
          })
        case 'CLEARDATA':
          return {
            ...state,
            movies: []
          }
      default: return state
    }
  }