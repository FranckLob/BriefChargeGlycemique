# Calculateur de charge glycémique

Documentation technique sur l’implémentation dans Angular.

Les étapes 1 et 2 ont été réalisées.

###Composants
Trois ont été créés.

Top-bar : pour le titre et les choix « calculateur » ou « liste des aliments »
Aliment-calculator: pour la page correspondante au choix « calculateur »
Aliment-list : pour la page correspondante au choix « liste des aliments »

###app.component.html et app.module.ts :
Le titre et les 2 choix s’affichent sur toutes les pages.
La gestion de l’affichage de la page « calculateur» ou de la page « liste des aliments » s’effectue par  « routing ».
La page du calculateur est affichée par défaut.

###Aliment-list
La page concerne les aliments.

Un aliment est défini par l’interface Aliment : aliment.ts. 
La liste des aliments est gérée via un service : aliment.service.ts. 
Ce service est utilisé dans le composant : import et injection de dépendances.
Une fonction de création d’aliment (createAliment pour ajouter à la liste) et une fonction de suppression d’aliment (deleteAliment pour supprimer de la liste).

La page contient un formulaire. 
Pour cela, le service FormBuilder est utilisé dans le composant : import et injection de dépendances.

###Aliment-calculator
La page concerne le calcul de charge glycémique d’un portion d’aliment.

Un nouveau type d’objet est défini : portion. 
Une portion est constituée d’un aliment et d’un poids : portion.ts. 
La liste des portions est gérée via un service : aliment.service.ts. 
Ce service est utilisé dans le composant : import et injection de dépendances.

La page contient un formulaire. 
Pour cela, le service FormBuilder est utilisé dans le composant : import et injection de dépendances.

Dans le formulaire, il faut la liste des aliments. 
Ce service de gestion des aliments est donc utilisé dans le composant : import et injection de dépendances.

Il faut aussi afficher la charge totale = somme des charges des portions listées. 
Pour ce faire, on met en place un service pour gérer la charge : charge.service.ts.

Une fonction de création de portion (createPortion pour : ajouter à la liste, mettre à jour la charge et afficher la nouvelle valeur) et une fonction de suppression d’aliment (deleteAliment : pour supprimer de la liste, mettre à jour la charge et afficher la nouvelle valeur).
