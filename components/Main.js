import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Curriculum</h2>
          <p><b>Research Techniques</b></p>
          <p>Educational debate is impossible without building a strong academic foundation, and Impact Debate places special importance on this matter. Attendees will learn how to efficiently gather information on a variety of subject matters like economics, foreign affairs, and military doctrine. In addition to the traditional lecture setting where students learn the basics of this skill, our camp offers participants opportunities for one-on-one conferences with mentors who can help them through specific issues.</p>
          <hr />
          <p><b>Communication & Presentation</b></p>
          <p>Debaters need to be effective communicators; Impact Debate focuses on this necessity every day during camp. Students will be led by mentors through multiple speaking exercises that build confidence and fluency. Thanks to our diverse set of coaches and mentors, we are able to provide an effective communication strategies for any student. Debate is a portable skill, the tools students develop here will not only improve their success in the activity, it will also prepare them to become future leaders of their community.</p>
          <hr />
          <p><b>Mental Agility</b></p>
          <p>The team at Impact Debate developed drills and exercises that are geared towards improving a students "mental agility". For example, mentors will prompt students to brainstorm argument ideas under time constraints throughout the duration of the camp. In addition, Impact Debate's novel approach to topic lectures helps students discover patterns within complex topics and improve their ability to think on their feet. </p>
          
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Schedule</h2>
          <p>
            {"Summer Session: 10:00 AM to 2:00 PM every weekday from August 11 to 21."}
          </p>
          <p>Summer Session Final Tournament: Weekend of August 21.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Our Team</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <p>Impact Debate's Co-Founders Akshat Channashetti and Muthu Sundar are both rising seniors at Brookfield East High School. Having won numerous local tournaments since their freshman year, championing the WDCA State Tournament their sophomore year, and qualifying to Gold TOC with 5 bids their junior year, Brookfield East CS has a proven track record when it comes to public forum debate.</p>
          <hr></hr>
          <p><a href="">Meet the rest of the team.</a></p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main