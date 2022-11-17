import React, {useState, useEffect} from "react";

import './Showcase.css';

import { bringMovies, bringMovieType } from '../../Services/apicalls';

const Showcase = () => {

    //Creating a hook to deposit the characters once they arrive

    const [movies, setMovies] = useState([]);
    const [choosen, setChoosen] = useState('');
    const [moviesPerCategory, setMoviesPerCategory] = useState([]);

    useEffect(()=>{

        setTimeout(()=>{

            if(movies.length === 0){
                bringMovies().then(
                    (res)=> setMovies(res.data.genres)
                    );
            };

        },2000);

    },[movies]);

    const selectMovie = (movie) => {

        //I set the hook with the chosen character

        setChoosen(movie);

        bringMovieType(movie.id).then(
            (res)=> setMoviesPerCategory(res.data.results)
            );
    }

    if(movies.length > 0){

        //We are going to render characters

        return(
            <div className='charactersShowcase'>
                {/*We are going to map the hook which contains the characters*/}
                
                <div className='leftSide'>
                {
                    movies.map(movie => {
                        return <div  onClick={()=>selectMovie(movie)} className='personDesign' key={movie.id}>
                            <div>{movie.name}</div>
                        </div>
                    })
                }

                </div>

                <div className='rightSide'>
                    {/*Conditional rendering...*/}

                    {
                        choosen.id !== undefined &&

                        // We are passing the character detail component the choosen character
                        moviesPerCategory.map(movie => {
                            return <div key={movie.id} className='moviePerCategory'>
                                <div>{movie.title}</div>
                                <div>{movie.vote_count}</div>
                            </div>
                        })
                    }

                </div>
                

            </div>
        )

    } else {
        
    //This return will take care of the loading screen...
        return(
            <div className='homeLoadingDesign'>
            home!
            </div>
        )
    }
}

export default Showcase;