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

### App.tsx (Box Area Component)

1. Search button in search bar wasn't visually appealing
   - Issue: The search button did not have a rounded appearance, making it look out of place.
   - Fix: Added className="rounded-full" to the Button component to give it a rounded appearance, enhancing the overall design.

### App.tsx

1. After the for tag list component, there was no padding below
   - Issue: The layout looked cramped as there was no padding below the tag list component.
   - Fix: Added a padding of 12 at bottom to the TagList component to provide adequate spacing and ensure a clean layout.

### App.tsx (TagList Component)

1. Missing prop types

   - Issue: The TagList component did not have prop types defined, which could lead to potential type errors.
   - Fix: Added prop types to the TagList component to ensure type safety and better code maintainability.

2. Unused setTags function
   - Issue: The setTags function was defined but not used, leading to unnecessary code.
   - Fix: Removed the setTags function from the component as it was not needed.

### Overall

1. Cluttered code
   - Issues : Many components were in the same file, making it difficult to read and maintain.
   - Fix: Separated components into their own files for better organization and readability. Created a layout folder inside components to store those files for now.
