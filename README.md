# Sportsee

Ce projet est une application de suivi d'activité physique créée avec React et Recharts. Elle permet d'afficher divers graphiques et statistiques sur les activités des utilisateurs.

## Technologies Utilisées

- **React** : Pour la construction de l'interface utilisateur.
- **Axios** : Pour effectuer les appels API.
- **React Router Dom** : Pour le routage des différentes pages.
- **Recharts** : Pour afficher les graphiques interactifs.

## Installation

Pour installer et exécuter ce projet localement, suivez les étapes ci-dessous :

Clonez le dépôt :

```bash
git clone
cd sportsee-dashboard
```

Installez les dépendances :

```bash
 npm install
```

Démarrez l'application :

```bash
  npm start
```

Installer et démarrer le backend :

Ce projet nécessite un backend pour fonctionner correctement. Vous pouvez trouver le backend nécessaire à cette adresse : [Backend Sportsee.](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

Suivez les instructions du dépôt backend pour l'installer et le démarrer.

## Composants Principaux

### Dashboard

Le composant `Dashboard` affiche les principales statistiques et graphiques concernant l'utilisateur.
Les données sont obtenues via des appels à une API et sont gérées avec le hook useEffect.

### ActivityChart

Le composant `ActivityChart` utilise Recharts pour afficher un graphique des activités quotidiennes.

### AverageSessionsChart

Le composant `AverageSessionsChart` affiche la durée moyenne des sessions d'activité.

### PerformanceChart

Le composant `PerformanceChart` montre les performances de l'utilisateur dans différents domaines (cardio, énergie, etc.).

### ScoreChart

Le composant `ScoreChart` affiche un graphique en forme de cercle représentant le score de l'utilisateur.

### Specs

Le composant `Specs` affiche les détails nutritionnels (calories, proteines, glucides, lipides) de l'utilisateur sous forme de cartes.

### Choix entre les données de l'API et les données mockées

Le projet Sportsee permet de choisir entre l'utilisation des données provenant de l'API backend ou des données mockées.
Cela peut être configuré dans le fichier `service/getData.js`.

## Captures d'écran

Voici quelques captures d'écran montrant à quoi ressemble le site :

Page de profil : ![Page de profil](https://github.com/user-attachments/assets/248726a6-b3d9-40ae-a004-b0e11941e168)
Dashboard : ![Dashboard](https://github.com/user-attachments/assets/0a4096d5-8678-467c-894d-415072a34db0)
