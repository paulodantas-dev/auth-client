# auth-client-app

APP - building

API - https://auth-app-node.herokuapp.com

## 🛠 Skills

Javascript, ReactJS, react-router-dom, Redux, HOC, Private Route, Hook, react-hook-form, yup, axios

## 🚀 About Me

I am a full-stack developer and javascript specialist.(M.E.R.N)
Feel free to take a look at my latest projects on my [portifolio page](https://portfolio-paulodantas-dev.vercel.app/)

## Used stack

**Front-end:** ReactJS + Typescript

**CSS:** tailwindcss

**Global-State** Redux Toolkit

## Installation / Execute

How to install and execute the project in LOCALHOST

```bash
    git clone https://github.com/paulodantas-dev/auth-client.git
    cd auth-client
    yarn / npm install
    yarn prepare / npm run prepare
    yarn dev / npm run dev
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env

`NODE_ENV`

## Deploy

To deploy this project, run

```bash
  yarn build / npm run build
```

## Lib

- [react](https://reactjs.org/)
- [axios](https://axios-http.com/)
- [react-hook-form](https://www.react-hook-form.com/)
- [react-icons](https://github.com/react-icons/react-icons#readme)
- [react-router-dom](https://github.com/remix-run/react-router#readme)
- [react-toastify](https://github.com/fkhadra/react-toastify#readme)
- [yup](https://github.com/jquense/yup)
- [tailwindcss](https://tailwindcss.com/)
- [typescript](https://www.typescriptlang.org/)
- [@reduxjs/toolkit](https://redux-toolkit.js.org/)


## Functionalities

- Full Responsive
- Tests 100% coverage
- Mode Suspense Lazy Loading
- Axios Config
- AuthContext
- Private Route

## Exemples

Value of AuthContext Provider

```javascript
const memoedValue = useMemo(
  () => ({ user, token, signUp, signIn, error, isLoading, logout }),
  [user, token, signUp, signIn, error, isLoading, logout]
);
```

Create my own hook

```javascript
import { useContext } from 'react';

import { AuthContext } from './AuthContext';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
```

How to use my own UseHook to check if context token exists by blocking '/' path

```javascript
export const RequireAuth = (): JSX.Element => {
  const { token } = useAuth();

  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
```

How to use my own hook

```javascript
const { user, isLoading, logout } = useAuth();

if (isLoading) return <Loader />;

if (!user) return <Navigate to="/login" />;
```

## Demo

![app](https://github.com/paulodantas-dev/auth-client/blob/main/src/assets/app.gif)

## Screenshots

![App Screenshot1](https://github.com/paulodantas-dev/auth-client/blob/main/src/assets/1.png)
![App Screenshot2](https://github.com/paulodantas-dev/auth-client/blob/main/src/assets/2.png)
![App Screenshot3](https://github.com/paulodantas-dev/auth-client/blob/main/src/assets/3.png)
![App Screenshot4](https://github.com/paulodantas-dev/auth-client/blob/main/src/assets/4.png)
![App Screenshot5](https://github.com/paulodantas-dev/auth-client/blob/main/src/assets/5.png)
![App Screenshot6](https://github.com/paulodantas-dev/auth-client/blob/main/src/assets/6.png)
![App Screenshot7](https://github.com/paulodantas-dev/auth-client/blob/main/src/assets/7.png)
![App Screenshot8](https://github.com/paulodantas-dev/auth-client/blob/main/src/assets/8.png)
![App Screenshot9](https://github.com/paulodantas-dev/auth-client/blob/main/src/assets/9.png)
![App Screenshot10](https://github.com/paulodantas-dev/auth-client/blob/main/src/assets/10.png)
![App Screenshot11](https://github.com/paulodantas-dev/auth-client/blob/main/src/assets/11.png)
![App Screenshot12](https://github.com/paulodantas-dev/auth-client/blob/main/src/assets/12.png)

## Feedback

If you have any feedback, please let me know via paulodantasbjr@gmail.com
