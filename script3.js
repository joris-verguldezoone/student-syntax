let fetchedData;

const fetch = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    fetchedData = await response.json();
    displayResult();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

function displayResult() {
  console.log('Fetched data:', fetchedData);
}

const login = async () => {
  try {
    const formData = new FormData();
    formData.append('username', 'exampleUser');
    formData.append('password', 'examplePassword');

    const response = await fetch('https://api.example.com/login', {
      method: 'POST',
      body: formData
    });
    if (!response.ok) {
      throw new Error('Failed to login');
    }
    const responseData = await response.json();
    console.log('Login successful:', responseData);
  } catch (error) {
    console.error('Error logging in:', error);
  }
};