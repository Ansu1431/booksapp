import React from 'react'
import './style.css'

const Trendingones = () => {
  return (
    
    // <div>Trending ones</div>
    <div id="Trending ones">
        <div class="container">
            <h1 class="sub-title">Trending Ones</h1>
            <div class="work-list">
                <div class="Work">
                    <img src="work-1.jpg"/>
                    <div class="layer">
                        <p>
                            Mulk Raj Anand – The Private Life of an Indian Prince
                        </p>

                    </div>

                </div>
                <div class="Work">
                    <img src="work-2.jpg"/>
                    <div class="layer">
                        <p>Mahatma Gandhi – The Story Of My Experiments With The Truth
                        </p>
                    </div>
                </div>
                <div class="Work">
                    <img src="work-3.jpg"/>
                    <div class="layer">
                        <p>R.K. Narayan – The Guide

                        </p>
                    </div>
                </div>
            </div>

        </div>
        <a href="#" class="btn">See more</a>




    </div>
    
  )
}

export default Trendingones