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
      <div id='container'>
        <div id='resume'>Resume</div>
        <div id='resume-content'>
          SOFTWARE ENGINEER
          <br />
          PELOTON | APRIL 2019 - CURRENT
          <br />
          * Worked with mobile developers and TPM's to create and maintain test automation for digital, web and physical products  <br />
          * Worked alongside UI and Core development teams to understand test automation gaps and implement coverage  <br />
          * Worked with embedded systems team to test make testing an integral part of the software development process <br />
          * Created and implemented test suites for Android, iOS, Tread and Bike teams for release products <br />
          <br />

          CONTENT COORDINATOR
  <br />
          2U, INC. | SEPT 2018 - APRIL 2019
  <br />
          * Beta tested on new tools and services to be utilized by the content department<br />
          * Troubleshooted time-sensitive issues as they arise<br />
          * Performed QC on course builds to assure content renders properly in LMS/OC environment across different browsers <br />
          * Tracked development of course materials through deployment and production<br />
          <br />

          FULL STACK ENGINEER
  <br />
          PURSUIT | SEPT 2017 - JUNE 2018
          <br />
          * Enrolled in an intensive 9 month, Google-funded software engineering fellowship with a 9% acceptance rate
          Gained hands-on experience in ReactJS, NodeJS, Git/GitHub, data structures, Algorithms, APIs, and tech principles and culture via both team/individual projects, code reviews, and pair programming
        </div>

      </div>

      <footer>
        Social media
      </footer>
      <div>
        email@example.com
      </div>
    </div >
  );
}

export default App;
