import PropTypes from 'prop-types';
import './App.css';

function Avatar(props) {
  return (
    <img
      className='avatar'
      src={`../images/${props.photoName}`}
      alt='avatar image'
    />
  );
}
Avatar.propTypes = {
  photoName: PropTypes.string,
  fullName: PropTypes.string,
};

function Intro() {
  return (
    <div>
      <h1>Eric Carlier</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding, I like
        to climb a lot!
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className='skill-list'>
      {props.list.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill.skill}
          emoji={skill.emoji}
          color={skill.color}
        />
      ))}
    </div>
  );
}
SkillList.propTypes = {
  list: PropTypes.array,
};

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
Skill.propTypes = {
  color: PropTypes.string,
  skill: PropTypes.string,
  emoji: PropTypes.string,
};

function App() {
  return (
    <div className='card'>
      <Avatar photoName='robot1.png' />
      <div className='data'>
        <Intro />

        <SkillList
          list={[
            { skill: 'HTML+CSS', emoji: '😶‍🌫️', color: 'blue' },
            { skill: 'JavaScript', emoji: '🥳', color: 'orange' },
            { skill: 'Git & GitHub', emoji: '🤠', color: 'yellow' },
            { skill: 'Svelte', emoji: '👶', color: 'orangered' },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
