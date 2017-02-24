import cucumber.api.java.After;
import cucumber.api.java.Before;


public class hooks {
	
  @Before("@SendFriendRequest")
  
  public void test()
  {
	  Login.getWebDriverInstance();
	  
	  
	  System.out.println("Before SendFriendRequest");
	  
	  
  }
  @After("@SendFriendRequest")
  
  public void afterTest()
  {
	  
	  System.out.println("After SendFriendRequest");
  }
  
 

}
