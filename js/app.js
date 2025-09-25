document.getElementById('addStudentButton').addEventListener('click', function() {
    const id = document.getElementById('idNumber').value;
    const first = document.getElementById('firstName').value;
    const middle = document.getElementById('middleName').value;
    const last = document.getElementById('lastName').value;

    // Check if all fields are filled
    if (!id || !first || !middle || !last) {
        alert('Please fill in all fields');
        return;
    }

    const table = document.getElementById('table-content');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${id}</td><td>${first}</td><td>${middle}</td><td>${last}</td>`;
    table.appendChild(row);

    // Clear inputs
    document.getElementById('studentForm').reset();
});
