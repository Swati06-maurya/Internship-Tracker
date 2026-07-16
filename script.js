const API_URL = "http://localhost:5000/api/internships";
const internshipForm = document.getElementById("internshipForm");
const companyInput = document.getElementById("company");
const roleInput = document.getElementById("role");
const locationInput = document.getElementById("location");
const dateInput = document.getElementById("applicationDate");
const statusInput = document.getElementById("status");
const jobLinkInput = document.getElementById("jobLink");
const notesInput = document.getElementById("notes");
const tableBody = document.getElementById("tableBody");
const totalApplications = document.getElementById("totalApplications");
const interviews = document.getElementById("interviews");
const offers = document.getElementById("offers");
const rejected = document.getElementById("rejected");
let internships = [];
let editIndex = null;
const submitBtn = document.getElementById("submitBtn");
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const sortOption = document.getElementById("sortOption");

internshipForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const internship = {
        company: companyInput.value,
        role: roleInput.value,
        location: locationInput.value,
        applicationDate: dateInput.value,
        status: statusInput.value,
        jobLink: jobLinkInput.value,
        notes: notesInput.value
    };
   try {
    let response;
    if (editIndex === null) {
        // ADD NEW INTERNSHIP
        response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(internship)
        });
    } else {
        // UPDATE EXISTING INTERNSHIP
        const id = internships[editIndex]._id;
        response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(internship)
        });
    }

    if (!response.ok) {
        throw new Error("Failed to save internship");
    }

    editIndex = null;
    internshipForm.reset();
    submitBtn.innerText = "Add Internship";
    loadInternships();
}

catch (error) {
    console.error(error);
    alert("Error saving internship");
}
});

function displayInternships(internshipList = internships) {
    tableBody.innerHTML = "";
    internshipList.forEach((internship, index) => {
        const row = `
            <tr>
                <td>${internship.company}</td>
                <td>${internship.role}</td>
                <td>
                    <span class="status-badge badge-${internship.status.toLowerCase().replace(" ", "-")}">
                        ${internship.status}
                    </span>
                </td>
                <td>${internship.applicationDate}</td>
                <td>
    <button
    class="action-btn edit-btn"
    onclick="editInternship(${index})">

    Edit

   </button>
    <button
        class="action-btn delete-btn"
        onclick="deleteInternship(${index})">
        Delete
    </button>
            </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}
function updateDashboard() {
    totalApplications.textContent = internships.length;
    let interviewCount = 0;
    let selectedCount = 0;
    let rejectedCount = 0;
    internships.forEach((internship) => {
        if (internship.status === "Interview") {
            interviewCount++;
        }
        if (internship.status === "Selected") {
            selectedCount++;
        }
        if (internship.status === "Rejected") {
            rejectedCount++;
        }
    });
    interviews.textContent = interviewCount;
    offers.textContent = selectedCount;
    rejected.textContent = rejectedCount;
}

async function deleteInternship(index) {
    const confirmDelete = confirm(
        "Are you sure you want to delete this internship?"
    );
    if (!confirmDelete) {
        return;
    }
    try {
        const id = internships[index]._id;
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            throw new Error("Delete failed");
        }
        loadInternships();
    }
    catch (error) {
        console.error(error);
        alert("Delete failed");
    }
}
function editInternship(index) {
    const internship = internships[index];
    companyInput.value = internship.company;
    roleInput.value = internship.role;
    locationInput.value = internship.location;
    dateInput.value = internship.applicationDate;
    statusInput.value = internship.status;
    jobLinkInput.value = internship.jobLink;
    notesInput.value = internship.notes;
    editIndex = index;
    submitBtn.innerText = "Update Internship";
}

function filterInternships() {
    const searchText = searchInput.value.toLowerCase();
    const selectedStatus = statusFilter.value;
    const filteredInternships = internships.filter(function (internship) {
        const matchesSearch =
            internship.company.toLowerCase().includes(searchText) ||
            internship.role.toLowerCase().includes(searchText) ||
            internship.location.toLowerCase().includes(searchText);
        const matchesStatus =
            selectedStatus === "All" ||
            internship.status === selectedStatus;
        return matchesSearch && matchesStatus;
    });
    const selectedSort = sortOption.value;
    console.log(selectedSort);
    if (selectedSort === "companyAsc") {
        filteredInternships.sort(function (a, b) {
            return a.company.localeCompare(b.company);
        });
    }
    displayInternships(filteredInternships);

}
searchInput.addEventListener("input", filterInternships);
statusFilter.addEventListener("change", filterInternships);
sortOption.addEventListener("change", filterInternships);

async function loadInternships() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch internships");
        }
        internships = await response.json();
        displayInternships();
        updateDashboard();
    } catch (error) {
        console.error("Error loading internships:", error);
        alert("Cannot connect to backend.");
    }
}
loadInternships();