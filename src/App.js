import './App.css';

import React from 'react';
import FormaZadatka from './FormaZadatka'; // Uvezi sa imenom fajla
import ListaZadataka from './ListaZadataka'; // Uvezi sa imenom fajla

function App() {
    return (
        <div className="App">
            <h1>Unesi zadatke koje trebas obaviti</h1>
            <FormaZadatka />
            <ListaZadataka /> {/* Dodaj ListaZadataka ovdje za prikaz zadataka */}
        </div>
    );
}

export default App;
