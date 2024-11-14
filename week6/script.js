// Select the button and table body elements
const fetchButton = document.getElementById('fetchButton');
const tableBody = document.querySelector('#userTable tbody');

// Function to fetch and display user data
async function fetchUserData() {
    try {
        // Fetch data from the provided API
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        const users = data.users;  // Access the 'users' array from the API response

        // Clear any previous data in the table body
        tableBody.innerHTML = '';

        // Populate the table with specified columns: name, age, phone, image
        users.forEach(user => {
            const row = document.createElement('tr');
            
            // Name (first + last name combined)
            const nameCell = document.createElement('td');
            nameCell.textContent = `${user.firstName} ${user.lastName}`;
            row.appendChild(nameCell);

            // Age
            const ageCell = document.createElement('td');
            ageCell.textContent = user.age;
            row.appendChild(ageCell);

            // Phone
            const phoneCell = document.createElement('td');
            phoneCell.textContent = user.phone;
            row.appendChild(phoneCell);

            // Image
            const imageCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = user.image;
            img.alt = `${user.firstName}'s Image`;
            imageCell.appendChild(img);
            row.appendChild(imageCell);

            // Append the row to the table body
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Add an event listener to the button to fetch data on click
fetchButton.addEventListener('click', fetchUserData);
