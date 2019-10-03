// Check is going to help us validate and sanitize the request body
const {check} = require('express-validator')

const toLowerCase = (value) => {
    // Return the sanitized value
    return value.toLowerCase()
}

exports.validators = [
    // array of valiation chains for various fields in our form
    check('name', 'Please enter a valid name.')
        .trim()
        // Checking to see if the field is empty
        .not().isEmpty()
        .escape(),
        
    check('type', 'Please enter a valid type')
        .trim()
        .not().isEmpty()
        .customSanitizer(toLowerCase)
        .escape()
]