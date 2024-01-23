export const lessons = [
  {
  "chapter": "InvoiceApp: Sync Router con lo Store",
  "description": "", "duration": 1717,
  "duration_formatted": "28:37",
  "index": 5,
  "items": [
    "01. Installazione e configurazione router-store con NGRX (2:59)",
    "02. Creare Custom Router Actions (5:42)",
    "03. Router Effects (9:28)",
    "04. Router Selectors (10:28)",
    "TIP: un approccio più idiomatico nell'utilizzo del selettore (articolo)"
  ]
},
  {
    "chapter": "InvoiceApp: Gestione Profilo Utente",
    "description": "",
    "duration": 3916,
    "duration_formatted": "01:05:16",
    "index": 13,
    "items": [
  "GOAL: profilo utente (1:14)",
    "01. Model & mock server REST con json-server (4:06)",
    "02. Profile Service & Environment properties (5:38)",
    "03. Profile Actions (1:45)",
    "04. Profile Effects (6:31)",
    "05. Profile Reducer (12:14)",
    "06. TS TIP: as-syntax vs Partial vs optional-parameters (2:35)",
    "07. NGRX-TIP: export reducer functions & limiti compilazione AoT (4:37)",
    "08. Selectors & createFeatureSelector (4:16)",
    "09. AppState: \"tipizzare\" lo Store (3:21)",
    "10. Profile component: load & display data (5:46)",
    "11. Profile component: edit data & sync components (9:25)",
    "12. Profile component: skinning (3:48)"
]
},
{
  "chapter": "Invoice App: Autenticazione e Sicurezza",
    "description": "",
      "duration": 6711,
        "duration_formatted": "01:51:51",
          "index": 16,
            "items": [
              "GOAL: autenticazione e struttura store (3:24)",
              "01. Login Component (5:21)",
              "02. Auth Actions (5:24)",
              "03. Auth service (4:15)",
              "04. Auth Effects: login & logout (19:57)",
              "05. Auth Reducer: login & logout (7:08)",
              "06. Auth selectors (2:33)",
              "07. Gestione Logout (3:36)",
              "08. Guards: protezione route e utilizzo dei selettori (11:15)",
              "09. Autologin: init-effects. azioni e gestione localstorage (10:13)",
              "TIP su HttpInterceptor: IMPORTANTE!",
              "10. HTTPInterceptor: selectors (15:50)",
              "11. HTTPInterceptor: gestione errori (3:48)",
              "12. HTTPInterceptor: throwError (3:28)",
              "13. Creazione Direttive strutturali (*ifLogged): protezione DOM (13:38)",
              "14. RXJS TIP: evitare inutili richieste HTTP nel login: switchmap vs exhaustmap (2:01)"
            ]
},
{
  "chapter": "InvoiceApp: introduzione alla feature InvoiceEditor",
    "description": "",
      "duration": 1103,
        "duration_formatted": "18:23",
          "index": 5,
            "items": [
              "01. GOAL e struttura store (4:22)",
              "02. NGRX: Introduzione store \"forFeature()\" (6:17)",
              "03. Creazione: store for feature (4:32)",
              "04. Combine Reducers con ActionReducerMap (3:12)",
              "Prossimi step: nota importante"
            ]
},
{
  "chapter": "InvoiceEditor -> Clients: UI",
    "description": "",
      "duration": 4224,
        "duration_formatted": "01:10:24",
          "index": 11,
            "items": [
              "01. GOAL (2:51)",
              "02. Struttura UI & component-based approach (0:52)",
              "03. UI: componente pannello Clienti (11:47)",
              "04. UI: input, output, ng-class & animations (6:03)",
              "05. UI Children - parte 1: suddividere la UI in componenti (12:39)",
              "06. UI Children - parte 2: creazione header / ADD clients (7:35)",
              "07. UI Children - parte 3: Header, @ViewChild & ChangeDetectorRef (17:04)",
              "08. UI Children - parte 4: Modifica Cliente (1:50)",
              "09. UI Children - parte 5: applicare CSS al wrapper con @HostBinding (3:21)",
              "10. Client Model (2:47)",
              "11. Riassunto e prossimo step (3:35)"
            ]
},
{
  "chapter": "InvoiceEditor -> Clients: gestione STORE",
    "description": "",
      "duration": 2239,
        "duration_formatted": "37:19",
          "index": 9,
            "items": [
              "01. ClientService & REST API (4:19)",
              "02. Clients Actions (2:05)",
              "03. Clients Effects - Parte 1 (4:47)",
              "04. Clients Effects - Parte 2 (4:12)",
              "05. Clients: Load (3:03)",
              "06. creare un index per i reducers con actionReducerMap (3:13)",
              "07. Clients Reducer (9:11)",
              "08. createFeatureSelector vs createSelector (4:09)",
              "09. Considerazioni finali (2:20)"
            ]
},
{
  "chapter": "InvoiceEditor -> HttpStatus: gestione messaggi \"success\" e \"failed\"",
    "description": "",
      "duration": 1988,
        "duration_formatted": "33:08",
          "index": 10,
            "items": [
              "Goal (0:50)",
              "introduzione (3:15)",
              "HttpStatus: gestione error e success nello store (5:17)",
              "Considerazioni su errori e gestione tramite HTTP Interceptor (articolo)",
              "HttpStatus: reducer (6:29)",
              "HttpStatus: selector (2:47)",
              "HttpStatus : UI e visualizzazione errori (4:51)",
              "HttpStatus: custom component (2:31)",
              "HttpStatus: Gestione messaggi di successo (4:21)",
              "HttpStatus: conclusione e riepilogo (2:47)"
            ]
},
{
  "chapter": "InvoiceEditor -> ui -> sync user interface with store",
    "description": "",
      "duration": 1601,
        "duration_formatted": "26:41",
          "index": 6,
            "items": [
              "1. GOAL (1:40)",
              "2. UI state (3:17)",
              "3. UI Actions (1:04)",
              "4. UI Reducers (5:18)",
              "5. UI Selectors (7:58)",
              "6. UI: gestione apertura / chiusura pannelli (7:24)"
            ]
},
{
  "chapter": "InvoiceEditor -> Invoices: gestione fatture (advanced tricks)",
    "description": "",
      "duration": 8339,
        "duration_formatted": "02:18:59",
          "index": 21,
            "items": [
              "01. GOAL (0:55)",
              "03. Invoice Model (modello fattura) (1:51)",
              "04. Invoices Actions (8:49)",
              "05. Invoice Form: versione provvisoria (7:57)",
              "06. Inizializzazione stato \"invoices\" (4:55)",
              "07. Selectors per le fatture & getActiveInvoice (2:16)",
              "08. Effects condizionali e operatore RxJS \"withLatestFrom\" (10:05)",
              "09. Invoices http service (3:05)",
              "10. Concatenare effects (5:14)",
              "11. Emettere azioni multiple negli effetti (4:18)",
              "12. Reducer update: gestione activeInvoice e addInvoice (4:28)",
              "13. Initializzazione invoice editor e gestione xhr simultanee (17:21)",
              "14. UI: visualizzazione fatture e gestione fattura attiva (9:35)",
              "15. UI: animare il layout sulla base dell'apertura pannelli (7:13)",
              "16. Selectors, reduce ed espressioni: calcolo numero fattura progressivo (11:52)",
              "17. Creare una nuova fattura (3:45)",
              "18. Modificare una fattura (17:34)",
              "19. Cancellare una fattura (5:53)",
              "20. bug fix: delete vs setActive (5:18)",
              "21. Aggiungere un campo \"Date\" alla fattura (2:15)",
              "22. UI: migliorare il layout del-pannello clienti (4:20)"
            ]
},
{
  "chapter": "InvoiceApp -> InvoiceEditor: Reactive Forms",
    "description": "",
      "duration": 4796,
        "duration_formatted": "01:19:56",
          "index": 11,
            "items": [
              "1. Introduzione al capitolo",
              "3. Migliorare il layout del form (15:14)",
              "4. Aprire i pannelli clienti e dello storico fatture (6:00)",
              "5. Da \"template-driven forms\" ai Reactive Forms (6:34)",
              "6: Component lifecycle: ngOnChanges (6:51)",
              "7. ReactiveForms: metodi patchValue and reset (1:54)",
              "8. FormArray: gestione prodotti fattura - part 1 (9:17)",
              "9. FormArray: gestione prodotti fattura - part 2 (14:28)",
              "10. FormArray: gestione prodotti fattura - part 3 (3:35)",
              "11. FormArray: calcolo totale prodotti (8:02)",
              "12. FormArray: selezione clienti (8:01)"
            ]
},
{
  "chapter": "Miglioramenti-best-practices-and-fix",
    "description": "",
      "duration": 1145,
        "duration_formatted": "19:05",
          "index": 5,
            "items": [
              "01. Routing Redirect (0:45)",
              "02. Aggiungere immagini al progetto (2:42)",
              "03. Ottimizzazione performance con la ChangeDetectionStrategy \"onPush\" (5:33)",
              "04. TIP: barrel index file: import / export modules (6:31)",
              "05. Miglioramento Performance: sottoscrizione manuale agli observable vs async (ngif-as) (3:34)"
            ]
},
{
  "chapter": "Stampa Fattura",
    "description": "",
      "duration": 1866,
        "duration_formatted": "31:06",
          "index": 5,
            "items": [
              "01. Nested Routes & multiple Containers (7:46)",
              "02. Selettori Compositi (6:40)",
              "03. Router: back action (2:11)",
              "04. CSS TIP: print media query & Angular CSS ViewEncapsulation (3:54)",
              "05. Visualizzazione dati e stampa (10:35)"
            ]
},
{
  "chapter": "EXTRA: NGRX tips & tricks",
    "description": "",
      "duration": 1700,
        "duration_formatted": "28:20",
          "index": 12,
            "items": [
              "1. Configurazione modulo \"root\" vs module \"core\" (0:36)",
              "2. Runtime checks & immutabilità (2:24)",
              "3. Store \"forRoot\" vs \"forFeature\" (1:58)",
              "4. Store Type & actionReducerMap (2:10)",
              "10. Reducer & sintassi JS per restituire oggetti in un reducer (1:08)",
              "11. Reducer & problemi di compilazione AOT (1:33)",
              "20. Actions: passare la minore quantità di informazioni nel payload (4:07)",
              "33. Selectors: sommario (4:37)",
              "34. Effects: sommario (2:12)",
              "35. RXJS TIP: switchmap vs exhaustmap vs concatmap vs mergemap (2:29)",
              "36. Effects: recuperare lo stato con withLatestFrom (2:15)",
              "37. Effects: dispatch multiple actions (2:51)"
            ]
}
]



