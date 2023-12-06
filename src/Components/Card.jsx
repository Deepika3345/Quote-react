import React, { useContext, useEffect } from 'react'
import QuoteContext from '../Context/QuoteContext'
import { fetchQuote } from '../Context/QuoteAction'

const Card = () => {


    const { quoteData, dispatch } = useContext(QuoteContext)

    const getQuotes = async () => {
        const data = await fetchQuote()
        dispatch({
            type: "GET_QUOTES",
            payload: data,
        })
    }

      useEffect(()=>{
        getQuotes()
      },[])
     if (!quoteData){
        return(
            <div className='card p-5 shadow-lg'> 
            <h1 className='display-1 text-center'>Loading...</h1>
              </div>
        )
     }



    return (
        <div className='card p-5 shadow-lg'>
            <h1 className="display-4">{quoteData.content}</h1>
            <p className='text-secondary'>{quoteData.author}</p>
            <span className="my-3">
                <span className="badge rounded-pill  text-bg-primary">{quoteData.tags[0]}</span>
                <span className="badge rounded-pill text-bg-danger ">{quoteData.tags[1]}</span>
            </span>
            <button className="btn btn-success my-3" onClick={getQuotes}>Get More Quotes</button>

        </div>
    )
}

export default Card