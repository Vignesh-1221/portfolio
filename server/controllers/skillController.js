import Skill from '../models/Skill.js';

// Mock data matching the frontend structure
const mockSkills = {
  categories: [
    {
      title: 'Languages',
      icon: '💻',
      color: 'bg-blue-600',
      skills: [
        { icon: '/skills/python.png', name: 'Python' },
        { icon: '/skills/java.png', name: 'Java' },
        { icon: '/skills/c.png', name: 'C' }
      ]
    },
    {
      title: 'Web Dev',
      icon: '🌐',
      color: 'bg-green-600',
      skills: [
        { icon: '/skills/reactjs.png', name: 'React' },
        { icon: '/skills/nodejs.png', name: 'Node.js' },
        { icon: '/skills/expressjs.png', name: 'Express' },
        { icon: '/skills/html.png', name: 'HTML' },
        { icon: '/skills/css.png', name: 'CSS' },
        { icon: '/skills/tailwind.png', name: 'TailwindCSS' }
      ]
    },
    {
      title: 'Databases',
      icon: '🗄️',
      color: 'bg-purple-600',
      skills: [
        { icon: '/skills/postgres.png', name: 'PostgreSQL' },
        { icon: '/skills/mongodb-logo.svg', name: 'MongoDB' }
      ]
    },
    {
      title: 'ML/AI',
      icon: '🤖',
      color: 'bg-red-600',
      skills: [
        { icon: '/skills/python.png', name: 'Python' },
        { icon: '/skills/numpy.png', name: 'NumPy' },
        { icon: '/skills/pandas.png', name: 'Pandas' },
        { icon: '/skills/sklearn-logo.svg', name: 'Scikit-learn' },
        { icon: '/skills/tensorflow-logo.svg', name: 'TensorFlow' }
      ]
    },
    {
      title: 'Tools',
      icon: '🛠️',
      color: 'bg-orange-600',
      skills: [
        { icon: '/skills/git.png', name: 'Git' },
        { icon: '/skills/postman.png', name: 'Postman' }
      ]
    }
  ]
};

// Get all skills
export const getSkills = async (req, res) => {
  try {
    // Try to fetch from database first
    const skills = await Skill.find().sort({ category: 1, name: 1 });
    
    // If no skills in DB, return mock data
    if (skills.length === 0) {
      return res.json(mockSkills);
    }
    
    // Transform database skills to match frontend structure
    const categories = {};
    skills.forEach(skill => {
      if (!categories[skill.category]) {
        categories[skill.category] = {
          title: skill.category,
          icon: getCategoryIcon(skill.category),
          color: getCategoryColor(skill.category),
          skills: []
        };
      }
      categories[skill.category].skills.push({
        icon: skill.icon,
        name: skill.name
      });
    });
    
    res.json({ categories: Object.values(categories) });
  } catch (error) {
    console.error('Error fetching skills:', error);
    // Fallback to mock data on error
    res.json(mockSkills);
  }
};

// Helper functions
function getCategoryIcon(category) {
  const icons = {
    'Languages': '💻',
    'Web Dev': '🌐',
    'Databases': '🗄️',
    'ML/AI': '🤖',
    'Tools': '🛠️'
  };
  return icons[category] || '💻';
}

function getCategoryColor(category) {
  const colors = {
    'Languages': 'bg-blue-600',
    'Web Dev': 'bg-green-600',
    'Databases': 'bg-purple-600',
    'ML/AI': 'bg-red-600',
    'Tools': 'bg-orange-600'
  };
  return colors[category] || 'bg-gray-600';
}
