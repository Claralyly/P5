const Contact = require("../models/Contacts")
exports.addContact = (req, res, next) => {
    console.log(req.body)
    /*  #swagger.tags = ['Contact']
            #swagger.description = 'Endpoint to send a contact information.' */

    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Contact information.',
            required: true,
            schema: { $ref: "#/definitions/Contact" }
    } */
    const contact = new Contact({...req.body});
    console.log(contact)
    contact.save()
        .then(() => res.status(201).json({ message: 'Merci de nous avoir contacté !'}))
        .catch(error => res.status(400).json({ error }));
}