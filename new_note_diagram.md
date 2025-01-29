New Note Diagram 
    Participant browser 
    Participant server 

    browser-->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser-->>server: GET chrome-extension://opafjjlpbiaicbbgifbejoochmmeikep/style.css
    activate server 
    server-->>browswer: stylesheet 
    deactivate server 

    browser-->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server 
    server-->browser: document/redirect 
    deactivate server 
    


