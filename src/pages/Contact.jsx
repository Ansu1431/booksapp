import React from 'react'
import './style.css'

const Contact = () => {
  return (
    <div id="Contact">
        <div class="Contact">
            <div class="row">
                <div class="contact-left">
                    <h1 class="sub-title">Contact Me</h1>
                    <p><i class="fa-solid fa-paper-plane"></i>shekhar.ansu14@gmail.com</p>
                    <p><i class="fa-solid fa-square-phone"></i>1234567890</p>
                    <div class="social-icons">
                        <a href="facebook"><i class="fa-brands fa-facebook"></i></a>
                        <a
                            href="https://www.linkedin.com/in/ansu-shekhar-348233294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i
                                class="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/Ansu1431"><i class="fa-brands fa-github"></i></a>
                        <a href=""><i class="fa-brands fa-twitter-square"></i></a>
                        <a href="https://www.instagram.com/shekhar.anshu_14/"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    
                </div>
                <div class="contact-right">
                    <form name="ubmit-to-google-sheet">
                        <input type="text" name="Name" placeholder="Your Name" required/>
                        <input type="email" name="Email" placeholder="Your Email" required/>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" class="btn btn2">Submit</button>

                    </form>
                    
                </div>
            </div>
        </div>
        <div class="copyright">
            <p> copyright @2024.Made with<i class="fa-solid fa-heart"></i> by Ansu</p>
        </div>
    </div>

  )
}

export default Contact