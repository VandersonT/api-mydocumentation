# Api-MyDocumentation

> Status: Developing ⚠️

### This project is an API for the 'mydocumentation' system, it controls all the data in it.

<br/>

<table>
    <tr>
        <td>Node.js</td>
        <td>Express</td>
        <td>Typescrip</td>
        <td>Sequelize</td>
    </tr>
    <tr>
        <td>16.17.0</td>
        <td>4.18.2</td>
        <td>4.8.2</td>
        <td>6.25.4</td>
    </tr>
</table>

<br/><br/>


# Starting
<br/>

First thing first, run all the codes in the terminal to start:

```
#Install all the dependencies
npm install

#Create the database
npx sequelize-cli db:create

#Create the tables
npx sequelize db:migrate

#Create the default data
npx sequelize db:seed:all
```
Now you are ready to start.


<br/><br/>


# About Database Tables:

<br/>

+ Admin
<br/>This table contains the administrator account data such as login, position, etc.

+ Doc_view
<br/>This table contains views of all documentation.

+ Documentation
<br/>This table stores all the general data of a documentation, such as name, image, when it was created, who created it.

+ Module
<br/>This table stores all modules of a documentation.

+ Topic
<br/>This table stores all media information for this project.This table stores all topics for a module. This is where all the content of a documentation page is stored.

+ Media
<br/>This table stores all media information for this project.

+ System
<br/>This table stores all system information such as version, status.

+ View
<br/>This table stores all system views


<br/><br/>


# Database Versioning:

<br/>Create a new migration:
```
npx sequelize-cli migration: generate --name create-tableName
```

<br/>Run all migrations:
```
npx sequelize-cli db:migrate
```

<br/>Revert the most recent migration.
```
npx sequelize-cli db:migrate:undo
```

<br/>Revert back to a specific migration
```
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
```

<br/>Create a seed file which will add a demo data to our table.
```
npx sequelize-cli seed:generate --name nameHere
```

<br/>In last step you created a seed file; however, it has not been committed to the database. To do that we run a simple command.
```
npx sequelize-cli db:seed:all
```

<br/><hr/><br/>

🔚 That's all you need to understand this project. I hope I have made this sufficiently clear. Thanks for reading :)