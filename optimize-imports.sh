#!/bin/bash

# Script pour optimiser les imports React dans les composants
# React 19 n'a plus besoin de "import React from 'react'"

echo "🧹 Nettoyage des imports React inutilisés..."

# Fichiers à modifier
files=(
  "src/components/ui/Button.jsx"
  "src/components/ui/Section.jsx"  
  "src/components/sections/About.jsx"
  "src/components/sections/Expertise.jsx"
  "src/components/layout/Footer.jsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "  📝 Optimisation de $file"
    # Supprime la ligne "import React from 'react';" si elle existe seule
    sed -i.bak "/^import React from 'react';$/d" "$file"
    rm -f "$file.bak"
  fi
done

echo "✅ Optimisation terminée!"
