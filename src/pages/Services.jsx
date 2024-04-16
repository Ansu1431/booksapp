import React from 'react'
import './style.css'
const Services = () => {
  return (
    <div id="services">
    <div class="cotainer">
        <h1 class="sub-title">Our Services</h1>
        <div class="services-list">
            <div>
                <i class="box"></i>
                <i class="fa-solid fa-code"></i>
                <h2>E-books</h2>
                <p>Ebook is short for electronic book. In its purest form, an ebook merely refers to any book that's
                    available in a digital format.
                    <br/>
                    An ebook can contain the same elements as a regular book, including contents, chapters, images,
                    graphs, references, bibliographies, and more.
                </p>

                <a href="#">learn more</a>
            </div>
            <div>
                <i class="fa-solid fa-crop"></i>
                <h2>Home delivery</h2>
                <p>If any customer wants the book offline then we also provide a service of home delivery of books
                    ..
                    <br/>
                    we give home delivery without taking any extra money from customer..

                </p>
                <a href="#">learn more</a>
            </div>
            <div>
                <i class="fa-br/ands fa-app-store"></i>
                <h2>Store purchase</h2>
                <p>
                    We believe local bookstores are essential community hubs that foster culture, curiosity, and a
                    love of reading, and we're committed to helping them thrive.

                    Every purchase on the site financially supports independent bookstores. Our platform gives
                    independent bookstores tools to compete online and financial support to help them maintain their
                    presence in local communities.

                </p>
                <a href="#">learn more</a>
            </div>

        </div>

    </div>
</div>
  )
}

export default Services


//rafce