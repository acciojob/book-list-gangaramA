//your JS code here. If required.
document.getElementById('submit').addEventListener('click', addBook);

function addBook(event) {
    event.preventDefault();

    // Get input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Create a new row
    const row = document.createElement('tr');

    // Insert title, author, and ISBN into the row
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="btn btn-danger btn-sm delete">X</button></td>
    `;

    // Append the row to the book list
    document.getElementById('book-list').appendChild(row);

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event listener to remove a book
document.getElementById('book-list').addEventListener('click', removeBook);

function removeBook(event) {
    if (event.target.classList.contains('delete')) {
        const row = event.target.parentElement.parentElement;
        row.remove();
    }
}

