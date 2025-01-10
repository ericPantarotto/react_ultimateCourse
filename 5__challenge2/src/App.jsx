import PropTypes from 'prop-types';
import './App.css';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

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

function SkillList() {
  return (
    <div className='skill-list'>
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
}
SkillList.propTypes = {
  list: PropTypes.array,
};

function Skill({ skill, color, level }) {
  return (
    <div className='skill' style={{ backgroundColor: color }}>
      <span>{skill}</span>
      {level === 'beginner' && '😶‍🌫️'}
      {level === 'intermediate' && '🥳'}
      {level === 'advanced' && '🤠'}
    </div>
  );
}
Skill.propTypes = {
  skill: PropTypes.string,
  level: PropTypes.string,
  color: PropTypes.string,
};

function App() {
  return (
    <div className='card'>
      <Avatar photoName='robot1.png' />
      <div className='data'>
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

export default App;
