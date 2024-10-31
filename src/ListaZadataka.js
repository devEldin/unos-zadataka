import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListaZadataka() {
    const [zadaci, postaviZadaci] = useState([]);

    // Dohvati zadatke nakon što se komponenta montira
    useEffect(() => {
        const dohvatiZadatke = async () => {
            try {
                const rezultat = await axios.get('http://localhost:8080/api/tasks/get');
                console.log("Učitani zadaci:", rezultat.data); // Ispis zadataka u konzolu
                postaviZadaci(rezultat.data);
                
            } catch (err) {
                console.error("Neuspješno učitavanje zadataka:", err);
            }
        };

        dohvatiZadatke();
    }, []); // Prazan niz zavisnosti osigurava da se ovo izvrši pri inicijalnom renderiranju

    return (
        <div>
            <h2>Lista Zadataka</h2>
            {zadaci && zadaci.length === 0 ? (
                <p>Nema unesenih zadataka</p>
            ) : (
                <ul>
                    {zadaci && zadaci.map((zadatak, idx) => (
                        <li key={idx}>{zadatak.zadatak}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListaZadataka;
