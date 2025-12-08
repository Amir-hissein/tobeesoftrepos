# Configuration EmailJS - Guide Complet

## 📧 Comment activer l'envoi d'emails

Le formulaire de contact est prêt à utiliser **EmailJS**, un service gratuit pour envoyer des emails.

## 🚀 Étapes de Configuration

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" (gratuit jusqu'à 200 emails/mois)
3. Confirmez votre email

### 2. Configurer votre service email

1. Dans le dashboard, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre provider (Gmail recommandé)
4. Connectez votre compte email
5. Notez votre **Service ID** (ex: `service_abc123`)

### 3. Créer un template d'email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Utilisez ce template :

```
Nouveau message de {{from_name}}

Email: {{from_email}}
Téléphone: {{phone}}
Entreprise: {{company}}

Type de projet: {{project_type}}
Budget: {{budget}}
Délai: {{timeline}}

Message:
{{message}}
```

4. Notez votre **Template ID** (ex: `template_xyz789`)

### 4. Obtenir votre clé publique

1. Allez dans **"Account"** → **"General"**
2. Copiez votre **Public Key** (ex: `abcD1234efGH5678`)

### 5. Mettre à jour le code

Ouvrez `script.js` et modifiez ces lignes :

```javascript
// Ligne ~313 - Remplacer YOUR_PUBLIC_KEY
emailjs.init('abcD1234efGH5678'); // Votre vraie clé

// Ligne ~330 - Décommenter et configurer
emailjs.send('service_abc123', 'template_xyz789', {
    // ...
})
```

### 6. Activer le code EmailJS

Dans `script.js`, trouvez la section "Contact Form Handling" et :

1. **Décommentez** le bloc EmailJS (lignes ~326-347)
2. **Commentez** le bloc "Temporary demo" (lignes ~350-358)

**Avant :**
```javascript
/*
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    // ...
})
*/

// Mode démo actif
setTimeout(() => {
    showNotification('Mode démo...', 'info');
}, 1500);
```

**Après :**
```javascript
emailjs.send('service_abc123', 'template_xyz789', {
    // ...
})

/*
// Mode démo désactivé
setTimeout(() => {
    showNotification('Mode démo...', 'info');
}, 1500);
*/
```

## ✅ Tester le formulaire

1. Rechargez la page
2. Remplissez le formulaire de contact
3. Cliquez sur "Envoyer ma demande"
4. Vérifiez votre boîte email !

## 🔧 Alternative : Votre propre backend

Si vous préférez utiliser votre propre serveur, décommentez l'option 3 dans `script.js` :

```javascript
fetch('https://votre-backend.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
```

## 💡 Autres alternatives gratuites

- **Formspree** : https://formspree.io (50 emails/mois gratuit)
- **Web3Forms** : https://web3forms.com (250 emails/mois gratuit)
- **GetForm** : https://getform.io (50 emails/mois gratuit)

## 🎯 Résumé rapide

1. Créer compte sur EmailJS
2. Configurer service email (Gmail)
3. Créer template d'email
4. Copier : Service ID, Template ID, Public Key
5. Mettre à jour `script.js` avec vos IDs
6. Décommenter le code EmailJS
7. Tester !

---

**Le formulaire est actuellement en mode démo. Suivez ces étapes pour l'activer !** 🚀
