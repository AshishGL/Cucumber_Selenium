import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {

	public static WebDriver driver;

	public static  WebDriver getWebDriverInstance() {
		if (driver == null) {
			driver = new FirefoxDriver();
		}
		return driver;

	}

	
	@Given("^I open chrome browser$")
	public void i_open_chrome_browser() throws Throwable {

		getWebDriverInstance();

	}

	
	@When("^I navigate to facebook$")
	public void i_navigate_to_facebook() throws Throwable {
		driver.get("http://www.facebook.com");

	}

	
	@When("^enter username, password and hit Enter$")
	public void enter_username_password_and_hit_Enter() throws Throwable {
		driver.findElement(By.id("email")).sendKeys("9015070092");
		driver.findElement(By.id("pass")).sendKeys("Test@1234");
		driver.findElement(By.id("u_0_q")).click();

	}

	
	@Then("^User should be on FB homepage$")
	public void user_should_be_on_FB_homepage() throws Throwable {

		if (driver.findElement(By.id("u_0_4")).isDisplayed()) {

			System.out.println("User is Successfully Login");
		} else {

			System.out.println("Invalid User Credentials");
		}
	}

}
