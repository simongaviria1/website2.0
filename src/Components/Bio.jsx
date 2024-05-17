export default function Bio(props) {
  return (
    <div className="text-container">
      <h1>Bio</h1>
      <h3>A little more about me.</h3>
      <div>
        <h2 id="bio-content">
          <p style={{ margin: 0 }}>
            From a very young age, I always had an infatuation with computers
            and problem solving. Though I did not know it, I was always
            surrounded by code. Whether it was through video games, to checking
            my phone, or just simple hobbies like changing HTML on my Myspace
            page, programming will always a big part of my life.
          </p>
          <p>
            While getting my Computer science degree from CUNY Hunter College, I
            decided to join an intensive, rigorous Full-Stack Web development
            program to supplement my computer science studies.
          </p>
          <p>
            After finishing both programs, I've worked at many different
            compnaies such as 2U, Peloton and Google. ... to add more
          </p>
        </h2>
      </div>
      <button onClick={props.callback}>Back to top</button>
    </div>
  );
}
