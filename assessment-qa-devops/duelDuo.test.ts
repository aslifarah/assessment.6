
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('the Draw button displays the div with id = choices', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await draw.click()
	await driver.sleep(200)
	const div = await driver.findElement(By.id('choices'))
    expect(div).toBeDefined()
})

test('Add to Duo button displays the div with id = player-duo', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await draw.click()
	await driver.sleep(200)
    const duo = await driver.findElement(By.className('bot-btn'))
    await duo.click()
	await driver.sleep(200)
	const div = await driver.findElement(By.id('player-duo'))
    expect(div).toBeDefined()
})