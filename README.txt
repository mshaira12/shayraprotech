=============================
   GIT & POWERSHELL CHEAT SHEET
=============================

Ce fichier est un mémo pour gérer votre projet Git via PowerShell.

─────────────────────────────
1️⃣ PowerShell
─────────────────────────────
- PowerShell est fourni par défaut sur Windows 10 et 11.
- Pour l'ouvrir : Windows + R → tape "powershell" → Entrée
- Vous pouvez taper des commandes Git directement ici.

─────────────────────────────
2️⃣ Installer Git
─────────────────────────────
- Git est nécessaire pour versionner votre projet.
- Télécharger Git pour Windows : https://git-scm.com/download/win
- Pendant l'installation, laisser les options par défaut est généralement OK.
- Vérifier l'installation dans PowerShell :
    git --version

─────────────────────────────
3️⃣ Commandes Git essentielles
─────────────────────────────

# Vérifier l'état du projet
git status
# Affiche fichiers modifiés, ajoutés, ou non suivis

# Ajouter des fichiers au commit (staging)
git add .                # tous les fichiers modifiés
git add fr/about.html    # fichier spécifique

# Retirer un fichier de la staging area
git restore --staged fr/about.html

# Créer un commit (enregistrer vos changements localement)
git commit -m "Message clair"

# Envoyer les commits sur GitHub
git push origin main

# Mettre à jour votre projet avec les dernières modifications de GitHub
git pull origin main

# Voir l’historique des commits
git log --oneline

# Supprimer un fichier suivi par Git
git rm assets/js/main2.js
git commit -m "Supprimer main2.js"
git push origin main

# Branches
git branch nom-branche           # créer une branche
git checkout nom-branche         # changer de branche
git checkout -b nom-branche      # créer et changer de branche
git merge nom-branche            # fusionner la branche dans main

─────────────────────────────
4️⃣ Raccourcis pratiques
─────────────────────────────
git diff                          # voir changements non commités
git reset HEAD <file>             # retirer fichier du staging
git log --graph --oneline --all   # historique visuel et compact

─────────────────────────────
💡 Astuce rapide
─────────────────────────────
1. git status   → vérifier les changements
2. git add .    → préparer tous les fichiers
3. git commit -m "..."  → enregistrer localement
4. git push origin main → sauvegarder en ligne

─────────────────────────────
📌 Note
─────────────────────────────
- Ce fichier peut rester dans le projet pour consultation rapide.
- Il rappelle PowerShell, l'installation de Git, et toutes les commandes essentielles.
