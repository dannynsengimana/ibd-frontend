function fetchGreeting() {
    const name = document.getElementById('nameInput').value;

    fetch('http://localhost:3000/api/greet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    })
      .then(res => res.json())
      .then(data => {
        document.getElementById('greeting').innerText = data.greeting;
      })
      .catch(err => console.error('Error:', err));
  }
