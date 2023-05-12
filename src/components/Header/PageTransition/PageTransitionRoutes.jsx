import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../../../pages/HomePage";
import {About} from "../../../pages/About";
import Products from "../../../pages/Products";
import Accessories from "../../../pages/Accessories";
import {Contacts} from "../../../pages/Contacts";
import Monoblocks from "../../../pages/prdcts/Monoblocks";
import MacPro from "../../../pages/prdcts/MacPro";
import MacStudios from "../../../pages/prdcts/MacStudios";
import MacMini from "../../../pages/prdcts/MacMini";
import Displays from "../../../pages/prdcts/Displays";
import Macbooks from "../../../pages/prdcts/Macbooks";

const PageTransitionRoutes = ({basket, mMini, macPro, mStudio, monoblocks, macbooks, displays,addToBasket}) => (
    <Routes >
        <Route  path="/" element={<HomePage/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/product" element={<Products/>}/>
        <Route  path="/accessories" element={<Accessories/>}/>
        <Route  path="/contacts" element={<Contacts/>}/>
        <Route  path="/prdcts/monoblocks" element={<Monoblocks
            basket={basket}
            monoblocks={monoblocks}
            addToBasket={addToBasket}
        />}/>
        <Route   path="/prdcts/macpro" element={<MacPro
            basket={basket}
            macPro={macPro}
            addToBasket={addToBasket}
        />}/>
        <Route   path="/prdcts/macstudios" element={<MacStudios
            basket={basket}
            mStudio={mStudio}
            addToBasket={addToBasket}
        />}/>
        <Route   path="/prdcts/macmini" element={<MacMini
            basket={basket}
            mMini={mMini}
            addToBasket={addToBasket}
        />}/>
        <Route   path="/prdcts/displays" element={<Displays
            basket={basket}
            displays={displays}
            addToBasket={addToBasket}
        />}/>
        <Route   path="/prdcts/macbooks" element={<Macbooks
            basket={basket}
            macbooks={macbooks}
            addToBasket={addToBasket}
        />}/>
    </Routes>
);

export default PageTransitionRoutes;