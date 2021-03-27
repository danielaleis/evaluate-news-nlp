# evaluate-news-nlp

## Udacity Front End Web Developer Nanodegree - Project 4: Evaluate News with NLP

This project is part of the Udacity Front End Developer Nanodegree Program: Its the fourth project and Udacity provided the starter code. The finished project is able to analyse news articles - by pasting the text or providing the URL of the article.

The student needs to make that work with an API for Natural Language Processing (NPL). [MeaningCloud](https://www.meaningcloud.com/developer/sentiment-analysis) was used in this project. It can evaluate a news article in a number of ways. I choose to analyse the texts with three parameters: confidence, irony and subjectivity.

My project has unit-tests with [jest](https://jestjs.io/docs/getting-started) for the functions prepareContentUI and inputChecker. The latter function determines if the input is text or a URL - so the user can enter either form of content. If no input is given, the user is told in the results box. 

Udacity created this project to give the student practice with the following skills:
- Set up Webpack
- Install Webpack Loaders and Plugins
- Use APIs
- Create layouts and page design
- Apply Sass styles
- Use Service workers

## How to use
1. Create a file .env with an apikey for meaningcloud
2. Run "npm run test" for unit-tests
3. Run "npm run build-dev" for the dev-mode. You can access the project in your browser with localhost:8080
4. Run "npm run build-prod" and "npm run start" for production-mode. You can access the project in your browser with localhost:8080
