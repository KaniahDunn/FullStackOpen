```mermaid
sequenceDiagram
    participant browser
    participant server 

    browser-->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser-->>server: GET chrome-extension://opafjjlpbiaicbbgifbejoochmmeikep/style.css
    activate server 
    server-->>browser: Stylesheet 
    deactivate server 

    browser-->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server 
    server-->>browser: Document/Redirect 
    deactivate server 
```
