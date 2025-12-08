# 🔧 Résolution du problème Template ID

## ❌ Erreur actuelle
```
The template ID not found
```

## ✅ Solutions

### Solution 1 : Trouver le bon Template ID

1. **Allez sur** : https://dashboard.emailjs.com/admin/templates
2. **Regardez la liste** de vos templates
3. **Copiez l'ID exact** (colonne "Template ID")
4. **Remplacez** dans `script.js` ligne 343

### Solution 2 : Créer le template

1. Sur https://dashboard.emailjs.com/admin/templates
2. Cliquez **"Create New Template"**
3. **Nom** : "Contact Tobeesoft" 
4. **Collez ce contenu** dans l'éditeur HTML :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Nouveau message - Tobeesoft</title>
</head>
<body style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4;">
  <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px;">
    <h2 style="color: #2c3e50;">Nouveau message de {{from_name}}</h2>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Téléphone:</strong> {{phone}}</p>
    <p><strong>Entreprise:</strong> {{company}}</p>
    <p><strong>Type de projet:</strong> {{project_type}}</p>
    <p><strong>Budget:</strong> {{budget}}</p>
    <p><strong>Délai:</strong> {{timeline}}</p>
    <p><strong>Date:</strong> {{time}}</p>
    <hr>
    <h3>Message:</h3>
    <p>{{message}}</p>
    <hr>
    <p style="color: #7f8c8d; font-size: 12px;">Envoyé depuis le site Tobeesoft</p>
  </div>
</body>
</html>
```

5. **Sauvegardez** (Save)
6. **Copiez le Template ID** généré
7. **Mettez-le** dans `script.js` ligne 343

### Solution 3 : Vérifier votre Service ID

Le Service ID `service_lid2yta` est-il correct ?

1. Allez sur https://dashboard.emailjs.com/admin/services
2. Vérifiez que ce service existe
3. Si différent, copiez le bon Service ID

## 📝 Code à modifier

Dans `script.js` ligne 343, remplacez :
```javascript
emailjs.send('service_lid2yta', 'YOUR_TEMPLATE_ID', {
```

Par :
```javascript  
emailjs.send('VOTRE_SERVICE_ID', 'VOTRE_TEMPLATE_ID', {
```

## 🎯 Après correction

1. Sauvegardez `script.js`
2. Rechargez la page (`Ctrl+Shift+R`)
3. Testez le formulaire

---

**Dites-moi quel Template ID et Service ID vous trouvez sur votre dashboard EmailJS !**
