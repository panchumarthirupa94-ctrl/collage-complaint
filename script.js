// GLOBAL ARRAY TO STORE COMPLAINTS
let complaints = [];

// FUNCTION TO SUBMIT COMPLAINT
function submitcomplaint() {
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const dept = document.getElementById("dept").value;
    const title = document.getElementById("title")?.value || document.getElementById(" title")?.value;
    const desc = document.getElementById("desc").value;

    if (!name || !roll || !dept || !title || !desc) {
        alert("Please fill all the fields!");
        return;
    }

    const id = complaints.length + 1;
    complaints.push({ id, name, roll, dept, title, desc, status: "Pending" });

    alert("Complaint submitted successfully! Your Complaint ID: " + id);

    // Clear form
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
}

// FUNCTION TO LOAD COMPLAINTS IN ADMIN PAGE
function loadComplaints() {
    const table = document.getElementById("admin Table");
    table.innerHTML = "";

    complaints.forEach(c => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${c.id}</td>
            <td>${c.name}</td>
            <td>${c.title}: ${c.desc}</td>
            <td class="${c.status.toLowerCase()}">${c.status}</td>
            <td>
                <button onclick="resolveComplaint(${c.id})">Resolve</button>
            </td>
        `;
        table.appendChild(row);
    });
}

// FUNCTION TO MARK COMPLAINT AS RESOLVED
function resolveComplaint(id) {
    const complaint = complaints.find(c => c.id === id);
    if (complaint) {
        complaint.status = "Resolved";
        loadComplaints();
        alert("Complaint ID " + id + " marked as Resolved!");
    }
}

// FUNCTION TO LOAD STATUS PAGE
function loadStatus() {
    const table = document.getElementById("statusTable");
    table.innerHTML = "";

    complaints.forEach(c => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${c.id}</td>
            <td>${c.title}: ${c.desc}</td>
            <td class="${c.status.toLowerCase()}">${c.status}</td>
        `;
        table.appendChild(row);
    });
}
