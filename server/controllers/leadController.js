import Lead from '../models/Lead.js';

export const createLead = async (req, res) => {
  const { name, email, phone, interestedIn } = req.body;
  try {
    const lead = await Lead.create({ name, email, phone, interestedIn });
    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find({});
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
