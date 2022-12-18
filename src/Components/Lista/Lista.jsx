import React from 'react';

export default function Lista() {
    const [lista, setLista] = React.useState([
        {
            név: 'Joghurt',
            célszemély: 'Popeye',
            ár: 179,
            fontosság: 85,
            id: 1
        },
        {
            név: 'React book for dummies',
            célszemély: 'Attila',
            ár: 8000,
            fontosság: 95,
            id: 2
        },
        {
            név: 'Reszkessetek Betörők 2 DVD',
            célszemély: 'Steven Spielberg',
            ár: 2990,
            fontosság: 90,
            id: 3
        }
    ]);

    const jsxLista = lista.map(elem => (
        <li key={elem.id}>
            {elem.célszemély}: {elem.név} ({elem.ár}) {elem.fontosság}%
        </li>
    ));

    return (
        <>
            <h2>Ajándéklista</h2>
            <ul className="ajandeklista-container">
                {jsxLista}
            </ul>
        </>
    );
}

