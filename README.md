# vitfoud (server)

> Server code for [hepl-dw/vitfoud](https://github.com/hepl-dw/vitfoud) project.

* * *

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instructions will be in french. Sorry.

* * *

Le présent repo contient le code utilisé pour faire tourner la (petite) API REST du projet **[hepl-dw/vitfoud](https://github.com/hepl-dw/vitfoud)**. Toutes les instructions pour accéder au serveur sur lequel tourne le code vous seront données en classe.

Le code est proposé ici _tel quel_, sans plus d'explications. Il est très fortement inspiré du code de base de [hepl-ria/kach](https://github.com/hepl-ria/kach), réalisé en classe.

## Installation

Pour ceux d'entre vous qui voudraient faire tourner le code en local, trois étapes en trois commandes (en partant du principe que vous avez [node.js](https://nodejs.org) & [yarn](https://yarnpkg.com) installés) : 

1. Installation des dépendances : `yarn install`
2. _Compilation_ des sources (_via_ BabelJS) : `npm run build`
3. Exécution du code : `npm start`

Si vous ne modifiez pas les sources, l'API devrait alors être accessible depuis l'adresse [127.0.0.1:12345](http://127.0.0.1:12345).