import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const Profile = () => {
  const { user } = useAuth();
  const [phone, setPhone] = useState(user?.profile?.phone || '+91 98765 43210');
  const [skills, setSkills] = useState(user?.profile?.skills || ['React', 'Node.js', 'MongoDB', 'Python']);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  return (
    <div className="max-w-4xl flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold font-manrope text-white mb-2">Student Profile</h1>
        <p className="text-gray-400 text-sm">Manage your profile details and technical skill sets.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Info card */}
        <Card className="bg-primary/25 border-white/5 md:col-span-2">
          <h3 className="text-lg font-bold text-white mb-6 border-b border-white/5 pb-4">Personal Details</h3>
          <div className="flex flex-col gap-4 text-sm text-gray-300">
            <div className="grid grid-cols-3">
              <span className="text-gray-500 font-semibold">NAME:</span>
              <span className="col-span-2 text-white">{user?.name}</span>
            </div>
            <div className="grid grid-cols-3">
              <span className="text-gray-500 font-semibold">EMAIL:</span>
              <span className="col-span-2 text-white">{user?.email}</span>
            </div>
            <div className="grid grid-cols-3 items-center">
              <span className="text-gray-500 font-semibold">PHONE:</span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="col-span-2 bg-primary-dark/80 border border-white/10 rounded px-3 py-1.5 text-white focus:outline-none focus:border-accent"
              />
            </div>
          </div>
          <Button variant="accent" className="mt-8 text-sm" onClick={() => alert('Profile updated successfully!')}>
            Save Changes
          </Button>
        </Card>

        {/* Skill card */}
        <Card className="bg-primary/25 border-white/5 flex flex-col gap-6">
          <h3 className="text-lg font-bold text-white border-b border-white/5 pb-4">Skills</h3>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span key={idx} className="bg-secondary/10 border border-secondary/20 text-accent text-xs px-2.5 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>

          <form onSubmit={handleAddSkill} className="flex gap-2 mt-4">
            <input
              type="text"
              placeholder="Add skill..."
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="bg-primary-dark/80 border border-white/10 rounded px-3 py-1.5 text-xs text-white focus:outline-none w-full"
            />
            <Button type="submit" variant="primary" className="py-1 px-3 text-xs shrink-0">
              Add
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
