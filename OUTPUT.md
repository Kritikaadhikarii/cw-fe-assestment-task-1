## Changes Made

### App.tsx (Header Component)

1. Disorted placcement of search icon in header in line 91
   - Issue: Search icon is not positioned correctly within the input field
   - Fix: Adjusted the CSS styles to position the search icon correctly. Added top-1/2 transform -translate-y-1/2 to the span element containing the search icon to fix it.

2. Blocked typing in the search bar from line 96
   - Issue: : The search bar was not functional, and users could not type into it.
   - Fix : Added a useState hook to manage the search state. Implemented the Input component to use value={search} and added an onChange handler to update the state when users type.

3. Irrelevant span tags starting in line 89,90
   - Issue: Unnecessary span tags were present in the code, causing confusion.
   - Fix: Removed the redundant span tags that were not needed for the search functionality.

4. Search bar placeholder text missing in line 96
   - Issue: The search bar did not have a placeholder text, making it unclear for users.
   - Fix: Added a placeholder="Search" to the Input component to guide users on what to enter.

5. Responsive design issues in header for mobile screen
   - Issue: The header layout was not optimized for mobile screens.
   - Fix: Kept the square logo of the company but hid the company name in mobile view to ensure a cleaner and more user-friendly interface. This way, there were no clutter and overlapping elements on smaller screens.

### [Another Component Name]

1. ...
   - Issue: ...
   - Fix: ...
2. ...
   - Issue: ...
   - Fix: ...
3. ...
   - Issue: ...
   - Fix: ...
