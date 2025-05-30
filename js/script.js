function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.style.color = "#ff0000";
    }
}

function clearError(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = "";
    }
}

function validateName(input) {
    const value = input.value.trim();
    if (!value) {
        showError("studentNameError", "Sila masukkan nama pelajar.");
    } else {
        clearError("studentNameError");
    }
}

function validateIC(input) {
    const value = input.value.trim();
    if (!value) {
        showError("studentICError", "Sila masukkan nombor kad pengenalan.");
    } else if (!/^\d{12}$/.test(value)) {
        showError("studentICError", "Nombor kad pengenalan mestilah 12 digit.");
    } else {
        clearError("studentICError");
    }
}

function validateStudentNo(input) {
    const value = input.value.trim();
    if (!value) {
        showError("studentNoError", "Sila masukkan nombor pelajar.");
    } else if (!/^\d{10}$/.test(value)) {
        showError("studentNoError", "No. Pelajar tidak sah.");
    } else {
        clearError("studentNoError");
    }
}

function toggleSemesterOther(select) {
    const otherInput = document.getElementById("semesterOther");
    if (otherInput) {
        if (select.value === "lain-lain") {
            otherInput.style.display = "block";
            otherInput.setAttribute("required", "required");
        } else {
            otherInput.style.display = "none";
            otherInput.removeAttribute("required");
            otherInput.value = "";
            clearError("semesterError");
        }
    }
}

function validateSemesterOther(input) {
    const semesterSelect = document.getElementById("semester");
    const value = input.value.trim();
    const semesterValue = parseInt(value);
    if (semesterSelect && semesterSelect.value === "lain-lain") {
        if (!value) {
            showError("semesterError", "Sila masukkan semester.");
        } else if (isNaN(semesterValue) || semesterValue <= 9) {
            showError("semesterError", "Semester mestilah lebih daripada 9 untuk pilihan Lain-lain.");
        } else {
            clearError("semesterError");
        }
    }
}

function validatePhone(input) {
    const value = input.value.trim();
    if (!value) {
        showError("phoneError", "Sila masukkan nombor telefon.");
    } else if (!/^\d{10,11}$/.test(value)) {
        showError("phoneError", "Nombor telefon mestilah 10-11 digit.");
    } else {
        clearError("phoneError");
    }
}

function validateProgram(input) {
    const value = input.value.trim();
    if (!value) {
        showError("programError", "Sila masukkan kod program.");
    } else if (value.length < 2) {
        showError("programError", "Kod program mestilah sekurang-kurangnya 2 aksara.");
    } else {
        clearError("programError");
    }
}

function restrictGPAInput(event) {
    const charCode = event.charCode;
    const input = event.target;
    const value = input.value;
    if (charCode !== 46 && charCode !== 8 && charCode !== 9 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
    }
    if (charCode === 46 && value.includes(".")) {
        event.preventDefault();
    }
    if (value.length >= 4 && charCode !== 8 && charCode !== 9) {
        event.preventDefault();
    }
}

function validateGPA(input) {
    const value = input.value.trim();
    const gpaValue = parseFloat(value);
    if (!value) {
        showError("gpaError", "Sila masukkan GPA/CGPA.");
    } else if (!/^\d\.\d{2}$/.test(value) || isNaN(gpaValue) || gpaValue < 0 || gpaValue > 4.00) {
        showError("gpaError", "GPA/CGPA mestilah antara 0.00 hingga 4.00.");
    } else {
        clearError("gpaError");
    }
}

function toggleSponsorshipOther(select) {
    const otherInput = document.getElementById("sponsorshipOther");
    if (otherInput) {
        if (select.value === "lain-lain") {
            otherInput.style.display = "block";
            otherInput.setAttribute("required", "required");
        } else {
            otherInput.style.display = "none";
            otherInput.removeAttribute("required");
            otherInput.value = "";
            clearError("sponsorshipError");
        }
    }
}

function validateSponsorshipOther(input) {
    const sponsorshipSelect = document.getElementById("sponsorship");
    const value = input.value.trim();
    if (sponsorshipSelect && sponsorshipSelect.value === "lain-lain") {
        if (!value) {
            showError("sponsorshipError", "Sila nyatakan tajaan/pinjaman.");
        } else if (value.length < 2) {
            showError("sponsorshipError", "Tajaan/pinjaman mestilah sekurang-kurangnya 2 aksara.");
        } else {
            clearError("sponsorshipError");
        }
    }
}

function validateAccountNo(input) {
    const value = input.value.trim();
    if (!value) {
        showError("accountNoError", "Sila masukkan nombor akaun.");
    } else if (!/^\d{14}$/.test(value)) {
        showError("accountNoError", "Nombor akaun mestilah 14 digit.");
    } else {
        clearError("accountNoError");
    }
}

function validateGuardianName(input) {
    const value = input.value.trim();
    if (!value) {
        showError("guardianNameError", "Sila masukkan nama waris.");
    } else {
        clearError("guardianNameError");
    }
}

