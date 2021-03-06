/** @module app : Provide the base app for the YouUpgraded site
 * Implements MDC auto-init to setup/hydrate existing DOM elements
 * @see: https://github.com/material-components/material-components-web/tree/master/packages/material-components-web
 * 
 */
import * as mdc from 'material-components-web';
import './styles.scss';

import { MDCTopAppBar } from '@material/top-app-bar/index';
import { MDCDrawer } from '@material/drawer';


export const app = ()=> {
    console.log('Test site app')
}


if (mdc) {
    mdc.autoInit()
    window._mdc = mdc
} else {
    console.error('No MDC =(')
}

window.addEventListener('load', ()=> {
    // Set up the top app bar
    const topAppBar = MDCTopAppBar.attachTo(
        document.querySelector('#app-bar')
    )

    // Set up the drawer so we can attach it to the TopAppBar
    const drawerElement = document.querySelector('.mdc-drawer')
    if (!drawerElement.classList.contains('mdc-drawer--modal')) {
        return false
    }

    const drawer = MDCDrawer.attachTo(drawerElement)

    topAppBar.listen('MDCTopAppBar:nav', ()=> {
        drawer.open = !drawer.open
    })
})

