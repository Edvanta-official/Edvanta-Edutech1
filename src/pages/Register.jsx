import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await register(name, email, password, role);
    setLoading(false);
    if (res.success) {
      if (role === 'admin') {
        navigate('/dashboard/admin/analytics');
      } else {
        navigate('/dashboard/student/profile');
      }
    } else {
      setError(res.message || 'Registration failed.');
    }
  };

  return (
    <div className="bg-bgDark min-h-[80vh] flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md bg-primary/30 border-white/5 p-8">
        <h2 className="text-2xl font-manrope font-extrabold text-white text-center mb-1">Create Account</h2>
        <p className="text-gray-400 text-xs text-center mb-6">
          Get started with premium upskilling
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs py-2 px-3 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-xs text-gray-500 font-semibold block mb-1">FULL NAME</label>
            <input
              type="text"
              required
              placeholder="e.g. John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-primary-dark/80 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="text-xs text-gray-500 font-semibold block mb-1">EMAIL ADDRESS</label>
            <input
              type="email"
              required
              placeholder="e.g. john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-primary-dark/80 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="text-xs text-gray-500 font-semibold block mb-1">ACCOUNT TYPE</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-primary-dark/80 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
            >
              <option value="student">Student / Learner</option>
              <option value="admin">Administrator</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-500 font-semibold block mb-1">PASSWORD</label>
            <input
              type="password"
              required
              placeholder="Choose password (min 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-primary-dark/80 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent"
            />
          </div>

          <Button type="submit" variant="accent" className="w-full py-3 mt-2" disabled={loading}>
            {loading ? 'Creating account...' : 'Sign Up'}
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-secondary hover:text-accent font-semibold transition-colors">
            Login here
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default Register;
