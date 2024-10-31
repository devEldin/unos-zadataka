import React, { useState } from 'react';
import axios from 'axios';

function FormaZadatka() {
    const [zadatak, postaviZadatak] = useState('');

    const podnesiZadatak = async (e) => {
        e.preventDefault();

        try {
            
            const odgovor = await axios.post('http://localhost:8080/api/tasks', { zadatak });
            alert(odgovor.data.poruka); // Prikazi poruku o uspješnom dodavanju
            postaviZadatak(''); // Nakon unosa zadatka, obrisi formu
        } catch (error) {
            console.error("Došlo je do greške prilikom dodavanja zadatka!", error);
            alert("Neuspješno dodavanje zadatka.");
        }
    };

    return (
        <form onSubmit={podnesiZadatak}>
            <label>
                Zadatak : <i></i>
                <input
                    type="text"
                    value={zadatak}
                    onChange={(e) => postaviZadatak(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Dodaj Zadatak</button>
        </form>
    );
}

export default FormaZadatka;
