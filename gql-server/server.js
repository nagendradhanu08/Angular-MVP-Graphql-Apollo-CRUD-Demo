var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

// GraphQL schema
var schema = buildSchema(`
   type Query {
        courses : [Course]
        getCourseById(id: Int!): Course
        getCoursesByTopic(topic: String!): [Course]
        updateCourse(id: Int!, topic: String!,title: String!,author: String!, description: String!): Course
        addeCourse(topic: String!,title: String!,author: String!, description: String!): [Course]
    },
        type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
    }
`);

var coursesData = [
    {
        id: 1,
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
        topic: 'Node.js'
    },
    {
        id: 2,
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
        topic: 'Node.js'
    },
    {
        id: 3,
        title: 'JavaScript: Understanding The Weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
        topic: 'JavaScript'
    }
]

var getCourseById = function (args) {
    var id = args.id;
    return coursesData.filter(course => { return course.id == id; })[0];
}

// This funaction return course details by course Id 
var getCoursesByTopic = function (args) {
    if (args.topic) {
        var topic = args.topic;
        return coursesData.filter(course => course.topic === topic);
    } else {
        return coursesData;
    }
}

// This funaction update course details 
var updateCourse = function ({ id, topic, title, author, description }) {
    coursesData.map(course => {
        if (course.id === id) {
            course.topic = topic;
            course.title = title;
            course.author = author;
            course.description = description;
            return course;
        }
    });
    return coursesData.filter(course => course.id === id)[0];
}

// This funaction update course details 
var addeCourse = function ({ id, topic, title, author, description }) {
    const data = {
        "id": id,
        "topic": topic,
        "title": title,
        "author": author,
        "description": description
    }
    return coursesData.push(data);
}
// Create an express server and a GraphQL endpoint
var getAllcourses = function () {
    return coursesData;
}

var root = {
    getCourseById: getCourseById,
    getCoursesByTopic: getCoursesByTopic,
    updateCourse: updateCourse,
    courses: getAllcourses,
    addeCourse: addeCourse
};

// Create an express server and a GraphQL endpoint
const cors = require('cors')

var app = express();

app.use(cors())

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));