const { GoogleSpreadsheet } = require ('google-spreadsheet')
const credentials = require ( './credentials.json')

const doc = new GoogleSpreadsheet('14E9bFureZ4nJRIRllICz5_JL9Rgr18JvYC0vZOnJPdo')

const run = async() => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        
        const sheet = doc.sheetsByIndex[1]
        await sheet.addRow({
            Nome: 'Guilherme Teixeira',
            Email: 'guilhermeart2015@hotmail.com',
            Whatsapp: '12 988444074',
            Cupom: 'cupom01',
            Promocao: 'promo01'
        })
    }catch (err) {
        console.log(err)
    }
}

run()