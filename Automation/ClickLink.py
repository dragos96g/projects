import time

from selenium import webdriver
from config.settings import *

driver = webdriver.Chrome(executable_path=CHROME_PATH)

class TestingClickLink():

    def clickLink(self):

        driver.get("http://demo.guru99.com/test/link.html")

        link = driver.find_elements_by_link_text("click here")
        #att = link.get_attribute("href")
        for onelink in link:
            att = onelink.get_attribute('href')
            if att == "http://www.fb.com/":
                onelink.click()
                title = driver.title
                if "Facebook" in title:
                    print("Found")
                break


        time.sleep(5)


test = TestingClickLink()
test.clickLink()
driver.quit()