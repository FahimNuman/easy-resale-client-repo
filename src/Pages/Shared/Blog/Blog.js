import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 29, 2022</span>
                        <Link rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Topic:Reactjs</Link>
                    </div>
                    <div className="mt-3">
                        <Link rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What are the different ways to manage a state in a React application?</Link>
                        <p className="mt-2">The Four Kinds of React State to Manage
                            Local state.Global state.Server state.URL state..</p>
                    </div>
                    
                </div>
            </div>
            <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 29, 2022</span>
                        <Link rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Topic:Reactjs</Link>
                    </div>
                    <div className="mt-3">
                        <Link rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">How does prototypical inheritance work??</Link>
                        <p className="mt-2">The Four Kinds of React State to Manage
                            Local state.Global state.Server state.URL state.The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                    
                </div>
            </div>
            <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 29, 2022</span>
                        <Link rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Topic:Code Test</Link>
                    </div>
                    <div className="mt-3">
                        <Link rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline"> What is a unit test?Why should we write unit tests?</Link>
                        <p className="mt-2">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                    
                </div>
            </div>
            <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 29, 2022</span>
                        <Link rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Topic:Javascript frm</Link>
                    </div>
                    <div className="mt-3">
                        <Link rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">React vs. Angular vs. Vue?</Link>
                        <p className="mt-2">Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Blog;