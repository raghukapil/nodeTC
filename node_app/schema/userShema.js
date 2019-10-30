/* jshint esversion: 6 */
/* jshint node: true */

"use strict";

module.exports = {
    userDetails: {
        request: {
            "type": "object",
            "properties": {
                "firstName": {
                    "type": "string"
                },
                "lastName": {
                    "type": "string"
                }
            },
            "required": ["firstName", "lastName"]
        }
    }
};
