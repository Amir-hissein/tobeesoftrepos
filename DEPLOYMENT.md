# 🚀 Guide de Déploiement Rapide - TOBEESOFT

## ✅ Pré-requis
- ✅ Node.js installé
- ✅ Build vérifié (`npm run build`)
- ✅ Tous les fichiers nettoyés

---

## 🌐 Option 1: Vercel (RECOMMANDÉ)

### Méthode A: Via GitHub
```bash
# 1. Créer un repo GitHub
git init
git add .
git commit -m "Initial commit - TOBEESOFT v1.0.0"
git branch -M main
git remote add origin https://github.com/votre-username/tobeesoft.git
git push -u origin main

# 2. Aller sur vercel.com
- Sign up / Login
- "Import Project"
- Sélectionner votre repo
- Framework: Vite
- Build Command: npm run build
- Output Directory: dist
- Deploy! 🚀
```

### Méthode B: Via Vercel CLI
```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Production
vercel --prod
```

**Avantages** ✅
- Déploiement automatique sur chaque push
- HTTPS automatique
- CDN global
- Preview deployments
- Analytics gratuit

---

## 🎯 Option 2: Netlify

### Méthode A: Drag & Drop
```bash
# 1. Build le projet
npm run build

# 2. Aller sur netlify.com
- Sign up / Login
- "Add new site" > "Deploy manually"
- Drag & drop le dossier dist/
- Done! 🎉
```

### Méthode B: Via Git
```bash
# 1. Push sur GitHub (même étapes que Vercel)

# 2. Sur netlify.com
- "Import from Git"
- Sélectionner le repo
- Build command: npm run build
- Publish directory: dist
- Deploy! 🚀
```

**Avantages** ✅
- Interface simple
- Forms handling
- Functions serverless
- Split testing A/B

---

## 📦 Option 3: GitHub Pages

```bash
# 1. Installer gh-pages
npm install -D gh-pages

# 2. Ajouter dans package.json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://votre-username.github.io/tobeesoft"
}

# 3. Déployer
npm run deploy

# 4. Activer GitHub Pages
# Settings > Pages > Source: gh-pages branch
```

**Note**: Modifier `vite.config.js` pour GitHub Pages:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/tobeesoft/' // Nom de votre repo
})
```

---

## 🔧 Option 4: Serveur Propre (VPS)

### Nginx
```bash
# 1. Build
npm run build

# 2. Upload dist/ vers votre serveur
scp -r dist/* user@your-server:/var/www/tobeesoft

# 3. Configuration Nginx
server {
    listen 80;
    server_name tobeesoft.com;
    root /var/www/tobeesoft;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip
    gzip on;
    gzip_types text/css application/javascript application/json;
}

# 4. Redémarrer Nginx
sudo systemctl restart nginx
```

---

## ⚙️ Configuration EmailJS

Avant le déploiement, configurer EmailJS :

```javascript
// Dans Contact.jsx, ligne ~100
emailjs.sendForm(
  'YOUR_SERVICE_ID',      // Remplacer
  'YOUR_TEMPLATE_ID',     // Remplacer
  form.current,
  'YOUR_PUBLIC_KEY'       // Remplacer
)
```

### Étapes:
1. Aller sur [emailjs.com](https://www.emailjs.com/)
2. Créer un compte gratuit
3. Créer un service (Gmail, Outlook, etc.)
4. Créer un template email
5. Copier les IDs dans le code
6. Tester le formulaire

---

## 🔒 Variables d'Environnement

### Créer `.env` (optionnel)
```bash
# .env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Utiliser dans le code
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
```

### Sur Vercel/Netlify
- Aller dans Settings > Environment Variables
- Ajouter les variables
- Redéployer

---

## 📊 Post-Déploiement

### 1. Vérifier le Site
- [ ] Toutes les pages se chargent
- [ ] Navigation fonctionne
- [ ] Formulaire contact marche
- [ ] Responsive sur mobile
- [ ] Traductions FR/EN

### 2. Performance
```bash
# Lighthouse audit
lighthouse https://votre-site.com

# Ou via Chrome DevTools
F12 > Lighthouse > Analyze page load
```

### 3. SEO
- [ ] Ajouter Google Search Console
- [ ] Ajouter Google Analytics (optionnel)
- [ ] Soumettre le sitemap
- [ ] Vérifier meta tags

### 4. Analytics (Optionnel)

**Google Analytics 4:**
```html
<!-- Dans index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🎯 Checklist de Déploiement

### Avant
- [x] Build réussi (`npm run build`)
- [x] Test local (`npm run preview`)
- [ ] EmailJS configuré
- [ ] Variables d'env configurées
- [ ] Meta tags à jour
- [x] .gitignore complet

### Pendant
- [ ] Déploiement réussi
- [ ] URL accessible
- [ ] HTTPS actif
- [ ] DNS configuré (si domaine custom)

### Après
- [ ] Test sur mobile réel
- [ ] Test formulaire contact
- [ ] Lighthouse audit > 90
- [ ] Analytics configuré (optionnel)

---

## 🌍 Domaine Personnalisé

### Sur Vercel
```bash
1. Aller dans Settings > Domains
2. Ajouter votre domaine
3. Configurer DNS chez votre registrar:
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com
```

### Sur Netlify
```bash
1. Aller dans Domain settings
2. Add custom domain
3. Configurer DNS:
   - Type: A
   - Name: @
   - Value: 75.2.60.5
```

---

## 📝 Commandes Utiles

```bash
# Production build
npm run build

# Preview local du build
npm run preview

# Clean build
rm -rf dist && npm run build

# Vérifier taille du bundle
npm run build -- --analyze

# Test lighthouse
lighthouse https://votre-site.com --view
```

---

## 🚨 Troubleshooting

### Build échoue
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 sur refresh
Pour SPA, configurer le serveur :
- Vercel: Créer `vercel.json`
- Netlify: Créer `_redirects`
- Nginx: `try_files $uri /index.html`

### Images ne chargent pas
Vérifier le `base` dans `vite.config.js`

---

## 🎉 Résultat Final

Votre site sera accessible à :
- **Vercel**: `https://tobeesoft.vercel.app`
- **Netlify**: `https://tobeesoft.netlify.app`
- **Custom**: `https://tobeesoft.com`

Avec :
- ✅ HTTPS automatique
- ✅ CDN global
- ✅ Performance optimale
- ✅ Updates automatiques (si Git)

---

**Durée totale de déploiement** : ~10 minutes ⚡  
**Coût** : Gratuit (plans free disponibles) 💰

Bon déploiement ! 🚀
