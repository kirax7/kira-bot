const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Meu Dono\n' // full name
            + 'ORG:Kira Bot;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=9188817577:+91 918881 7577\n' // WhatsApp ID + phone number
            + 'END:VCARD'

module.exports = vcard