function toggleRelationshipOther(select) {
    const otherInput = document.getElementById("relationshipOther");
    if (otherInput) {
        if (select.value === "lain-lain") {
            otherInput.style.display = "block";
            otherInput.setAttribute("required", "required");
        } else {
            otherInput.style.display = "none";
            otherInput.removeAttribute("required");
            otherInput.value = "";
            clearError("relationshipError");
        }
    }
}

function validateRelationshipOther(input) {
    const relationshipSelect = document.getElementById("relationship");
    const value = input.value.trim();
    if (relationshipSelect && relationshipSelect.value === "lain-lain") {
        if (!value) {
            showError("relationshipError", "Sila nyatakan hubungan.");
        } else if (value.length < 2) {
            showError("relationshipError", "Hubungan mestilah sekurang-kurangnya 2 aksara.");
        } else {
            clearError("relationshipError");
        }
    }
}

function validateIncome(input) {
    const value = input.value.trim();
    const incomeValue = parseFloat(value);
    if (!value) {
        showError("incomeError", "Sila masukkan pendapatan.");
    } else if (isNaN(incomeValue) || incomeValue < 0) {
        showError("incomeError", "Pendapatan mestilah nombor positif.");
    } else {
        clearError("incomeError");
    }
}

function validateAmount(input) {
    const value = input.value.trim();
    const amountValue = parseFloat(value);
    if (!value) {
        showError("amountError", "Sila masukkan jumlah yang dimohon.");
    } else if (isNaN(amountValue) || amountValue <= 0) {
        showError("amountError", "Jumlah yang dimohon mestilah nombor positif.");
    } else {
        clearError("amountError");
    }
}

function validateForm(event) {
    event.preventDefault();

    const form = document.getElementById("applicationForm");
    if (!form) {
        return false;
    }

    const name = document.getElementById("studentName").value.trim();
    const ic = document.getElementById("studentIC").value.trim();
    const studentNo = document.getElementById("studentNo").value.trim();
    const semesterSelect = document.getElementById("semester");
    const semesterOther = document.getElementById("semesterOther").value.trim();
    const semester = semesterSelect.value === "lain-lain" ? semesterOther : semesterSelect.value;
    const phone = document.getElementById("phone").value.trim();
    const program = document.getElementById("program").value.trim();
    const gpa = document.getElementById("gpa").value.trim();
    const sponsorshipSelect = document.getElementById("sponsorship");
    const sponsorshipOther = document.getElementById("sponsorshipOther").value.trim();
    const sponsorship = sponsorshipSelect.value === "lain-lain" ? sponsorshipOther : sponsorshipSelect.value;
    const accountNo = document.getElementById("accountNo").value.trim();
    const guardianName = document.getElementById("guardianName").value.trim();
    const relationshipSelect = document.getElementById("relationship");
    const relationshipOther = document.getElementById("relationshipOther").value.trim();
    const relationship = relationshipSelect.value === "lain-lain" ? relationshipOther : relationshipSelect.value;
    const income = parseFloat(document.getElementById("income").value.trim());
    const amount = parseFloat(document.getElementById("amount").value.trim());

    let hasError = false;

    if (!name) {
        showError("studentNameError", "Sila masukkan nama pelajar.");
        hasError = true;
    } else {
        validateName(document.getElementById("studentName"));
        if (document.getElementById("studentNameError").textContent) hasError = true;
    }

    if (!ic) {
        showError("studentICError", "Sila masukkan nombor kad pengenalan.");
        hasError = true;
    } else {
        validateIC(document.getElementById("studentIC"));
        if (document.getElementById("studentICError").textContent) hasError = true;
    }

    if (!studentNo) {
        showError("studentNoError", "Sila masukkan nombor pelajar.");
        hasError = true;
    } else {
        validateStudentNo(document.getElementById("studentNo"));
        if (document.getElementById("studentNoError").textContent) hasError = true;
    }

    if (!semesterSelect.value) {
        showError("semesterError", "Sila pilih semester.");
        hasError = true;
    } else if (semesterSelect.value === "lain-lain") {
        validateSemesterOther(document.getElementById("semesterOther"));
        if (document.getElementById("semesterError").textContent) hasError = true;
    } else {
        clearError("semesterError");
    }

    if (!phone) {
        showError("phoneError", "Sila masukkan nombor telefon.");
        hasError = true;
    } else {
        validatePhone(document.getElementById("phone"));
        if (document.getElementById("phoneError").textContent) hasError = true;
    }

    if (!program) {
        showError("programError", "Sila masukkan kod program.");
        hasError = true;
    } else {
        validateProgram(document.getElementById("program"));
        if (document.getElementById("programError").textContent) hasError = true;
    }

    if (!gpa) {
        showError("gpaError", "Sila masukkan GPA/CGPA.");
        hasError = true;
    } else {
        validateGPA(document.getElementById("gpa"));
        if (document.getElementById("gpaError").textContent) hasError = true;
    }

    if (!sponsorshipSelect.value) {
        showError("sponsorshipError", "Sila pilih tajaan/pinjaman.");
        hasError = true;
    } else if (sponsorshipSelect.value === "lain-lain") {
        validateSponsorshipOther(document.getElementById("sponsorshipOther"));
        if (document.getElementById("sponsorshipError").textContent) hasError = true;
    } else {
        clearError("sponsorshipError");
    }

    if (!accountNo) {
        showError("accountNoError", "Sila masukkan nombor akaun.");
        hasError = true;
    } else {
        validateAccountNo(document.getElementById("accountNo"));
        if (document.getElementById("accountNoError").textContent) hasError = true;
    }

    if (!guardianName) {
        showError("guardianNameError", "Sila masukkan nama waris.");
        hasError = true;
    } else {
        validateGuardianName(document.getElementById("guardianName"));
        if (document.getElementById("guardianNameError").textContent) hasError = true;
    }

    if (!relationshipSelect.value) {
        showError("relationshipError", "Sila pilih hubungan.");
        hasError = true;
    } else if (relationshipSelect.value === "lain-lain") {
        validateRelationshipOther(document.getElementById("relationshipOther"));
        if (document.getElementById("relationshipError").textContent) hasError = true;
    } else {
        clearError("relationshipError");
    }

    if (isNaN(income)) {
        showError("incomeError", "Sila masukkan pendapatan.");
        hasError = true;
    } else {
        validateIncome(document.getElementById("income"));
        if (document.getElementById("incomeError").textContent) hasError = true;
    }

    if (isNaN(amount)) {
        showError("amountError", "Sila masukkan jumlah yang dimohon.");
        hasError = true;
    } else {
        validateAmount(document.getElementById("amount"));
        if (document.getElementById("amountError").textContent) hasError = true;
    }

    if (hasError) {
        alert("Sila betulkan ralat dalam borang sebelum menghantar.");
        return false;
    }

    const formData = {
        name,
        ic,
        studentNo,
        semester,
        phone,
        program,
        gpa,
        sponsorship,
        accountNo,
        guardianName,
        relationship,
        income,
        amount
    };
    localStorage.setItem("formData", JSON.stringify(formData));

    showSuccessModal();
    return false;
}

