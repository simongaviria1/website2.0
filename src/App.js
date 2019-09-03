import React from 'react';
import logo from './Images/placeholder.jpg';
import './App.css';

function App() {
  return (
    <div>
      <div id='intro'>
        <div id='nav'>
          <h3>Simon Gaviria </h3>
        </div>
        {/* <hr id='line-break'></hr> */}
        <div id='bio'>
          <h3> From a very young age, I always had an infatuation with computers and problem solving. Though I did not know it, I was always surrounded by code. Whether it was through video games, to checking my phone, or just simple hobbies such as blogging, programming will always a big part of my life. As a current fellow at Access Code 4.1, an intensive, rigorous Full-Stack Web development school. I hope to continually improve on my craft as well as learn and work with incredible people. With confidence I am sure I will develop my skill-set and be able to work with a company to contribute to and grow with. </h3>
        </div>
      </div>
      <div>
        <img src={logo} alt='img' />
      </div>
      <div>
        Resume
      </div>

      <footer>
        Social media
      </footer>
      <div>
        email@example.com
      </div>
    </div>
  );
}

export default App;
