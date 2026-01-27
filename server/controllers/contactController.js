import Contact from '../models/Contact.js';

// Create a contact message
export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    const contact = await Contact.create({
      name,
      email,
      message
    });
    
    res.status(201).json({ 
      success: true, 
      message: 'Contact message received successfully',
      data: contact 
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(400).json({ error: error.message });
  }
};

// Get all contact messages (for admin use, optional)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
