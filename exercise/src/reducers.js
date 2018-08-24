import { sortByNameASC, sortByNameDESC, sortByDateASC, sortByDateDESC } from './lib/sorting'

const exampleInitialState = {
    movies: [],
    ticket: 0,
    total: 0,
    isDetail: false,
    changes: []
  }

let data

export const reducer = (state = exampleInitialState, action) => {
  switch(action.type) {
    case 'UPMOVIES':
      return Object.assign({}, state, {
          movies: action.payload,
          haveMovie: true

      })
    case 'SORTNAME':
      data = action.payload
      data.sort(sortByNameASC)

    return {...state, 
      movies: data,
      haveMovie: true
    }
    case 'SORTNAMEDESC':
      data = action.payload
      data.sort(sortByNameDESC)

    return {...state, 
      movies: data,
      haveMovie: true
    }
    case 'SORTDATE':
      data = action.payload
      data.sort(sortByDateASC)

    return {...state, 
      movies: data,
      haveMovie: true
    }
    case 'SORTDATEDESC':
      data = action.payload
      data.sort(sortByDateDESC)

    return {...state, 
      movies: data,
      haveMovie: true
    }
    case 'CLEARDATA':
      return {
        ...state,
        movies: [],
        haveMovie: false
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
    case 'CALCUCHANGE':
      const changes = calculatechange(action.payload)

      console.log(changes)

      return {
        ...state,
        changes: changes
      }

    //   return {
    //     ...state,
    //     movies: action.payload.data,
    //     ticket: action.payload.ticket,
    //     movies: action.payload.data,
    //     total: action.payload.ticket * action.payload.data.price,
    //     isDetail: true
    //   }
    case 'CHECKDETAIL':
      return {
        ...state,
        isDetail: action
      }
    default: return state
  }
}

const calculatechange = (money) => {
  let changes = [] 

  if(money >= 1000) {
    changes.push({
      "type": "bank1000",
      "value": Math.floor(money/1000),
      "unitType" : "ใบ"
    })
    money = money % 1000;
  }
  if(money >= 500) {
    changes.push({
      "type": "bank500",
      "value": Math.floor(money/500),
      "unitType" : "ใบ"
    })
    money = money % 500;
  }
  if(money >= 100) {
    changes.push({
      "type": "bank100",
      "value": Math.floor(money/100),
      "unitType" : "ใบ"
    })
    money = money % 100;
  }
  if(money >= 50) {
    changes.push({
      "type": "bank50",
      "value": Math.floor(money/50),
      "unitType" : "ใบ"
    })
    money = money % 50;
  }
  if(money >= 20) {
    changes.push({
      "type": "bank20",
      "value": Math.floor(money/20),
      "unitType" : "ใบ"
    })
    money = money % 20;
  }
  if(money >= 10) {
    changes.push({
      "type": "coin10",
      "value": Math.floor(money/10),
      "unitType" : "เหรียญ"
    })
    money = money % 10;
  }
  if(money >= 5) {
    changes.push({
      "type": "coin5",
      "value": Math.floor(money/5),
      "unitType" : "เหรียญ"
    })
    money = money % 5;
  }
  if(money >= 2) {
    changes.push({
      "type": "coin2",
      "value": Math.floor(money/2),
      "unitType" : "เหรียญ"
    })
    money = money % 2;
  }
  if(money >= 1) {
    changes.push({
      "type": "coin1",
      "value": Math.floor(money/1),
      "unitType" : "เหรียญ"
    })
  }

  return changes
}