export const lessonsRXJS = [
  {
    "chapter": "BONUS (NOVITÀ): RxJS in TypeScript",
    "description": "La registrazione di una sessione di formazione dal vivo su RxJS in JavaScript & Typescript",
    "duration": 3482,
    "duration_formatted": "3:40:02",
    "index": 14,
    "items": [
      "Introduzione a RxJS",
      "Gli operatori di creazione fondamentali",
      "Decine di esempi di operatori pipeable",
      "Higher Order Observable",
      "Chiamate XHR e gestione concorrenza"
    ]
  },
  {
    "chapter": "Introduzione a RxJS",
    "description": "",
    "duration": 3482,
    "duration_formatted": "58:02",
    "index": 14,
    "items": [
      "Introduzione prima parte del corso su RxJS (teoria - articolo)",
      "Premessa (teoria - video) (1:14)",
      "Introduzione a RxJS (3:10)",
      "Imperative vs Reactive Programming (9:25)",
      "RxJS is smart: preview operatori throttleTime & scan (2:41)",
      "Pull vs Push (8:08)",
      "\"next\", \"error\" e \"complete\" functions (5:07)",
      "Subscription e unsubscribe (4:56)",
      "Operatori-di-creazione (6:07)",
      "Pipeable operators (5:01)",
      "Debug and tap operator (4:58)",
      "Comprendere i marble diagrams (3:41)",
      "Tutti gli esempi del capitolo su StackBlitz",
      "Come utilizzare StackBlitz (3:34)"
    ]
  },
  {
    "chapter": "RxJS & Angular: esempi pratici e casi d'uso per la comunicazione con il server",
    "description": "",
    "duration": 2786,
    "duration_formatted": "46:26",
    "index": 13,
    "items": [
      "Intro Capitolo (teoria - articolo)",
      "Operatore \"map\" (5:03)",
      "Angular \"async\" pipe (6:08)",
      "Operatore \"forkJoin\" (5:15)",
      "Operatore \"ForkJoin\" con dictionary (update RxJS 6.4)",
      "Operatore \"combineLatest\" (articolo)",
      "Operatore \"switchMap\": nested XHR (4:07)",
      "Operatore \"switchMap\" per iterare sugli array (3:01)",
      "Operatore \"retry\" e gestione errori con l'operatore \"catchError\" (6:38)",
      "Operatori \"reduce\" e \"scan\" (6:00)",
      "\"switchmap\" vs \"exhaustmap\" (6:14)",
      "\"switchmap\" vs \"concatmap\" vs \"mergemap\" vs \"exhaustmap\" (4:00)",
      "Esercizio online su switchMap"
    ]
  },
  {
    "chapter": "RxJS: advanced topics",
    "description": "",
    "duration": 654,
    "duration_formatted": "10:54",
    "index": 2,
    "items": [
      "Operatore defer(): lazy observables (5:04)",
      "Creazione Operatori Custom RXJS (5:50)"
    ]
  },
  {
    "chapter": "RxJS & Angular: autenticazione e sicurezza",
    "description": "",
    "duration": 2410,
    "duration_formatted": "40:10",
    "index": 10,
    "items": [
      "Cosa sono i BehaviorSubject (articolo)",
      "introduzione al processo di autenticazione in Single Page Applications (TEORIA) (6:51)",
      "Esercizio online su BehaviorSubject",
      "Login e BehaviorSubject (7:31)",
      "Auth-guard e RxJS (4:32)",
      "Interceptor - part1: Subject e getvalue (7:59)",
      "Interceptor - part2: approccio idiomatico (3:09)",
      "Interceptor - part3: gestione errori (6:13)",
      "RxJS & Router Events (3:55)",
      "Live demo e source code"
    ]
  },
  {
    "chapter": "RxJS & Angular Reactive Forms",
    "description": "",
    "duration": 1761,
    "duration_formatted": "29:21",
    "index": 10,
    "items": [
      "Introduzione al capitolo (teoria - articolo)",
      "Reactive Forms vs Template Driven Forms (8:19)",
      "I moduli ReactiveFormsModule e HttpClientModule (0:43)",
      "Registra il tuo token su OpenWeatherMap",
      "Multiple Subscribes (Bad Practice) (4:51)",
      "Evitare subscribe multiple con \"switchMap\" e gestione degli errori con \"catchError\" (3:23)",
      "Utilizzare operatori RxJS con i reactive form: \"startWith\", \"distinctUntilChanged\", \"decounceTime\", \"filter\" (4:40)",
      "L'operatore \"withLatestFrom\" (7:25)",
      "Password match: \"combineLatest\" e FormControl (articolo)",
      "Esercizio su FormControl e combineLatest"
    ]
  },
  {
    "chapter": "Multicast & RxJS Subjects",
    "description": "",
    "duration": 2101,
    "duration_formatted": "35:01",
    "index": 7,
    "items": [
      "Introduzione al concetto di Subject - unicast vs multicast (10:01)",
      "Utilizzo BehaviorSubject per contenere e condividere dati (6:51)",
      "Subject as Observer (5:03)",
      "Multicast: \"Subject\" vs operatore \"share\" (4:32)",
      "\"Subject\" vs \"BehaviorsSubject\" vs \"ReplaySubject\" vs \"AsyncSubject\" (6:31)",
      "Sommario e demo sulle diverse tipologie di Subject (2:03)",
      "Risorse e marble diagrams"
    ]
  },
  {
    "chapter": "EXTRA: intro functional programming by Andrea Bertoli",
    "description": "",
    "duration": 827,
    "duration_formatted": "13:47",
    "index": 4,
    "items": [
      "Intro",
      "1. Introduzione alla FP (5:08)",
      "2. Composizione di funzioni (3:58)",
      "3. Immutabilità, side effects e stato (4:41)"
    ]
  }
]