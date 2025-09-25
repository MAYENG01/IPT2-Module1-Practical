// Add Subject Function
document.getElementById('addSubject').addEventListener('click', function() {
    const code = document.getElementById('subjectCode').value;
    const name = document.getElementById('subjectName').value;
    const units = document.getElementById('units').value;

    // Check if all fields are filled
    if (!code || !name || !units) {
        alert('Please fill in all fields');
        return;
    }

    const table = document.getElementById('subject-table-content');
    const row = document.createElement('tr');
    row.innerHTML = <td>${code}</td><td>${name}</td><td>${units}</td>;
    table.appendChild(row);

    // Clear inputs
    document.getElementById('subjectForm').reset();
});