// Add Student function
document.getElementById('addStudentButton').addEventListener('click', function() {
    const id = document.getElementById('idNumber').value;
    const first = document.getElementById('firstName').value;
    const middle = document.getElementById('middleName').value;
    const last = document.getElementById('lastName').value;

    if (!id || !first || !middle || !last) {
        alert('Please fill in all fields');
        return;
    }

    const table = document.getElementById('table-content');
    const row = document.createElement('tr');
    row.innerHTML = <td>${id}</td><td>${first}</td><td>${middle}</td><td>${last}</td>;
    table.appendChild(row);

    document.getElementById('studentForm').reset();
});

// Add Subject function
document.getElementById('addSubject').addEventListener('click', function() {
    const code = document.getElementById('subjectCode').value;
    const name = document.getElementById('subjectName').value;
    const units = document.getElementById('units').value;

    if (!code || !name || !units) {
        alert('Please fill in all fields');
        return;
    }

    const table = document.getElementById('table-content');
    const row = document.createElement('tr');
    row.innerHTML = <td>${code}</td><td>${name}</td><td>${units}</td>;
    table.appendChild(row);

    document.getElementById('subjectForm').reset();
});