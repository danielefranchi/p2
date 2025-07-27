// Global variable to track reference point
let useGenesisBlock = false;

// Convert year function
function convertYear() {
    const yearInput = document.getElementById('yearInput');
    const resultDiv = document.getElementById('result');
    const inputValue = yearInput.value.trim();
    
    // Validate input
    if (!inputValue) {
        resultDiv.textContent = 'Please enter a year';
        resultDiv.style.color = '#ff6b6b';
        return;
    }
    
    const year = parseInt(inputValue);
    
    if (isNaN(year)) {
        resultDiv.textContent = 'Please enter a valid year';
        resultDiv.style.color = '#ff6b6b';
        return;
    }
    
    // Calculate conversion
    const referenceYear = useGenesisBlock ? 2009 : 2008;
    const result = calculateBitcoinYear(year, referenceYear);
    
    // Display result
    resultDiv.textContent = result;
    resultDiv.style.color = '#f7931a';
}

// Calculate Bitcoin year
function calculateBitcoinYear(year, referenceYear) {
    if (year === referenceYear) {
        return 'Year 0 AB (Bitcoin Invention)';
    } else if (year < referenceYear) {
        const difference = referenceYear - year;
        return `${difference} BB`;
    } else {
        const difference = year - referenceYear;
        return `${difference} AB`;
    }
}

// Update reference point
function updateReference() {
    const toggle = document.getElementById('genesisToggle');
    useGenesisBlock = toggle.checked;
    
    // Update examples
    updateExamples();
    
    // Recalculate current result if there's input
    const yearInput = document.getElementById('yearInput');
    if (yearInput.value.trim()) {
        convertYear();
    }
}

// Update example conversions
function updateExamples() {
    const referenceYear = useGenesisBlock ? 2009 : 2008;
    const examples = document.querySelectorAll('.example-card');
    
    // Update examples based on reference point
    if (useGenesisBlock) {
        // Genesis Block (2009) examples
        examples[0].querySelector('.example-result').textContent = '38 BB';
        examples[1].querySelector('.example-year').textContent = '2009 AD';
        examples[1].querySelector('.example-result').textContent = 'Year 0 AB (Bitcoin Invention)';
        examples[2].querySelector('.example-year').textContent = '2010 AD';
        examples[2].querySelector('.example-result').textContent = '1 AB';
        examples[3].querySelector('.example-result').textContent = '16 AB';
    } else {
        // Whitepaper (2008) examples
        examples[0].querySelector('.example-result').textContent = '37 BB';
        examples[1].querySelector('.example-year').textContent = '2008 AD';
        examples[1].querySelector('.example-result').textContent = 'Year 0 AB (Bitcoin Invention)';
        examples[2].querySelector('.example-year').textContent = '2009 AD';
        examples[2].querySelector('.example-result').textContent = '1 AB';
        examples[3].querySelector('.example-result').textContent = '17 AB';
    }
}

// Allow Enter key to trigger conversion
document.getElementById('yearInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertYear();
    }
});

// Donate button functionality
document.querySelector('.donate-btn').addEventListener('click', function() {
    alert('Thank you for your interest in supporting Bitcoin! 🚀\n\nThis is a demo - in a real implementation, this would connect to a Bitcoin wallet or payment processor.');
});

// Initialize examples on page load
document.addEventListener('DOMContentLoaded', function() {
    updateExamples();
});
