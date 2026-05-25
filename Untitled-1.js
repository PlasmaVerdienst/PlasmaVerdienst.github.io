/**
 * INTERACTIVE referral code copy engine
 */
function copyCode() {
    const codeElement = document.getElementById('referralCode');
    const btnElement = document.getElementById('copyBtn');
    
    if (!codeElement || !btnElement) return;

    const textToCopy = codeElement.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        // Successful state feedback
        btnElement.innerText = 'Kopiert!';
        btnElement.style.backgroundColor = '#15803d';
        
        // Return back to default interactive state
        setTimeout(() => {
            btnElement.innerText = 'Kopieren';
            btnElement.style.backgroundColor = '#0f172a';
        }, 2000);
    }).catch(err => {
        console.error('Infrastruktur-Fehler beim Kopieren des Codes: ', err);
    });
}