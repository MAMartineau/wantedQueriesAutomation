var recordString = "Valid"

var homePage = {}

var selector = {
    hdrField: 'input[name=hdrInput]',
    mkeField: 'input[name=mkeInput]',
    oriField: 'input[name=oriInput]',
    namField: 'input[name=namInput]',
    sexField: 'select[name=sexInput]',
    racField: 'select[name=racInput]',
    hgtField: 'input[name=hgtInput]',
    wgtField: 'input[name=wgtInput]',
    haiField: 'input[name=haiInput]',
    offField: 'input[name=offInput]',
    dowField: 'input[name=dowInput]'
}


var person = {
    hdrInput: "1234567890",
    mkeInput: "ABC",
    oriInput: "OAI123456",
    namInput: "Harry Dresden",
    sexInput: "M",
    racInput: "W",
    hgtInput: "607",
    wgtInput: "225",
    haiInput: "Brown",
    offInput: "Arson",
    dowInput: "10312010"
}

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000/#/enter')
        // homePage = browser.page.homePage()
        // homePage.navigate()
            .waitForElementPresent('#root', 5000)
                    
    },
    after: browser => {
        browser.end()
        //homePage.end()
    },
    'Web App can be reached and is available': browser => {
        browser
        //homePage
            .expect.element("#root").to.be.present
    },
    'Open menu and navigate': browser => {
        browser
        //homePage
            .setValue(selector.hdrField, person.hdrInput)
            .setValue(selector.mkeField, person.mkeInput)
            .setValue(selector.oriField, person.oriInput)
            .setValue(selector.namField, person.namInput)
            .setValue(selector.sexField, person.sexInput)
            .setValue(selector.racField, person.racInput)
            .setValue(selector.hgtField, person.hgtInput)
            .setValue(selector.wgtField, person.wgtInput)
            .setValue(selector.haiField, person.haiInput)
            .setValue(selector.offField, person.offInput)
            .setValue(selector.dowField, person.dowInput)
            .click('#saveBtn')

            // .setValue('input[name=hdrInput]', '1234567890')
            // .setValue('input[name=mkeInput]', 'ABC')
            // .setValue('input[name=oriInput]', 'OAI123456')
            // .setValue('input[name=namInput]', 'Harry Dresden')
            // .setValue('select[name=sexInput]', 'M')
            // .setValue('select[name=racInput]', 'W')
            // .setValue('input[name=hgtInput]', '607')
            // .setValue('input[name=wgtInput]', '225')
            // .setValue('input[name=haiInput]', 'Brown')
            // .setValue('input[name=offInput]', 'Arson')
            // .setValue('input[name=dowInput]', '10312010')
            // .click('#saveBtn')
            // .expect.element('#validHeader').text.to.equal(recordString).before(500)
    },
    

}
