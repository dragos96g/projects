import time

from selenium import webdriver
from config.settings import *

driver = webdriver.Chrome(executable_path=CHROME_PATH)

class ClickCounter():

    def CounterClicks(self):

        driver.get("https://www.rapidtables.com/tools/click-counter.html")

        plus = driver.find_element_by_id("addbtn")

        n = 0
        z = 100
        while n < z:
            plus.click()
            n += 1

        time.sleep(2)


addClicks = ClickCounter()
addClicks.CounterClicks()
print("Done!")
driver.quit()