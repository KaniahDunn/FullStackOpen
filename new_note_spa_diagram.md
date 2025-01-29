```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET chrome-extension://opafjjlpbiaicbbgifbejoochmmeikep/style.css
    activate server
    server-->>browser: Stylesheet
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: Stylesheet
    deactivate server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: {
        "content": "gooy ",
        "date": "2025-01-29T18:46:00.682Z"
    }
    server-->>browser: {"message":"note created"}
    deactivate server
```