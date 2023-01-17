# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: Calling super pulls values from a higher level of a class to a lower level within the class.

Researched answer: Calling super retrieves values inherited from the superclass into the subclass. A superclass is a class that shares common behaviors that are more general. Subclasses have more specific data to its class, but will also match data found in the superclass. This inheritance relationship between a superclass and subclass is what calling super is for, pulling data down from the superclass to the subclass, and not the other way around.

2. What is a gem? 

Your answer: A gem is a package of features for the Ruby programming language that provides additional functionality.

Researched answer: A package of code functionality and features and their associated files for the Ruby programming language. Ruby gems can be shared with other Ruby programmers so they can use the same features/functionality in Ruby. Ruby gems can also be updated or altered. 

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a database that is not only able to perform create, retrieve, update, and delete actions on data within tables and columns, but create relationships between different tables/columns within a database so that larger amounts of data can be more easily managed.

Researched answer: A relational database has tables of data stored in rows and columns like other databases, but they are unique in that the data in the tables can have a relationship with data stored in a separate table.

4. What are primary keys? Why are they important?

Your answer: The primary key is the unique identifier attached to the data stored in a row of a table in a database. It's important because it provides an identifier to retrieve information even if the location of the data has changed. It also provides cross reference capability for more than one table which is an important feature in relational databases.

Researched answer: Primary keys provide unique identifiers to data entered in the row of a table. This is important because it prevents errors and/or confusion when retrieving data that shares the same name, like people's names. The primary key ensures that repeat names are still unique entries in the database.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: I don't recall the exact HTTP verbs, but I know some of them perform the following functions: Edit, Review, Delete. 

Researched answer: The HTTP verbs along with their corresponding CRUD actions followed by a colon are--get:read, post:create, put:update, patch:update, and delete:delete. Get displays data; post, creates data; put, replaces old data with new data; patch, replaces data that's changed; and finally, delete, removes data.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: A term referring to a pattern to follow to establish the flow of data between the server and the client. REST is an acronym for Representational State Transfer.

2. Model validations: A validation method used to ensure clean code in the database.

3. Params: URL Parameters, or query strings refers to a controller method receiving data to query a database and/or change the view dynamically.

4. ERB: Embedded Ruby or Templated Ruby allows coding in HTML and embedding Ruby code into the view file.

5. API: Application Programming Interface is a software intermediary fostering interaction between separate applications.
