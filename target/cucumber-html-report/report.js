$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SendFriendRequest.feature");
formatter.feature({
  "line": 2,
  "name": "As a FB user I want to send friend requests",
  "description": "",
  "id": "as-a-fb-user-i-want-to-send-friend-requests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SendFriendRequest"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 6441628885,
  "status": "passed"
});
formatter.before({
  "duration": 2771130191,
  "status": "passed"
});
formatter.before({
  "duration": 118494204,
  "status": "passed"
});
formatter.before({
  "duration": 51202826,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: Element is not currently visible and so may not be interacted with\nCommand duration or timeout: 16 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027DEL1-DHP-31837\u0027, ip: \u0027172.16.24.13\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d33.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e1b84a4e-3cbc-4b3c-81ca-6f09192c3f89\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:122)\r\n\tat login.enter_username_password_and_hit_Enter(login.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\nCaused by: org.openqa.selenium.ElementNotVisibleException: Element is not currently visible and so may not be interacted with\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027DEL1-DHP-31837\u0027, ip: \u0027172.16.24.13\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.fxdriver.preconditions.visible(file:///C:/Users/ASHISH~1.SHA/AppData/Local/Temp/anonymous4687345265445630744webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:10092)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.checkPreconditions_(file:///C:/Users/ASHISH~1.SHA/AppData/Local/Temp/anonymous4687345265445630744webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12644)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/ASHISH~1.SHA/AppData/Local/Temp/anonymous4687345265445630744webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/ASHISH~1.SHA/AppData/Local/Temp/anonymous4687345265445630744webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/ASHISH~1.SHA/AppData/Local/Temp/anonymous4687345265445630744webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 4,
  "name": "Send Friend Requests",
  "description": "",
  "id": "as-a-fb-user-i-want-to-send-friend-requests;send-friend-requests",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Enter \"friend_Name\" in search bar",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on the first result found",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Add Friend option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Add Friend request should be sent to \"friend_Name\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SendFriendRequest.i_am_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "friend_Name",
      "offset": 9
    }
  ],
  "location": "SendFriendRequest.i_Enter_in_search_bar(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SendFriendRequest.i_click_on_the_first_result_found()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SendFriendRequest.i_click_on_Add_Friend_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "friend_Name",
      "offset": 38
    }
  ],
  "location": "SendFriendRequest.add_Friend_request_should_be_sent_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("sample.feature");
formatter.feature({
  "line": 2,
  "name": "As a user I want to login in Facebook",
  "description": "",
  "id": "as-a-user-i-want-to-login-in-facebook",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5544940649,
  "status": "passed"
});
formatter.before({
  "duration": 3477836983,
  "status": "passed"
});
formatter.before({
  "duration": 88369014,
  "status": "passed"
});
formatter.before({
  "duration": 3513457448,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "FB Login",
  "description": "",
  "id": "as-a-user-i-want-to-login-in-facebook;fb-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to facebook",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enter username, password and hit Enter",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be on FB homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "login.i_open_chrome_browser()"
});
formatter.result({
  "duration": 6769912219,
  "status": "passed"
});
formatter.match({
  "location": "login.i_navigate_to_facebook()"
});
formatter.result({
  "duration": 3104273165,
  "status": "passed"
});
formatter.match({
  "location": "login.enter_username_password_and_hit_Enter()"
});
formatter.result({
  "duration": 2950921259,
  "status": "passed"
});
formatter.match({
  "location": "login.user_should_be_on_FB_homepage()"
});
formatter.result({
  "duration": 967333257,
  "status": "passed"
});
});