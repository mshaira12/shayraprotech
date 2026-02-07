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











==============================
ShayraProTech – Memo Git / PowerShell
==============================

1️⃣ INSTALLATION ET OUTILS
--------------------------
- **PowerShell** : terminal par défaut de Windows pour exécuter les commandes Git.
- **Git** : nécessaire pour versionner et pousser sur GitHub.
  - Télécharger depuis : https://git-scm.com/downloads
  - Installation rapide avec options par défaut.

2️⃣ CREATION DU DOSSIER LOCAL
-----------------------------
- Créer un dossier sur ton PC pour le projet :
  Exemple : C:\Users\m_sha\ProjetsWeb\shayraprotech
- C’est ici que tu placeras tous tes fichiers HTML, CSS, JS, images, etc.

3️⃣ INITIALISATION GIT
----------------------
Ouvrir PowerShell dans le dossier local et taper :

# Initialiser le dépôt
git init

# Lier le dépôt local au dépôt GitHub
git remote add origin https://github.com/mshaira12/shayraprotech.git

4️⃣ COMMANDES UTILES GIT / PUSH
--------------------------------
# Vérifier l'état des fichiers
git status

# Ajouter fichiers modifiés à l'index (staging)
git add .

# Ou ajouter un fichier spécifique
git add fr/about.html

# Commit des modifications
git commit -m "Description du commit"

# Envoyer sur GitHub (branche main)
git push origin main

# Mettre à jour le dépôt local avec modifications du distant
git pull origin main

5️⃣ GESTION DES FICHIERS
-------------------------
# Pour supprimer un fichier du suivi Git (mais garder local)
git rm --cached nom_du_fichier

# Pour annuler un ajout à l'index
git restore --staged nom_du_fichier

6️⃣ URL WEB
------------
- Le site est publié via GitHub Pages :
  https://mshaira12.github.io/shayraprotech/

7️⃣ NOTES
----------
- Toujours créer le dossier local avant de cloner ou copier les fichiers.
- Mettre ce fichier `memo.txt` ou `README.md` à la racine du projet.
- Le JS du formulaire se trouve dans `assets/js/main.js`.
- Le CSS principal est dans `assets/css/main.css`.
- Pour ajouter de nouveaux fichiers ou dossiers : git add, commit, push.
- Vérifier l'affichage sur GitHub Pages après chaque push.

==============================
