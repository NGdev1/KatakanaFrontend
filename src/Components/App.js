import React from 'react';

import Navigation from './Navigation';
import Main from './Main';


function App() {
    let item = { name: "Шкафы" };
    return (
        <div className="content">
            <header>
                <div className="main-header-info">
                    <div className="logo"></div>
                    <div className="title">ИНТЕРНЕТ-МАГАЗИН МЕБЕЛИ В КАЗАНИ</div>
                    <div className="contact-info"><span className="glyphicon glyphicon-phone-alt"></span> +7(934)343-43-43</div>
                </div>
                <aside>
                    <div className="nav">
                        {/* <#foreach item in category.childCategories> */}
                        <a href="/" className="nav-item">{item.name}</a>
                        <Navigation />
                        {/* <#foreach item in item.childCategories> */}
                        <a href="/" className="nav-item">{item.name}</a>
                        {/* </#foreach> */}
                        {/* </#foreach> */}
                    </div>
                </aside>
            </header>
            <main>
                <Main />
            </main>
        </div>
    )
}

export default App;
