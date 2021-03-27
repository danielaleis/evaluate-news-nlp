# evaluate-news-nlp

Udacity Front End Web Developer Nanodegree - Project 4: Evaluate News with NLP

This project was part of the Udacity Front End Developer Nanodegree Program: Its the forth project and Udacity provided the starter code. The finished project is able to analysis news articles - by pasting the text in or providing the URL of an article.

The student needs to make that work with an API for Natural Language Processing (NPL). MeaningCloud was used in this project. It can evaluate a news articles in a number of ways. I choose to analyze the texts with three parameters: confidence, irony and subjectivity.

My project has two tests with jest for the the functions prepareContentUI and inputChecker. The latter function determines if the input is text or a URL - so the user can input either form of content. If no input is given, the user is told in the results form. 

Udacity created this project to give the student practice with the following skills:
#Set up Webpack
#Install Webpack Loaders and Plugins
#Use APIs
#Create layouts and page design
#Apply Sass styles
#Use Service workers