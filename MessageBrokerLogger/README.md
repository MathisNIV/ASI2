# Prérequis

Pour que le logger marche correctement veuillez copier le fichier **./activemq.xml** dans le container hébergeant le message broker avec la commande suivante:
```bash
docker cp ./activemq containerId:/opt/activemq/conf
```
Pour obtenir le containerId, une fois que le container est en fonctionement vous pouvez utiliser:
```bash
docker ps
```
