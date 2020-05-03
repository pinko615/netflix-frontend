const mongoose = require('mongoose')
const { genreSchema } = require('./genre')
const { actorSchema } = require('./actor')


//#region Definición del schema movie
const movieSchema = new mongoose.Schema({
    genre: {
        type: genreSchema,
        //required: true
    },
    actor: {
        type: actorSchema,
        //required: true
    },
    title: {
        type: String                                          
        //required: true                
    },
    poster: {
        type: String                     
    },
    length: {
        type: String
    },
    price: {
        type: Number                      
    },
    year: {
        type: Number
    },
    background: {
        type: String                      
    },
    trailerUrl: {
        type: String                   
    },
    rating: {
        type: Number
    },
    description: {
        type: String                      
    },
    popular: {
        type: Boolean                                             
    },
    premiere: {
        type: Boolean                                           
    },
    mainPopular: {
        type: Boolean
    },
    mainPremiere: {
        type: Boolean
    },
    mainHome: {
        type: Boolean
    },
    numOrders: {
        type: Number
    }
},
{
    timestamps: true 
})
//#endregion
  
  
  //#region Definición del modelo
  const Movie = mongoose.model('movie', movieSchema)
  //#endregion


  module.exports = Movie
  //module.exports.movieSchema = movieSchema
