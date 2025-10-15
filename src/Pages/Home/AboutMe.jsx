export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--content--wrapper">
        <div className="about--text--content">
          <h2 className="about--title">About Me</h2>

          {/* Intro / identity */}
          <div className="about--description">
            <p className="about--paragraph">
              I'm a Master's graduate from Griffith University (Information Technology), now
              focusing on full‑stack development. I learn fast, communicate clearly, and stay calm
              under pressure—delivering reliable results when timelines are tight.
            </p>

            <p className="about--paragraph">
              My toolkit centers on React, TypeScript, and C#, and I've completed two internships
              plus several side projects where I shipped real features, collaborated in Agile teams,
              and improved user experience with thoughtful UI.
            </p>

            {/* Personality / strengths as bullet points */}
            <div className="about--personality">
              <h3 className="personality--title">Key Strengths:</h3>
              <ul className="personality--list">
                <li>Fast Learner</li>
                <li>Calm Under Pressure</li>
                <li>Team‑oriented Communicator</li>
                <li>Problem‑solver</li>
                <li>Ownership Mindset</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Part 2: Graduation photos with fade-in effect */}
        <div className="about--photos">
          <div className="graduation--photos">
            <figure className="graduation--photo graduation--photo--1">
              <img src="./img/graduation1.jpg" alt="Graduation ceremony" />
            </figure>
            <figure className="graduation--photo graduation--photo--2">
              <img src="./img/graduation2.jpg" alt="Graduation celebration" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
