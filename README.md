# TQI CONSULTORIA E DESENVOLVIMENTO

## React Web Application Boilerplate

The mais goal of this project is keeping and maintaining an up-to-date boilerplate for creating **React Web Apps** and **Progressive Web Apps**.

## :rocket: Startup

Step by step to get this up and running

### Clone repo and go to project folder

```bash
$ git clone http://git.tribanco.com.br/tricard/site-lojista-pwa-web
```

### Install dependencies

```bash
$ npm i
```

### Start server

```bash
$ npm run start
```

## :heavy_check_mark: Patterns

These are some of patterns definitions to help us to keep a default configuration and front-end arquitecture.

- NPM or Yarn? We chose `npm`, but feel free to make your choice;
- UI Kit library? Jump into [MaterialUI](https://material-ui.com);
- For more complex component stylization [Styled Components](https://styled-components.com);
- Internationalization framework [https://react.i18next.com](https://react.i18next.com);
- Linter: Identifying and reporting on ECMAScript/JavaScript patterns [ESLint](https://eslint.org);
- [Why react-scripts?](https://create-react-app.dev/docs/getting-started/)
- [Why Axios?](https://github.com/axios/axios#features)
- [Why Material?](https://material-ui.com/blog/material-ui-v4-is-out)

Redux or Hooks/Context Api?

- Redux is Perfect for larger applications where there are high-frequency state updates.
- Context Api resourceful and ideal for small applications where state changes are minimal.


## :open_file_folder: Project structure

- **src/assets**: Static files (images, fonts and icons);
- **src/resources**: API and endpoints configurations;
- **src/components**: Components of React to be shared and reused in the project;
- **src/common**: Utilities, resources, constants, assets, configurations, i18n and others;
- **src/containers**: Page components that apply business knowledge and present themselves as pages;
- **src/routes**: Routes of app to be used by SPA and user navigation;
- **src/store**: State configuration with Redux;
- **docs**: Docs configuration.