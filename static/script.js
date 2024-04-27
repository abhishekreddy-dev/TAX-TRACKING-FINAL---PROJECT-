 // Fetch and display summary on page load
 window.onload = async function() {
    await fetchSummary();
}

// Fetch and display summary on due date change
document.getElementById('dueDate').addEventListener('change', async function() {
    await fetchSummary();
});

async function fetchSummary() {
    const dueDate = document.getElementById('dueDate').value;
    const response = await fetch(`/summary?dueDate=${dueDate}`);
    const data = await response.json();
    document.getElementById('summary').innerHTML = data.html;
}

// Edit Popup Functions
function openEditPopup(id, company, amount, paymentDate, status, dueDate, taxRate) {
    document.getElementById('editId').value = id;
    document.getElementById('editCompany').value = company;
    document.getElementById('editAmount').value = amount;
    document.getElementById('editPaymentDate').value = paymentDate;
    document.getElementById('editStatus').value = status;
    document.getElementById('editDueDate').value = dueDate;
    document.getElementById('editTaxRate').value = taxRate;
    document.getElementById('editPopup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeEditPopup() {
    document.getElementById('editPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

async function saveEdit() {
    const formData = new FormData(document.getElementById('editForm'));
    await fetch('/update', {
        method: 'POST',
        body: formData
    });
    location.reload(true);
    await fetchSummary();
    
    closeEditPopup();
}

async function deleteRecord(id) {
    if (confirm('Are you sure you want to delete this record?')) {
        await fetch(`/delete?id=${id}`, {
            method: 'DELETE'
        });
        location.reload(true);

        await fetchSummary();
    }
}