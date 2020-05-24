Project: create a to do list app that allows the user to type in what they need to do add add it to a list. This list should display what they typed in as well as the ability to mark the item done. The user should also be able to remove list items. 

The page on load should simply have the header information with a blank list, and beneath it an input box and an add button (createKeys function). 

Input box: User can type in whatever they want here, but something must be entered into the input box for the add button to run. A blank input box will produce no result for the user. A user can access the add button functionality by clicking add or hitting the Enter key, regardless of the method they choose the focus should always return to the input field and clear the input field. This will make the process of adding items to the list more efficient for the user.  
 
Add button: If there is a value entered into the input box, then we can run the addItem function, which will: 
1) add the input value to a list item
2) each listed item will also generate a done button and a delete button

Done button: upon an intitial click of the done button the listed item will grey out and have a strike through to mark as complete. The done button will also indicate complete by changing to a green color. The done button will have a toggle feature so it can be clicked again to return list item into an active state. User can toggle this item done or not done as many times as they like.

Delete button: when this button is clicked it removes the entire list item which includes the given input value, done button and delete button. Once this is clicked there's no option to bring the list item back, user will have to create a new list item. 
