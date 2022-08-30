const { GoogleSpreadsheet } = require ('google-spreadsheet')
const credentials = require ( './credentials.json')

const doc = new GoogleSpreadsheet('14E9bFureZ4nJRIRllICz5_JL9Rgr18JvYC0vZOnJPdo')

const run = async() => {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)
}

run()