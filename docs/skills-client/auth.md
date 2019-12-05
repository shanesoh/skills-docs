# Authorization

Authorization depends on the [Installation Mode](/dashboard/install-guide/installModes.html#pass-auth-mode), please make sure to select 
the tab below based on your specific installation mode. 
- In [Pass Auth Mode](/dashboard/install-guide/installModes.html#pass-auth-mode): User's id is derived implicitly from the certificate, an **authorization point is not required**  
- In [PKI Mode](/dashboard/install-guide/installModes.html#pki-auth-mode): Production based installation will require you to implement an authorization endpoint. The goal of the endpoint is to authorize a specific user so that the skills display and skills reporting can be properly secured.

<form-and-pki 
    pki-path="/skills-client/auth/authPKI.html"
    form-path="/skills-client/auth/authForm.html"/>
