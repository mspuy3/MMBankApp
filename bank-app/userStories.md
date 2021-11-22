Project - Banking App
Scenario
The user is a bank employee who manually manages the bank's accounts. He does the creation of account manually using the account holders name and sets the initial balance of the account if possible. He also does the withdrawal and deposit manually for each account. He also does the transfer of balances if there are requests for it. Your task is to help this poor employee out by creating a simple admin banking app.
Objective
Create a simple Banking Javascript App
Requirements
HTML/CSSJavascript
Objective
app should have a page to display all users (can be a table where the name and balance are visible)app should have a page for creating a userapp should have a page for deposit/withdraw/transfer (can be separate or in one page)all design features will depend on YOUR IDEAS.
Functions
Here are the required functions:
create_user(user, balance)function creates new user in the systemNew user has zero balance (or an optional initial balance)user (argument) is any string valuedeposit(user, amount)increases user's balance by amount valuereturns new_balance of the userwithdraw(user, amount)decreases user's balance by amount valuereturns new_balance of the usersend(from_user, to_user, amount)decreases from_user's balance by amount valueincreases to_user's balance in amount valuereturns balance of from_user and to_user in given formatget_balance(user)returns balance of the user in given format (₱xx,xxx.xx or Phpxx,xxx.xx)list_users()returns all users
Error Handling
wrong_arguments (e.g. amount cannot be negative, name cannot start with a number)user_already_exists ('Den' == 'den')user_does_not_exists ('Den' == 'den')not_enough_moneysender_does_not_existsreceiver_does_not_exists
Use localStorage
You may use a button somewhere in your application page that when pressed should load the initial data to the localStorageThis will help you, and other visitors on you Github Page, to immediately test the capabilities of your banking app
Note: localStorage across different pages will only work on your Github Pages because it depends on the domain.
Something Unique...
Create at least 3 features unique to your banking appThe feature should make it convenient for the user to use your app.It can be a graph of some sort?It can be a totally new page that does another thing?Or just surprise us... 😏😏😏
Presentation
You will be presenting your Banking app starting <1 week after>.
Guide to the presentation:
Demo the basic functionality, then point out the unique features. (Every item in the Errors slide should be handled, I'll ask questions as you present 😉)What were the challenges your duo faced?How did you come up with your app's unique features? (Maybe inspired by another app?)