function showSuccessModal() {
    const modal = document.getElementById("successModal");
    if (modal) {
        modal.style.display = "flex";
        setTimeout(() => {
            closeModal();
            window.location.href = "review.html";
        }, 3000);
    }
}

function closeModal() {
    const modal = document.getElementById("successModal");
    if (modal) {
        modal.style.display = "none";
    }
}

function populateReview() {
    const reviewSection = document.getElementById("reviewSection");
    if (!reviewSection) {
        return;
    }

    reviewSection.style.display = "block";

    const formDataRaw = localStorage.getItem("formData");
    if (!formDataRaw) {
        alert("Tiada data untuk disemak. Sila isi borang terlebih dahulu.");
        window.location.href = "form.html";
        return;
    }

    let formData;
    try {
        formData = JSON.parse(formDataRaw);
    } catch (e) {
        alert("Ralat memproses data. Sila isi borang semula.");
        window.location.href = "form.html";
        return;
    }

    const fieldMappings = {
        "reviewStudentName": "name",
        "reviewStudentIC": "ic",
        "reviewStudentNo": "studentNo",
        "reviewSemester": "semester",
        "reviewPhone": "phone",
        "reviewProgram": "program",
        "reviewGPA": "gpa",
        "reviewSponsorship": "sponsorship",
        "reviewAccountNo": "accountNo",
        "reviewGuardianName": "guardianName",
        "reviewRelationship": "relationship",
        "reviewIncome": "income",
        "reviewAmount": "amount"
    };

    for (const [fieldId, dataKey] of Object.entries(fieldMappings)) {
        const element = document.getElementById(fieldId);
        if (element) {
            element.textContent = formData[dataKey] || "";
        }
    }

    alert("Borang berjaya dihantar! Sila semak maklumat anda di bawah.");
}

function resetForm() {
    const form = document.getElementById("applicationForm");
    if (form) {
        form.reset();
        const errorElements = document.getElementsByClassName("error-message");
        for (let element of errorElements) {
            element.textContent = "";
        }
        document.getElementById("semesterOther").style.display = "none";
        document.getElementById("sponsorshipOther").style.display = "none";
        document.getElementById("relationshipOther").style.display = "none";
    } else {
        localStorage.removeItem("formData");
        window.location.href = "form.html";
    }
}

function goToHome() {
    localStorage.removeItem("formData");
    window.location.href = "index.html";
}

function printDocument() {
    const printContent = document.getElementById("printableContent");
    if (!printContent) {
        return;
    }
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent.innerHTML;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
}

document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("focus", function() {
            const errorId = this.id + "Error";
            clearError(errorId);
        });
    });

    populateReview();
});