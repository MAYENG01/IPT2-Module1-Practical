document.getElementById('addSubject').addEventListener('click', function () {
    const code = document.getElementById('subjectCode').value.trim();
    const name = document.getElementById('subjectName').value.trim();
    const units = document.getElementById('units').value.trim();

    // Validate input fields
    if (!code || !name || !units) {
        alert('Please fill in all fields');
        return;
    }

    // Get the table body
    const table = document.getElementById('table-content');

    // Create a new row
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${code}</td>
        <td>${name}</td>
        <td>${units}</td>
    `;

    // Append the row to the table
    table.appendChild(row);

    // Reset the form after adding
    document.getElementById('subjectForm').reset();
});