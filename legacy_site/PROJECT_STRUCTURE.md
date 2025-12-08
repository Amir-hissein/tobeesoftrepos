# 📁 Structure du Projet TOBEESOFT

```
tobeesoft-website/
│
├── 📄 index.html                    # Page principale du site
├── 📄 robots.txt                    # Configuration SEO pour moteurs de recherche
├── 📄 .htaccess                     # Configuration de sécurité Apache
│
├── 📁 assets/                       # Ressources du site
│   ├── 📁 css/
│   │   └── style.css               # Styles CSS principaux
│   ├── 📁 js/
│   │   └── script.js               # JavaScript principal
│   └── 📁 images/                  # Images et logos (à ajouter)
│
├── 📁 docs/                         # Documentation du projet
│   ├── README.md                   # Guide principal du projet
│   ├── SECURITY.md                 # Guide de sécurité et déploiement
│   ├── EMAILJS_SETUP.md           # Configuration EmailJS
│   └── TROUBLESHOOTING_EMAIL.md    # Résolution des problèmes email
│
└── 📁 .well-known/                  # Standards web
    └── security.txt                # Politique de sécurité
```

## 📋 Description des Dossiers

### `/` (Racine)
- **index.html** : Page HTML principale avec tout le contenu
- **robots.txt** : Directives pour les crawlers des moteurs de recherche
- **.htaccess** : Configuration de sécurité et headers HTTP pour Apache

### `/assets/` 
Contient toutes les ressources statiques du site.

#### `/assets/css/`
- **style.css** : Fichier CSS principal avec le design system complet

#### `/assets/js/`
- **script.js** : JavaScript principal avec animations, formulaire, EmailJS

#### `/assets/images/` (À créer)
- Logos
- Images de projets
- Icônes personnalisées
- Favicon

### `/docs/`
Documentation technique et guides.

- **README.md** : Vue d'ensemble du projet, installation, utilisation
- **SECURITY.md** : Configuration de sécurité, checklist de déploiement
- **EMAILJS_SETUP.md** : Guide détaillé pour configurer EmailJS
- **TROUBLESHOOTING_EMAIL.md** : Solutions aux problèmes courants

### `/.well-known/`
Répertoire standard pour les fichiers de métadonnées web.

- **security.txt** : Information de contact pour signaler les vulnérabilités

## 🚀 Avantages de cette Structure

✅ **Organisation claire** : Séparation logique des fichiers
✅ **Scalabilité** : Facile d'ajouter de nouveaux fichiers
✅ **Maintenabilité** : Code plus facile à naviguer et maintenir
✅ **Standards** : Suit les conventions de l'industrie
✅ **SEO-friendly** : Structure optimisée pour le référencement
✅ **Sécurité** : Fichiers sensibles bien organisés

## 📝 Notes Importantes

1. **Assets** : Tous les fichiers statiques dans `/assets/` pour un chargement optimisé
2. **Documentation** : Centralisée dans `/docs/` pour un accès facile
3. **Sécurité** : Headers et policies dans `.htaccess` et `.well-known/`
4. **Portabilité** : Structure standard compatible avec tous les hébergeurs

## 🔄 Prochaines Étapes

Pour compléter le projet :
- [ ] Ajouter un logo dans `/assets/images/logo.png`
- [ ] Ajouter un favicon dans `/assets/images/favicon.ico`
- [ ] Créer un sitemap.xml pour le SEO
- [ ] Ajouter des images de projets/portfolio

## 📦 Déploiement

Cette structure est prête pour :
- ✅ Hébergement statique (Netlify, Vercel, GitHub Pages)
- ✅ Serveur Apache/Nginx
- ✅ Distribution via CDN (Cloudflare)
- ✅ Intégration CI/CD

**Tous les chemins sont relatifs et fonctionneront sur n'importe quel environnement !**
