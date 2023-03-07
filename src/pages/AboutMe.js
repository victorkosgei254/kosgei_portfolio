import "./css/aboutme.css"
const AboutMe = () =>
{

    return(
        <div className="aboutme">
            <div className="hero">
                <h1>Kosgei Victor</h1>
                <h3>Software Contractor </h3>
            </div>
            <div className="contents">
                <div className="cover">
                    <h1>About Me</h1>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                </p>
                </div>
                <div className="contactme">
                    <h1>Contacts</h1>
                    <ul>
                        <li>LinkedIn</li>
                        <li>Email</li>
                        <li>Twitter</li>
                        <li>Medium</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
