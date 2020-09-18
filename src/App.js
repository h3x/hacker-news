import React from 'react';

import {MyComponent} from './components'; // import componenets

import styles from './App.module.css';

const App = () => {
    return (
        <>
            <h1 className={styles.app}>App</h1>
            <MyComponent />
        </>
    )
}

export default App;