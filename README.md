# auth-server-api

APP - building

## 🛠 Skills

Javascript, ReactJS, react-router-dom, ContextApi, HOC, Private Route, Hook, react-hook-form, yup, axios

## 🚀 About Me

I am a full-stack developer and javascript specialist.(M.E.R.N)
Feel free to take a look at my latest projects on my [portifolio page](https://portfolio-paulodantas-dev.vercel.app/)

## Used stack

**Front-end:** ReactJS + Typescript

**CSS:** tailwindcss

**tests:** jest + react-testing-library

**Global-State** ContextAPI


## Installation / Execute

How to install and execute the project in LOCALHOST

```bash
    git clone https://github.com/paulodantas-dev/auth-client.git
    cd auth-client
    yarn / npm install
    yarn prepare / npm run prepare
    yarn dev / npm run dev
```
## Execute Tests

How to execute tests the project in LOCALHOST

### To execute one test

```bash
    yarn test <nameFile>.test.tsx / npm run test <nameFile>.test.tsx
```

### To execute all tests

```bash
    yarn test / npm run test
```
### To execute one coverage

```bash
    yarn coverage <nameFile>.test.tsx / npm run coverage <nameFile>.test.tsx
```

### To execute all coverage

```bash
    yarn coverage / npm run coverage
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
- [jest](https://jestjs.io/)
- [testing-library](https://testing-library.com/)

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




## Feedback

If you have any feedback, please let me know via paulodantasbjr@gmail.com
