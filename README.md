# Image Processing API

First Project of Full Stack JavaScript Developer Udacity Nanodegree

## Description
API for image processing that allows the user to visit a url and using url parameters, resize the image based on the parameters provided. Upon viewing an image that’s already been resized, a cached image will be served.


## Objectives

- Use TypeScript to reduce type errors
- Use Prettier for code formating
- Eslint to improve style and structure
- TDD and Unit Testing using Jasmine




## API Reference

#### Main Route

```http
  GET /api/images
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Resize Image

```http
  GET /api/images/resize?filename={filename}&width={width}&height={height}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `filename`      | `string` | **Required**. name of Image to resize |
`width`      | `string` | **Required**. width of resized Image |
`height`      | `string` | **Required**. height of resized Image |




## Installation

Install my-project with npm

```bash
  npm install
```
    
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Building, Formatting, Linting 

To run tests, run the following command

```bash
  npm run build
```
```bash
  npm run prettier
```
```bash
  npm run lint
```
