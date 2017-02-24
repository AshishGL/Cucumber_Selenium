import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class SendFriendRequest {
	public static WebDriver driver;
	
	
	
	
	@Given("^I am on home page$")
	public void i_am_on_home_page() throws Throwable {
		
		if(driver.findElement(By.id("u_0_4")).isDisplayed())
		{
			
			System.out.println("User is Successfully Login");
		}
		else
		{
			
			System.out.println("Invalid User Credentials");
		}
	    
	}

	@When("^I Enter \"(.*?)\" in search bar$")
	public void i_Enter_in_search_bar(String arg1) throws Throwable {
		
		driver.findElement(By.xpath(".//*[@id='u_2_2']/input[1]")).sendKeys(arg1);
		//action.sendKeys(Keys.ENTER).perform();
		
	    
	}

	@When("^I click on the first result found$")
	public void i_click_on_the_first_result_found() throws Throwable {
		driver.findElement(By.className("_5d-4")).click();
	    
	}

	@When("^I click on Add Friend option$")
	public void i_click_on_Add_Friend_option() throws Throwable {
		
		driver.findElement(By.xpath(".//*[text()='Add Friend']")).click();
	   
	}

	@Then("^Add Friend request should be sent to \"(.*?)\"$")
	public void add_Friend_request_should_be_sent_to(String arg1) throws Throwable {
		if(driver.findElement(By.xpath(".//*[contains(text()='Friend Request Sent')]")).isDisplayed())
		{
			System.out.println("Friend Request Sent Successfully");
			
		}
		else
		{
			
			System.out.println("Unable to send Friend Request");
		}
	}


}
