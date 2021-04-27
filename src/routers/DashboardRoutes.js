import React from 'react';
import {
    Route,
    Redirect,
    Switch 
  } from "react-router-dom";
import { Navbar } from '../components/ui/NavBar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-1">
                <Switch>

                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route path="/hero/:heroeId" component={ HeroScreen } />
                    <Route path="/dc" component={ DcScreen } />
                    <Route path="/search" component={ SearchScreen } />


                    <Redirect to="/marvel" />

                </Switch>
            </div>
        </>
    )
}
