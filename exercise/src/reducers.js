const exampleInitialState = {
    movies: [],
    ticket: 0,
    total: 0,
    isDetail: false
  }

export const reducer = (state = exampleInitialState, action) => {
  switch(action.type) {
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
    
    case 'CALCUPRICE':
      return {
        ...state,
        movies: action.payload.data,
        ticket: action.payload.ticket,
        movies: action.payload.data,
        total: action.payload.ticket * action.payload.data.price,
        isDetail: true
      }
    case 'CHECKDETAIL':
      return {
        ...state,
        isDetail: action
      }
    default: return state
  }
}