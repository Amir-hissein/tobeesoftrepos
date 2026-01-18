# 📊 Google Analytics 4 - Guide Complet TOBEESOFT

## ✅ ÉTAPE 7 : Configuration Finale

### 🔧 Remplacer l'ID de mesure

**IMPORTANT** : Vous devez maintenant remplacer l'ID temporaire par votre véritable ID Google Analytics.

1. **Ouvrez** le fichier : `src/lib/analytics.js`

2. **Trouvez** la ligne 5 :
   ```javascript
   const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Remplacer par votre ID réel
   ```

3. **Remplacez** `G-XXXXXXXXXX` par votre **véritable ID** (que vous avez copié à l'étape 5)
   
   Exemple :
   ```javascript
   const GA_MEASUREMENT_ID = 'G-ABC123XYZ'; // Votre ID réel
   ```

4. **Sauvegardez** le fichier

---

## ✅ ÉTAPE 8 : Tester l'Installation

### 🧪 Test en temps réel

1. **Ouvrez** Google Analytics : https://analytics.google.com

2. **Allez dans** : Rapports → Temps réel

3. **Dans un nouvel onglet**, ouvrez votre site : http://localhost:5173

4. **Vous devriez voir** :
   ```
   👤 1 utilisateur actif
   📍 Localisation
   📄 Page active : /
   ```

5. **Naviguez** entre les pages (Accueil → Services → Contact)
   - Chaque changement de page doit apparaître en temps réel

6. **Testez le formulaire de contact** :
   - Remplissez et envoyez le formulaire
   - Un événement "form_submit" doit apparaître dans GA

---

## 📈 Ce qui est Tracké Automatiquement

### ✅ Déjà configuré :

1. **Vues de pages**
   - Chaque page visitée est comptée
   - Changement de route automatiquement détecté

2. **Événement de conversion : Formulaire de contact**
   - Quand quelqu'un envoie le formulaire
   - Catégorie: "Contact"
   - Action: "form_submit"

### 🎯 Événements personnalisés disponibles :

```javascript
// Dans votre code, vous pouvez utiliser :

import { trackServiceClick, trackBlogPostView, trackCTAClick } from './lib/analytics';

// Exemple 1 : Quand quelqu'un clique sur un service
trackServiceClick('Développement Web');

// Exemple 2 : Quand quelqu'un lit un article de blog
trackBlogPostView('Prix Site Web');

// Exemple 3 : Quand quelqu'un clique sur un bouton CTA
trackCTAClick('Hero - Démarrer votre projet');
```

---

## 📊 Rapports Utiles dans Google Analytics

### 🎯 Rapports principaux :

1. **Temps réel** → Voir visiteurs en direct
2. **Acquisition** → D'où viennent vos visiteurs
   - Google
   - Facebook
   - Direct
   - Autres sites

3. **Engagement** → Quelles pages sont les plus visitées
   - Pages vues
   - Temps passé
   - Taux de rebond

4. **Événements** → Vos conversions
   - Soumissions de formulaire
   - Clics sur services
   - Lectures d'articles

5. **Données démographiques** → Qui sont vos visiteurs
   - Pays
   - Ville
   - Langue
   - Appareil (Mobile/Desktop)

---

## 🔍 Vérifier que tout fonctionne

### Checklist complète :

- [ ] ID Google Analytics inséré dans `analytics.js`
- [ ] Site ouvert dans le navigateur
- [ ] Console navigateur sans erreur (F12)
- [ ] Message "✅ Google Analytics initialisé" dans la console
- [ ] Temps réel dans GA montre 1 utilisateur
- [ ] Navigation entre pages trackée
- [ ] Formulaire contact envoie un événement

---

## 🚨 Dépannage

### Problème : "Aucun utilisateur en temps réel"

**Solutions** :
1. Vérifiez que l'ID est correct dans `analytics.js`
2. Videz le cache du navigateur (Ctrl+Shift+R)
3. Attendez 1-2 minutes (délai de synchronisation)
4. Vérifiez la console (F12) pour des erreurs

### Problème : "Événements ne s'affichent pas"

**Solutions** :
1. Attendez 24-48h (les événements ont un délai)
2. Utilisez le mode "Temps réel" pour voir instantanément
3. Vérifiez que l'événement est bien appelé (console.log)

---

## 📱 Pour la Production

### Avant de déployer :

1. **Vérifiez** que l'ID Google Analytics est le bon
2. **Testez** en local que tout fonctionne
3. **Déployez** normalement
4. **Dans Google Analytics**, changez l'URL :
   - Allez dans Admin → Flux de données
   - Modifiez l'URL du site
   - Mettez votre URL de production : `https://tobeesoft.com`

5. **Ajoutez** votre domaine de production aux "Références validées" :
   - Admin → Paramètres de flux de données
   - Références inter-domaines → Ajouter votre domaine

---

## 🎉 Félicitations !

Vous avez maintenant :
- ✅ Google Analytics 4 installé
- ✅ Tracking automatique des pages
- ✅ Tracking des conversions (formulaire)
- ✅ Rapports temps réel fonctionnels

### Prochaines étapes recommandées :

1. Attendez 7 jours de collecte de données
2. Analysez vos rapports
3. Identifiez vos pages les plus visitées
4. Optimisez en fonction des données

---

## 📞 Support

Si vous avez des questions :
- Documentation GA4 : https://support.google.com/analytics
- Vérification en console : Appuyez sur F12 et cherchez les messages GA

---

**Installation réussie !** 🎊
