// Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    let isValid = true;
    const inputs = this.querySelectorAll('input[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('border-red-500');
            isValid = false;
        } else {
            input.classList.remove('border-red-500');
        }
    });

    if (!isValid) {
        e.preventDefault();
        alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
    }
});

// Input error handling
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value.trim()) {
            this.classList.remove('border-red-500');
        }
    });
});

// Show prediction modal
function showPrediction(cost) {
    const modal = document.getElementById('prediction-modal');
    const predictionValue = document.getElementById('prediction-value');
    
    predictionValue.textContent = `${cost.toLocaleString('vi-VN')} VND`;
    modal.classList.add('active');
    
    // Close modal after 5 seconds
    setTimeout(() => {
        modal.classList.remove('active');
    }, 5000);
}

// Example usage (would be replaced with actual prediction from backend)
// showPrediction(4500000);