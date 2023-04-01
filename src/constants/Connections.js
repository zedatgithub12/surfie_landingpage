const Connection = {
    url: "http://localhost:3000",
    // api: "http://localhost:8000/api",
    api: "https://admin.surfieethiopia.com/backend/api",
    remote: "https://pstest.puresight.com/cgi-bin/ProvisionAPI/",
    login: "/login",
    customers: "/customers",
   
    search: "/search/",
    addlicense: "/add/",
    removeLicense: "/remove/",
    deactivate: "/deactivate/",
    detach: "/detach/",
    pending: "/pending",
    activate: "/activate/",


    // support api's
    support: "/support",
    newQuery: "/newquery",
    closeTicket: "/closeticket/",

    //mailing api's
    compose: "/compose",

    //drop message
    contact: "/contact",

    //free trial email collection api
    trial: "/trial",
};

export default Connection;