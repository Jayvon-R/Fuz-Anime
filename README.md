# Flatiron Front End Phase 2 Project - FuzAnime

FuzAnime - a single-page application (SPA) build using React that allows users to explore anime, watch anime, and rate anime!

![Screenshot of FuzAnime App](https://github.com/Jayvon-R/flatiron-phase-2-project/blob/main/Screenshot%202023-10-08%20180723.png?raw=true)

## Features

- Browse a list of the current top-airing anime
- Search for anime by title
- View detailed information about specific anime (synopsis, genres, airing status, etc)
- Rate anime from 0-10

## Installation

To get started with FuzAnime, follow these steps:

1. Clone this repository:

```shell
git clone https://github.com/Jayvon-R/flatiron-phase-2-project
```

2. Navigate to the project directory:

```shell
cd flatiron-phase-2-project
```

3. Install dependencies

```shell
npm install
```

4. Start the JSON Server for the backend

```shell
json-server --watch db.json --port 3001
```

5. Start the React development server

```
npm start
```

6. Go to http://localhost:3000 and you're set!

## Usage

- On the homepage, you can explore a list of top airing anime and anime episodes that recently released.
- Use the search bar to search for anime by title.
- Click on an anime card to view detailed information about that anime.
- From the anime details page, you can submit your rating which is then stored at "http://localhost:3001/ratings".
- With the backend server running, a GET request is made to the anime you click on, and POST requests are made via ratings. 
- You can also click on an episode which will redirect you to that episode on Gogoanime where you can watch.

## Contributor's Guide

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see LICENSE for details.




