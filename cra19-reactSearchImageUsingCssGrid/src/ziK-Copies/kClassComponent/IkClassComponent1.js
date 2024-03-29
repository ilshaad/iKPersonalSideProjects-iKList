// import './IkClassComponent1.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
// import { createStore } from 'redux';
// import { Provider, ReactReduxContext } from 'react-redux';
// import axios from 'axios';
import KcomponentDidCatch1 from '../ziK-Tools/kError-pages/KcomponentDidCatch.js';

/**/
/*
*/

class IkClassComponent1 extends React.Component {
	static propTypes = {
        kProps1: PropTypes.string.isRequired,
        kProps2: PropTypes.arrayOf( PropTypes.string )
    }; /*END propTypes */

    static defaultProps = {
        kProps1: "iKdefaultValue1",
        kProps2: ["iKdefaultValue2"]
    }; /*END defaultProps */

    state = {
        IkClassComponent1_property1: "IkClassComponent1_Value1"
    }; /*END state */


    render () {
        return (
            <KcomponentDidCatch1 KpageProps="IkClassComponent1" >
                <div id="background_image">
                    <div id="body_wrapper">
                        <header id="main_header" role="banner">

                            iKheader working

                        </header>
                        <main id="main_page" role="main">

                            iKmain working

                        </main>
                        <footer id="main_footer" role="contentinfo">

                            iKfooter working

                        </footer>
                    </div>
                </div>
            </KcomponentDidCatch1>
        ); /*END return */
    }; /*END render */
}; /*END IkClassComponent1 */


/*iK not necessary to keep if you rather use it within the class component */
// IkClassComponent1.propTypes = {
// 	kProps1: PropTypes.string,
// 	kProps2: PropTypes.arrayOf( PropTypes.string )
// }; /*END IkClassComponent1.propTypes */

// IkClassComponent1.defaultProps = {
// 	kProps1: "iKdefaultValue1",
// 	kProps2: ["iKdefaultValue2"]
// }; /*END IkClassComponent1.defaultProps */


export default IkClassComponent1;