# Mindmaps

> ✨This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available scripts

### yarn start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### yarn test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### yarn run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

## How to run the project

### Locally

The project can be run locally using `yarn start` script. It runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

### Docker

The project can be also run in docker using `docker-compose up --build`. It runs the app in development mode. Open http://localhost:3001 to view it in the browser.

## Main structure and architectural principles

1. Do not destructure props so we know where it comes from
2. Mutation (from react-query) names should follow `[crudMethod][Resource]Mutation` example: `createUserMutation`.
3. For modules which will be inside other module use nested `modules` pattern `modules/instances/modules/instances-list/instances-list.component.tsx`. (ONLY IF ITS NEEDED, FOR NOW WE'RE TRYING TO KEEP STRUCTURE AS FLAT AS POSSIBLE)
4. Names for newly created modules should follow pattern `[resource]-[?operation]` example `instances-list`
5. Store types of top-level entities in separate types module to avoid circular deps.
6. Module names for resources gotten from API should be unified and follow names from API. Example: Module for `/instances` endpoints should include name `instances`.
7. All styles should be placed in `use-styles.hook.ts` for each module.
8. All content showed on page should be stored in `content.json` file for each module.
9. Every const-like variable (consts, enums etc) should have name with CAPITAL_LETTERS.
10. Name convention:

- Components: `[resource]-[?method].[?functionality].component.tsx` Example: `instances.page.component.tsx` or `instances-create.dialog.component.tsx`
- Pages: `[module].page.component.tsx` => main component uses for route.
- Styles: should be inside component where it's used.
- Types: `[module].types.ts`, should not be created for nested modules.
- Constants: `constants.ts`, all constants variables reusable in scope of module.
- API mocks: `[module].mock.handlers.ts`
- reusable hooks: `use-[functionality].ts` ==> should be stored in `src/hooks`
- local hooks: `use-[functionality].hook.ts` ==> should be stored in local module directory
- resusable components: like UI, errors etc ==> please insert in `src/components/[componentGroupName]/*.ts(x)` example `src/components/errors/errors.component.tsx`

# Authors ✨

<table>
  <tr>
    <td align="center"><a href="#"><img src="https://avatars.githubusercontent.com/u/576068?s=400&u=60be2bede95aad024ead28cfc91ece157ec51f70&v=4" width="100px;" alt=""/><br /><sub><b>Benedykt Dryl</b></sub></a></td>
    <td align="center"><a href="#"><img src="https://avatars.githubusercontent.com/u/1570599?s=400&u=12a71142321d49cad69b379f74b31de1fcf2aab8&v=4" width="100px;" alt=""/><br /><sub><b>Lukasz Szyndzielorz</b></sub></a></td>
    <td align="center"><a href="#"><img src="https://avatars.githubusercontent.com/u/25898331?s=460&u=a1489c65ba165f83cdbca99778f224882ea7cdff&v=4" width="100px;" alt=""/><br /><sub><b>Hubert Stemplewski</b></sub></a></td>
  </tr>
</table>
