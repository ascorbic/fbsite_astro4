export const lessons =    [
  {
    "chapter": "INSTALLAZIONE e CONFIGURAZIONE",
    "description": "",
    "duration": 815,
    "duration_formatted": "17:37",
    "index": 4,
    "items": [
      "Introduzione al corso (3:02)",
      "Introduzione su Git e i sistemi di versionamento (9:21)",
      "Installare Git su Windows (4:14)",
      "Installare Git su Mac (2:00)"
    ]
  },
  {
    "id": 1,
    "chapter": "CAPITOLO 1: GIT & GITHUB FUNDAMENTALS",
    "description": "Creare il primo progetto su GitHub",
    "duration": 2079,
    "duration_formatted": "34:39",
    "index": 14,
    "items": [
      "01. Creazione account GitHub (2:03)",
      "02. Creare un nuovo repository su GitHub (0:53)",
      "03. Creare nuovi file da GitHub (2:50)",
      "04. Configurare git: username e password (0:28)",
      "05. Login & git clone (1:41)",
      "06. git remote (2:18)",
      "07. TEORIA - differenze tra WORKING area vs STAGING area vs REPOSITORY (3:14)",
      "08. WORKING AREA (2:22)",
      "09. git add: STAGING AREA (2:27)",
      "10. git commit: REPOSITORY (2:56)",
      "11. git log: history dei commit (2:31)",
      "12. git commit: best practices e riepilogo (5:06)",
      "13. git push: sync con REPOSITORY REMOTO (2:02)",
      "14. Creare del file README e Markdown Syntax (3:48)"
    ]
  },
  {
    "id": 2,
    "chapter": "CAPITOLO 2: PRO TIPS",
    "description": "Moltissimi comandi e procedure utili nel lavoro quotidiano",
    "duration": 2653,
    "duration_formatted": "44:13",
    "index": 18,
    "items": [
      "Introduzione al capitolo [TODO: fare un video dedicato]",
      "01: git log: storico e ricerca di un commit (1:15)",
      "02. creare alias e applicare stili e colori al log (versione MAC) (3:39)",
      "03. creare alias e applicare stili e colori al log (versione Windows) (1:15)",
      "04. git restore: rimuovere le modifiche dall'area di STAGING (1:11)",
      "05. git commit -am: add e commit in un unica operazione (2:43)",
      "06. git commit --amend: modificare il messaggio dell'ultimo commit (1:11)",
      "07. git commit --amend: aggiungere una modifica ad un commit già effettuato (2:35)",
      "08. git restore e git reset: rimuovere i file dall'area di staging (2:22)",
      "09. git diff e HEAD: differenze tra commit locale e remoto (2:02)",
      "10. git reset HEAD~INDEX / git reset ID: gestione storia dei commit e eliminare ultimo commit locale (4:57)",
      "11. git checkout HEAD: elimininare definitivamente le modifiche locali (1:27)",
      "12. git reset mixed vs soft vs hard (5:19)",
      "13. git reflog: recuperare file persi dopo un hard reset (2:47)",
      "14. git revert: annullare un commit in locale e remoto (2:41)",
      "15. git reset push --force: cancellare commit da repository remoto (2:35)",
      "16. gitignore file - part 1- ignorare file dal versionamento (2:00)",
      "17. gitignore file - part 2: ignorare e cancellare file/cartelle gia presenti nel repository remoto (4:14)"
    ]
  },
  {
    "id": 3,
    "chapter": "CAPITOLO #3: REPOSITORY REMOTO",
    "description": "Sincronizzare repository locali con GitHub",
    "duration": 1335,
    "duration_formatted": "22:15",
    "index": 7,
    "items": [
      "01. Versionare un progetto locale su GitHub (2:32)",
      "02. git init & git remote (3:05)",
      "03. git push (2:32)",
      "04. push --set-upstream (4:05)",
      "05 git pull: acquisire aggiornamenti da un repository remoto (2:39)",
      "06. Conflitti tra repo locale e remoto (3:38)",
      "07. conflitti sullo stesso file e git commit -no-edit (3:44)"
    ]
  },
  {
    "id": 4,
    "chapter": "CAPITOLO #4: I BRANCH",
    "description": "Utilizzare i branch per sviluppare nuove features",
    "duration": 1910,
    "duration_formatted": "31:50",
    "index": 11,
    "items": [
      "TEORIA - introduzione ai branch (4:37)",
      "01. Introduzione ai branch, master vs main (2:35)",
      "02. Creazione di un repository GitHub e rinominare il branch master a main (2:42)",
      "03. Creare ed eliminare branch (2:28)",
      "04. Sviluppare una nuova feature su un branch dedicato (4:06)",
      "05. git merge: unire diversi branch (2:16)",
      "06. Conflitti con repository remoto su file differenti (3:08)",
      "07. Diagramma branch con l'alias git lg (1:47)",
      "08. Conflitti sullo stesso file (3:59)",
      "09. Creare un branch remoto (2:43)",
      "10. Cancellare i branch remoto e locale (1:29)"
    ]
  },
  {
    "id": 5,
    "chapter": "CAPITOLO 5: REBASE",
    "description": "Moltissimi comandi e procedure utili nel lavoro quotidiano",
    "duration": 1326,
    "duration_formatted": "22:06",
    "index": 9,
    "items": [
      "Introduzione al rebase (2:24)",
      "01. Modificare un commit message con reword (1:32)",
      "02. Unire più commit assieme con squash (2:00)",
      "03. Unire più commit assieme con fixup (1:46)",
      "04. Eliminare un commit con drop (2:16)",
      "05. Modificare commit con edit (2:36)",
      "06. Associare ed eseguire un comando al commit con exec (1:52)",
      "07. Spostare un commit eseguito in un branch errato (2:00)",
      "08. Merge vs Rebase (5:40)"
    ]
  },
  {
    "id": 6,
    "chapter": "CAPITOLO 6: TAG & RELEASE",
    "description": "Identificare nel tempo le versioni rilasciate in produzione",
    "duration": 500,
    "duration_formatted": "08:20",
    "index": 7,
    "items": [
      "Introduzione ai tag (0:44)",
      "01. Creazione di un tag (1:59)",
      "02. Lista dei tag e checkout di un tag specifico (1:19)",
      "03. Eliminare un tag (0:36)",
      "04. Associare un tag ad un vecchio commit (0:32)",
      "05. Sincronizzare i tag locali con il repository remoto con push (0:34)",
      "06. Creare una release (2:36)"
    ]
  },
  {
    "id": 7,
    "chapter": "CAPITOLO 7: PULL REQUEST",
    "description": "Automatizzare il processo di code review",
    "duration": 471,
    "duration_formatted": "16:51",
    "index": 5,
    "items": [
      "Introduzione pull request (0:53)",
      "01. Eseguiamo un fork repository (0:53)",
      "02. Aprire ed includere una pull request (5:12)",
      "03. Chiudiamo una pull request (0:53)",
      "04. Richiesta di revisione di una pull request Draft (9:00)"
    ]
  },
  {
    "chapter": "CAPITOLO #8 - GIT STASH",
    "description": "Metti in pausa il tuo lavoro con il comando Stash",
    "duration": 332,
    "duration_formatted": "05:32",
    "index": 7,
    "items": [
      "01. Accantonare le modifiche correnti e vederne la lista (1:54)",
      "02. Vedere contenuto dello stash (0:34)",
      "03. Riprendere ed applicare le modifiche accantonate (1:28)",
      "04. Eliminazione delle modifiche accantonate (0:36)",
      "05. Creare un branch ed applicare le modifiche accantonate (1:00)"
    ]
  },
  {
    "chapter": "CAPITOLO 9: BONUS",
    "description": "Deploy & Tips... ",
    "duration": 1802,
    "duration_formatted": "30:02",
    "index": 12,
    "items": [
      "Comparazione tra branch o commit e verifica delle modifiche pendenti (1:12)",
      "Deploy di siti statici (HTML, CSS, JS) su GitHub Pages (2:52)",
      "Deploy di SPA front-end (esempio in React) su GitHub Pages (5:15)",
      "Deploy e Continuos Deployment su Vercel (esempio con Angular) (12:15)",
      "Deploy e Continuous Deployment su Azure (esempi con React) (8:28)",
    ]
  },
  /*
  {
    "chapter": "IN ARRIVO MOLTE NOVITÀ",
    "description2": "I consigli di studenti e colleghi sono fondamentali e, dopo i primi feedback, abbiamo deciso di integrare nel corso moltissimi nuovi video che saranno disponibili nei prossimi mesi",
    "description": "Abbiamo ascoltato i feedback di studenti e colleghi che ci hanno chiesto di integrare dei nuovi argomenti.",
    "duration": "",
    "duration_formatted": "IN ARRIVO",
    "index": 20,
    "items": [
      "Bisect: scovare bug e regressioni",
      "GitHub Issue: traccia funzionalità e bug",
      "Git Hooks: esegui scipt prima o dopo eventi ",
      "GitHub Actions: automatizza i tuoi workflow",
      "GitFlow ",
      "Estensioni per Visual Studio Code",
      "Estensioni WebStorm"
    ]
  }
  */
]