import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginGuard = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('AdminVerified');
    console.log(token);
    
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  return children;
};

export default LoginGuard;
