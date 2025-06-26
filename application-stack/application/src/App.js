import React, { useEffect, useState } from 'react';

function App() {
  const [backendMessage, setBackendMessage] = useState('Loading...');

  useEffect(() => {
    // Replace this URL with your actual backend route URL
    const backendUrl = 'https://backend-harishkumar-nimmala-dev.apps.rm3.7wse.p1.openshiftapps.com/api/message';

    fetch(backendUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setBackendMessage(data.message))
      .catch((error) => setBackendMessage('Error fetching backend message'));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Hello from React frontend on OpenShift!</h1>
      <p>Backend says: {backendMessage}</p>
    </div>
  );
}

export default App;
