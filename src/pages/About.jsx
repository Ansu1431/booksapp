import React from 'react'
import './style.css'
const About = () => {
  return (
    <div id="about">

    <div class="row">
        <div class="about-col-1">
            <img
                src="https://odishalinks.com/wp-content/uploads/2022/04/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg" alt='imagw'/>
        </div>
        <div class="about-col-2">
            <h1 class="sub-title">About Us</h1>
            <p>
                we have opened a online book store where we sell all the latest and new books which are published curently...
                <br/>
                we also sell old books because there are some persons who love to read and spend time in reading old books..
                <br/>
                This store is open by myself and two of my friends whose name are geetanshu and pankaj and they both has given their best for making our store rank one in our area...

            </p>
            <div class="tab-titles">
                <p class="tab-links active-link" onclick="opentab('Skills')">Skills</p>
                <p class="tab-links" onclick="opentab('Experience')">Experience</p>
                <p class="tab-links" onclick="opentab('Education')">Education</p>

            </div>
            <div class="tab-contents active-tab" id="Skills">
                <ul>
                    <li><span>CEO</span><br/>Anshu and Geetanshu are the CEO of this company</li>
                    <li><span>Director</span><br/>Mr.pankaj is currently director of this company </li>
                </ul>
            </div>
            <div class="tab-contents" id="Experience">
                <ul>
                    <li><span>2024- Current </span><br/> ceo of 3 friends store</li>
                    <li><span>2022</span><br/>Marketing manager in justchill</li>
                    <li><span>2020</span><br/>Writer in oh my god company</li>
                </ul>
            </div>
            <div class="tab-contents" id="Education">
                <ul>
                    <li><span>2023-2027</span><br/>St. Sndrews institute of technology and management <br/>Computer
                        Science</li>
                    <li><span>2011-2023</span><br/>Kendriya Vidayalaya Sainik Vihar New Delhi
                        <br/> I - XII
                    </li>

                </ul>
            </div>
        </div>




    </div>
</div>
  )
}

export default About