const swaggerAutogen = require("swagger-autogen")()
require("dotenv").config()
const doc = {
    info: {
        version: "1.0.0",
        title: "724 events API",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    host: "localhost:8080",
    basePath: "/api",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Event",
            "description": "Endpoints"
        }
    ],
    definitions: {
        Event: {
            type: "soirée entreprise",
            date: new Date("2022-04-29T20:28:45.744Z"),
            title: "Conférence #productCON",
            cover: `http://localhost:${process.env.PORT}/images/priscilla-du-preez-Q7wGvnbuwj0-unsplash1.png`,
            description: "Présentation des outils analytics aux professionnels du secteur ",
            nb_guest: 1300,
            periode: "24-25-26",
            prestations: [
                "1 espace d’exposition",
                "1 scéne principale",
                "2 espaces de restaurations",
                "1 site web dédié"
            ],
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18635.88274941813!2d2.346354220353101!3d48.851493228955626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1aa6c84435%3A0x772045ec563b1de2!2sMus%C3%A9e%20des%20Arts%20et%20M%C3%A9tiers!5e0!3m2!1sfr!2sec!4v1675262626727!5m2!1sfr!2sec"
        },
        Contact: {
            name: "Doe",
            surname: "Jhon",
            contactType: "Personnel",
            email: "johndoe@test.tld",
            message: "Exemple de message"
        },
        Inscription:{
            eventId: "0efrg1400351423rfd",
            name: "John",
            surname: "Doe",
            email: "johndoe@test.tld",
            date: "2022-04-29T20:28:45.744Z",
        }


    }
}


const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log('Generated')
})