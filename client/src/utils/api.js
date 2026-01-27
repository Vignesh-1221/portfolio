const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    const data = await response.json();
    // Return null if data is invalid to signal failure
    if (!Array.isArray(data) || data.length === 0) {
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Return null on error to signal failure (frontend will use static data)
    return null;
  }
};

export const fetchSkills = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/skills`);
    if (!response.ok) {
      throw new Error('Failed to fetch skills');
    }
    const data = await response.json();
    // Return null if data is invalid to signal failure
    if (!data || !data.categories || !Array.isArray(data.categories) || data.categories.length === 0) {
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error fetching skills:', error);
    // Return null on error to signal failure (frontend will use static data)
    return null;
  }
};

export const submitContact = async (contactData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }
    return await response.json();
  } catch (error) {
    console.error('Error submitting contact:', error);
    throw error;
  }
};
