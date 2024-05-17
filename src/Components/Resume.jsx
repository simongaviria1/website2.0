export default function Resume(props) {
  return (
    <div className="text-container">
      <h1>Resume</h1>
      <div id="work-container">
        <div id="Google" className="resume-content-container">
          Developer Advocate
          <br />
          Classroom, Google | APRIL 2019 - CURRENT
          <br />
          <p>
            <ul className="experience">
              <li>
                Worked with mobile developers and TPM's to create and maintain
                test automation for digital, web and physical products
              </li>
              <li>
                Worked alongside UI and Core development teams to understand
                test automation gaps and implement coverage
              </li>
              <li>
                Worked with embedded systems team to test make testing an
                integral part of the software development process
                <li>
                  Created and implemented test suites for Android, iOS, Tread
                  and Bike teams for release products
                </li>
              </li>
            </ul>
          </p>
          <br />
        </div>
      </div>
      <div id="peloton" className="resume-content-container">
        SOFTWARE ENGINEER
        <br />
        PELOTON | APRIL 2019 - CURRENT
        <ul className="experience">
          <li>
            Worked with mobile developers and TPM's to create and maintain test
            automation for digital, web and physical products
          </li>
          <li>
            Worked alongside UI and Core development teams to understand test
            automation gaps and implement coverage
          </li>
          <li>
            Worked with embedded systems team to test make testing an integral
            part of the software development process
            <li>
              Created and implemented test suites for Android, iOS, Tread and
              Bike teams for release products
            </li>
          </li>
        </ul>
      </div>
      <div id="2U" className="resume-content-container">
        CONTENT COORDINATOR
        <br />
        2U, INC. | SEPT 2018 - APRIL 2019
        <ul className="experience">
          <li>
            Worked with mobile developers and TPM's to create and maintain test
            automation for digital, web and physical products
          </li>
          <li>
            Worked alongside UI and Core development teams to understand test
            automation gaps and implement coverage
          </li>
          <li>
            Worked with embedded systems team to test make testing an integral
            part of the software development process
            <li>
              Created and implemented test suites for Android, iOS, Tread and
              Bike teams for release products
            </li>
          </li>
        </ul>
      </div>
      <button onClick={props.callback}>Back to top</button>
    </div>
  );
}
