import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Home from './components/Home';

const Movies = lazy(() => import('./components/Movies'));
const Series = lazy(() => import('./components/Series'));
const MovieDetails = lazy(() => import('./components/MovieDetails'));

const Router = () => (
    <Suspense fallback={<Loader />}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path="/:movieID" component={MovieDetails} />
        </Switch>
    </Suspense>
)

export default Router;