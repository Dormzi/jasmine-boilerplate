import FormPage from '../pageobjects/form.page'

describe('auth form 4', function () {
    it('should deny access with wrong creds', function () {
        FormPage.open()
        FormPage.username.setValue('foo')
        FormPage.password.setValue('bar')
        FormPage.submit()

        FormPage.flash.waitForDisplayed()
        expect(FormPage.flash).toHaveTextContaining('Your username is invalid!')
        browser.pause(4 * 1000 * 60)
    })

    it('should allow access with correct creds', function () {
        FormPage.open()
        FormPage.username.setValue('tomsmith')
        FormPage.password.setValue('SuperSecretPassword!')
        FormPage.submit()

        FormPage.flash.waitForDisplayed()
        expect(FormPage.flash).toHaveTextContaining('You logged into a secure area!')
    })
})
