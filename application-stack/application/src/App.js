import React, { useState } from 'react';

function App() {
  const [backendMessage, setBackendMessage] = useState('');
  const [status, setStatus] = useState('Idle');

  const fetchBackendMessage = () => {
    setStatus('Loading...');
    const backendUrl = 'https://backend-harishkumar-nimmala-dev.apps.rm3.7wse.p1.openshiftapps.com/api/message';

    fetch(backendUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBackendMessage(data.message);
        setStatus('Success');
      })
      .catch((error) => {
        setBackendMessage('Error fetching backend message');
        setStatus('Error');
      });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Hello from React frontend on OpenShift!</h1>
      <button onClick={fetchBackendMessage} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Get Message from Backend
      </button>
      <p>Status: {status}</p>
      <p>Backend says: {backendMessage}</p>
    </div>
  );
}

export default App;
