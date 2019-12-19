const Movie = require('../models/movie-model.js')
//'movies' is a mongdb database name
createMovie = (req,res) =>{
    const body = req.body
    //console.log(body)
    if (!body) {
        return res.status(404).json({
            success: false,
            error: 'You must provide a movie'
        })
    }
    const movie = new Movie(body)
    if (!movie) {
        return res.status(405).json({success: false, error: err})
    }
    movie.save().then(()=>{
        return res.status(201).json({
            success: true,
            id: movie._id,
            msg: 'Movie Created'
        })
    }).catch(error=>{
        return res.status(406).json({
            error,
            msg: 'Movie Not created'
        })
    })
}
updateMovie = async (req, res) => {
   const updatebody = req.body
    console.log(updatebody)
console.log(updatebody);
    if (!updatebody) {
        //console.log('body');

        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
    //const movie=new Movie(updatebody)
    //console.log(movie)
    Movie.findOne({ _id: req.params.id }, (err, movie) => {
       // console.log('findOne success');
        console.log("ok  "+req.params.id)
        if (err) {
            //console.log('err');

            return res.status(404).json({
                err,
                msg: 'Movie not found!',
            })
        }
        console.log("movie "+movie)
        movie.name = updatebody.name
        movie.time = updatebody.time
        movie.rating = updatebody.rating
        console.log("movieup "+movie)
        
        movie.save().then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    msg: 'Movie updated!',
                   // data: movies
                })
            })
            .catch(error => {
                //console.log('not found')
                return res.status(405).json({
                    error,
                    msg: 'Movie not updated!',
                })
            })
    })
}
getMovie = async(req,res)=>{
   await Movie.find({}, (err,movies)=>{
       if (err) {
           return res.status(400).json({success: false, error: err})
       }
       if (!movies.length) {
           return res.status(405).json({success: false, error: 'movie not found'})
       }
       return res.status(200).json({success:true, data: movies})
   }).catch(err=>console.log(err))
}

deleteMovie = async(req,res)=>{
    await Movie.findOneAndDelete({_id: req.params.id},(err,movies)=>{
        if (err) {
            return res.status(402).json({success: false, error: err})
        }
        
       
        return res.status(200).json({success: true, data: movies})
    }).catch(err=>console.log(err))

    
}



getMovieById = async (req, res) => {
    await Movie.findOne({ _id: req.params.id }, (err, movies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        //console.log('okk')
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))
}



module.exports = {
    createMovie,
    getMovie,
    deleteMovie,
    updateMovie,
    getMovieById,    

}