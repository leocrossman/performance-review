# Project Structure

## _Member_

- A _member_ is defined as a user with one or many roles for an org.
- Roles
  - A _member_ of an org can have **one or many** roles attached to their profile for that org.
  - Three Default Roles
    1. _HR_
       - Create new employees
       - Grant access to employees
         - "Send email to employee" button to invite employee to sign in
       - Admin access
       - Only this role can
         - delete reviews
         - delete members
         - Trigger invite email to new employees to be added
       - View a list of all performance reviews for all members
         - <span style="color:orange">STRETCH: Can filter this list by manager, time, etc...</span>
    2. _Manager_
       - Has a **many to many** relationship with _employees_ assigned to each other (bidirectional)
       - Has access/a view of all _employees_ assigned to them.
         - Can view a list of all past performance reviews
         - Can select/view previous reviews
         - Can create a new review
         - <span style="color:orange">STRETCH: Can edit previous performance reviews</span>.
    3. _Employee_
       - Has a **many to many** relationship with _managers_ assigned to each other (bidirectional)
       - Can view all of their reviews
       - Can select one review to view
       - Can check the box that they have read the review
       - Can comment on a review
         - e.g. address the areas for improvement and acknowledge that they will improve by the next period
- A _member_ can have one or many roles
  - e.g. A member can have the _employee_ and _manager_ roles if the _member_ gives feedback to **one or many** members with the _employee_ role, as well as receiving feedback from **one or many** users in the same org (_member_) with the _manager_ role.

## _Review_

- A _review_ is defined as a component which displays data and metadata for a _member_ with the role _employee_
  - Data - A text component containing the comments left by the _manager_.
  - Metadata
    - Date/Time _review_ was created
      - <span style="color:orange">STRETCH: Display last edit date/time</span>.
    - The name of the _manager_ who created the review
      - <span style="color:orange">STRETCH: The name(s) of the _managers_ who have made edits to this _review_</span>.
    - <span style="color:orange">STRETCH: Custom tags for reviews</span>.

# User Stories

#### **Color Key**

    - White ➡ MVP
    - Orange ➡ Stretch Goals

## A user should be able to...

- ### Arrive at a home page and be able to:

  - Arrive in one of two states:

    - Guest
      - Log in
      - Sign up
    - User

      - Either a first time user or returning user

        - First time ➡ choose between

          - Add an organization/company/team (hereafter refered to as "org") to their profile
          - Create an org
            - Assign themselves to either a _manager_ or _employee_ role
            - <span style="color:orange">STRETCH: Create one or more custom roles</span>.

        - Returning user
          - View a list of all orgs the user is a _member_ of
          - Select the org for which they want to interact with

- ### A user who is a _member_ of an org should
  - Be given a default role of _member_
  - Be able to enter a password to obtain the role, _manager_.
    - <span style="color:orange">STRETCH: Request for an existing _manager_/custom role to grant access to _manager_/custom role</span>.

## Miscellaneous

- Employees review managers too
- Think about how to add more roles before defining schema with rigid two-role structure
- Roles
  - Employee
    - Review
    - Comment
    - Accept/Agree to goals for next period
      - "Yes I am supposed to x,y,z.
    - Conditionaly view
      - Salary
      - Raise
      - Bonus
  - Manager
    - Can submit a salary increase/bonus request to HR
      - Show employee if the request was approved
      - When the company is ready to fire an employee, they can say
        - " Look we have the evidence that you did not meet the expectations outlined to you in your review(s)."
  - HR
    - Create new employees
    - Grant access to employees
      - "Send email to employee" button to invite employee to sign in
    - Admin access
    - Only this role can
      - delete reviews
      - delete members
      - Trigger invite email to new employees to be added
      - Delete the organization?
      - Add roles
- Review

  - Data should have date be published
  - Check box that it was reviewed
  - Log if the employee viewed the review but did not click "reviewed"
  - Future performance goals
    - Employee can make comments
  - Current Salary
    - Could be conditionaly visible only if the manager wants it shown
    - Potential raise/bonus
    - Salary history
  - <span style="color:orange">- STRETCH: Review wizard
    - Questions the manager can answer 1-10
      - Questions have helpful descriptions for manager/employee
    - KPI (Key Performance Indicators)
      - Some have no meaning for some employees
        - Checkboxes for different KPIs to be applied to each employee by manager or HR (TBD)
      - Create new KPI...
      - Template/starter KPIs
        - Punctuality
          - Don't do it for senior directors/devs etc
          - Do it for fork lift operator
        - Customer facing
          - Manners
        - Online presence?
          - How are their online reviews?
        - How do they get along with others?
        - Positive member of the team?</span>

- Log in

  - Welcome to your reviews for **\_\_\_\_** organization
  - HR should be the only role with privileges to create a new member
    - Manager/Employee do NOT create accounts

<span style="color:orange">
  STRETCH:

- Dev role
- Export reviews to csv?
- Mobile view so employees can do reviews on the train etc
  </span>
