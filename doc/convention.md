# Todo List Naming convention

## Style

### Color
- Primary Color : `#CDB4DB`
- Secondary Color : `#FFC8DD`
- Third Color : `#000000`
- Fourth Color : `#EFF7F6`

<br>

### Screen display

- Mobile screen : `375px`
- Desktop screen : `1440px`

<br>

### Typography

- Font family : [`'Source Code Pro', Poppins`](https://fonts.google.com/specimen/Poppins)
- Font weight : `200, 400, bold`
- Font size : `24px, 16px, 13px`

## Icon 

- [`react-icons.github.io`](https://react-icons.github.io/react-icons)

## Commenting Rules

Ensure that the comments are meaningful and provide context where necessary, especially for complex logic or components.. In JavaScript and JSX, use single-line and multi-line comments:

```javascript
// Single-line comment

{
  /*
     jsx comment
   */
}

/*
    Multi-line comment
    explaining the purpose
    of the code.
  */
```

## Folder Structure

```bash
    todo-list-app/
    |-- build/
    | |
	|-- doc
	| |-- convention.md
	|-- node_modules/
    | |
	|-- public/
	|  | -- index.html
    |  | -- mainifest.json
    |  | -- robots.txt
	|-- src/
	|   |-- components/
	|   |   |-- EditTodoForm.js
	|   |   |-- Todo.js
    |   |   |-- TodoForm.js
    |   |   |-- TodoList.js
    |   |   |-- TodoLocalStorage.js
	|   |
	|   |-- App.css
    |   |-- App.js
    |   |-- App.test.js
    |   |-- index.css
	|-- .gitignore
	|-- package-lock.json
	|-- packkage.json
    |-- README.md
```

- `build` : Contains static css and js
- `doc` : Contains project's documentation `convention.md`
- `public` : Contains static : index.html, manifest.json and robots.txt
- `src` : Contains the main source code for your application. It contains component `main.js` and `main.css`

<br>

## React code conventions

### Naming convention

#### Naming Convention

- `Components` : Use descriptive and meaningful names for React components. Use PascalCase(capitalizing the first letter of each word) for component names.

```javascript
/// React component
const TodoItem = () => {
    ...
}

/// Avoid
const todoItem = () => {
    ...
}
 
---------------

//Typescript interface
interface TodoItem {
    id: number;
    name: string;
    value: string;
}

// Avoid 
interface todoItem {
    id: number;
    name: string;
    value: string;
}

---------------

//Typescript type allias
type TodoList = TodoIten[];

//Avoid
type todoList = TodoItem[];
```
- `Files` : Name your files using PascalCase, matching the component name. For example, if you have a component named UserCard, the file should be named UserCard.js.

- `Props` : Use descriptive names for props to clearly indicate their purpose. Avoid abbreviations or acronyms unless they are widely understood in the context of your project.

For example:
- *instead of usr, use user.*

```javascript
import React from 'react';

interface User {
    name: string;
    email: string;
    localtion: string;
}

interface UserCardProps {
    user: User;
}

const UserCard = ({ user }) => {
    const { name, email, location } = user;

    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>Email: {email}</p>
        </div>
    );
};
export default UserCard;
```

In this example, the prop user is used to pass user data to the UserCard component. By using a descriptive name like user, it's clear that the prop represents user data, making the code more readable and understandable.

- `State variables` : Prefix state variables with **full form**  to denote boolean values.


```javascript
import React, { useState } from 'react';

//  Prefix state variables with **full form** 

const ExampleComponent = () => {
    const [active, setActive] = useState(false);
    const [error, setError] = useState(false);
    const [render, setRender] = useState(false);


// Avoid
const ExampleComponent = () => {
    const [act, setAct] = useState(false);
    const [err, setErr] = useState(false);
    const [rdr, setRdr] = useState(false);
}

const handleClick = () => {
    setActive(!Active);
};

return (
    <div>
        {Render && (
            <div className={Active ? 'active' : 'inactive'}>
                <button onClick={handleClick}>
                    {Active ? 'Active' : 'Inactive'}
                </button>
                {Error && <p>An error occurred.</p>}
            </div>
        )}
    </div>
    );
};
```

# Git / Github Convention

## Git Branch Strategy

- Git Branch Strategy Convention
- Use the Git Flow branching strategy for managing code changes.
- Create branches with clear names that reflect the purpose of the work.
- Common branch types:
  - `main`: Represents the production-ready codebase.
  - `develop`: Integration branch for ongoing development.
  - `feature/<feature-name>`: For developing new features.
  - `bugfix/<bug-description>`: For fixing bugs.
  - `hotfix/<issue-description>`: For critical fixes in production.
  - `release/<version>`: Preparing a release version.

<br>

## Commit Message Convention

- `feat`: New feature or enhancement.
- `fix`: Bug fix.
- `docs`: Documentation updates.
- `style`: Code style changes (e.g., formatting).
- `refactor`: Code changes that aren't bug fixes or features.
- `test`: Adding or modifying tests.
- `chore`: Maintenance tasks, build changes, etc.

## Use Semantic Versioning (SemVer) Tag

- Follow Semantic Versioning guidelines for version numbering.
- Versions are of the form `MAJOR.MINOR.PATCH`.
- Increment the version as follows:
  - `MAJOR`: Significant changes, breaking backward compatibility.
  - `MINOR`: New features, backward-compatible.
  - `PATCH`: Bug fixes, backward-compatible.
  - Example: `1.0.0` -> `1.1.0` -> `1.1.1`