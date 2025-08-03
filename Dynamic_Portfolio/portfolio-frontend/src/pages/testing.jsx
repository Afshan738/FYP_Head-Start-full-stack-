import React, { useState } from 'react';
import axios from 'axios';
const API_BASE_URL = 'http://localhost:5000/api';

function AuthTestPage() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [projectTitle, setProjectTitle] = useState('New Test Project');
  const [projectDescription, setProjectDescription] = useState('This was created with a JWT.');
  const [message, setMessage] = useState('Please log in to test protected routes.');
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('Logging in...');
    try {
      const response = await axios.post(`${API_BASE_URL}/admin/login`, {
        username,
        password,
      });

      const receivedToken = response.data.token;
      setToken(receivedToken);
      localStorage.setItem('token', receivedToken);
      setMessage(' Login successful! You can now test the protected route.');
    } catch (error) {
      setMessage(` Login failed: ${error.response?.data?.message || error.message}`);
      setToken(null);
      localStorage.removeItem('token');
    }
  };
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setMessage('You have been logged out.');
  };
  const handleCreateProject = async (e) => {
    e.preventDefault();
    setMessage('Creating project...');

    if (!token) {
      setMessage(' You must be logged in to create a project.');
      return;
    }

    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const projectData = { title: projectTitle, description: projectDescription };
      
      const response = await axios.post(`${API_BASE_URL}/projects`, projectData, config);

      setMessage(`Project created successfully! ID: ${response.data._id}`);
    } catch (error) {
      setMessage(` Project creation failed: ${error.response?.data?.message || error.message}`);
    }
  };
  const styles = {
    container: { fontFamily: 'sans-serif', padding: '2rem', maxWidth: '600px', margin: 'auto' },
    statusBox: { backgroundColor: '#f0f0f0', border: '1px solid #ccc', padding: '1rem', borderRadius: '5px', marginBottom: '2rem', wordWrap: 'break-word' },
    formSection: { border: '1px solid #ddd', padding: '1.5rem', borderRadius: '5px', marginBottom: '2rem' },
    inputGroup: { marginBottom: '1rem' },
    button: { marginTop: '1rem', cursor: 'pointer', padding: '0.5rem 1rem' },
    logoutButton: { backgroundColor: '#f44336', color: 'white' },
    createButton: { backgroundColor: '#4CAF50', color: 'white' },
  };

  return (
    <div style={styles.container}>
      <h1>JWT Authentication & Authorization Tester</h1>
      <div style={styles.statusBox}>
        <strong>Status:</strong> {message}
      </div>

      <hr />

      {!token ? (
        <div style={styles.formSection}>
          <h2>Step 1: Login</h2>
          <form onSubmit={handleLogin}>
            <div style={styles.inputGroup}>
              <label>Username: </label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div style={styles.inputGroup}>
              <label>Password: </label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" style={styles.button}>Login</button>
          </form>
        </div>
      ) : (
        <div style={styles.formSection}>
          <h2>Step 2: Test Protected Route</h2>
          <p>You are logged in!</p>
          <button onClick={handleLogout} style={{...styles.button, ...styles.logoutButton}}>Logout</button>
          <form onSubmit={handleCreateProject} style={{ marginTop: '2rem' }}>
            <div style={styles.inputGroup}>
              <label>Project Title: </label>
              <input type="text" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} />
            </div>
            <div style={styles.inputGroup}>
              <label>Description: </label>
              <input type="text" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
            </div>
            <button type="submit" style={{...styles.button, ...styles.createButton}}>Create Project (Protected)</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AuthTestPage;