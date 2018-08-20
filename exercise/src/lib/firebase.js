import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


const config = {
    apiKey: "AIzaSyCmTOOvCsG13HA6wXlAraL4r9x7JYV0eXs",
    authDomain: "movies-fc51b.firebaseapp.com",
    databaseURL: "https://movies-fc51b.firebaseio.com",
    projectId: "movies-fc51b",
    storageBucket: "movies-fc51b.appspot.com",
    messagingSenderId: "105200614009"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(config)
  }
 
  const getAllMovies =() =>{
      const movies = new Promise((resolve)=>{
          const db = firebase.database().ref()
          db.once('value').then((data)=>{
            resolve(data.val().movies)
          })
      })
      return movies
  }

  export { getAllMovies }