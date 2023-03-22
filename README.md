# NoSQL-Einkaufsliste

## Starten - Frontend
ng serve

## Starten - Backend
npm run start


## RavenDB installieren
Unter https://ravendb.net/download die NoSQL Datenbank herunterladen und installieren

Ausführliche Anleitung zu installlation:
https://blog.hildenco.com/2018/06/installing-and-running-ravendb-on.html#:~:text=Installing%20and%20Running%20RavenDB%20on%20Windows%20and%20Linux,a%20Database%20...%208%20Conclusion%20...%20Weitere%20Elemente

Oder Installation über Docker:
https://hub.docker.com/r/ravendb/ravendb/


## Database anlegen
Database mit dem Namen 'Einkaufszettel-DB' anlegen:
--> Databases --> auf "New database" klicken --> Name eingeben: 'Einkaufszettel-DB' --> auf "Create" klicken

Beispieldaten in Database importieren (Voraussetzung: leere Database vorhanden):
--> in Database "Einkaufszettel-DB" gehen --> Tasks --> Import Data --> Datei auswählen mit Klick auf "Browse" --> auf "Import Database" klicken


## Ports
- Port 8080 für RavenDB
- Port 4200 für das Frontend
- Port 8070 für das Backend