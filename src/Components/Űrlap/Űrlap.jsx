import React from 'react';
import './Űrlap.css';

export default function Űrlap(props) {
    const [név, setNév] = React.useState('');
    const [célszemély, setCélszemély] = React.useState('');
    const [ár, setÁr] = React.useState('');
    const [fontosság, setFontosság] = React.useState(50);

    const handleSubmit = (event) => {
        event.preventDefault();

        props.felveszAjándék(név, célszemély, ár, fontosság);

        setNév('');
        setCélszemély(''); 
        setÁr('');
        setFontosság(50);
    }

    const getChangeHandler = setter => event => setter(event.target.value);
    const handleNévChange = getChangeHandler(setNév);
    const handleCélszemélyChange = getChangeHandler(setCélszemély);
    const handleÁrChange = getChangeHandler(setÁr);
    const handleFontosságChange = getChangeHandler(setFontosság);

    
/*  // Ha nem érted a fenti 5 sort, akkor használd az alábbi verziót
    const handleNévChange = (event) => {
        setNév(event.target.value);
    }
    const handleCélszemélyChange = (event) => {
        setCélszemély(event.target.value);
    }
    const handleÁrChange = (event) => {
        setÁr(event.target.value);
    }
    const handleFontosságChange = (event) => {
        setFontosság(event.target.value);
    } 
*/   

    return (
        <>
            <h2>Ajándék felvétele</h2>
            <form 
                action="#" 
                method="GET" 
                onSubmit={handleSubmit} 
                className="ajandek-felvetele-form">
                <div className="form-row">
                    <label>
                        Kinek szól az ajándék?
                        <input 
                            type="text" 
                            name="ajandek-celszemely" 
                            value={célszemély}
                            onChange={handleCélszemélyChange}
                            required />
                    </label>
                </div>                
                <div className="form-row">
                    <label>
                        Ajándék neve:
                        <input 
                            type="text" 
                            name="ajandek-nev" 
                            value={név}
                            onChange={handleNévChange}
                            required />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                        Ajándék ára (Ft):
                        <input 
                            type="number" 
                            min="1" 
                            name="ajandek-ar" 
                            value={ár}
                            onChange={handleÁrChange}
                            required />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                        Ajándék fontossága (0%-100%):
                        <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            step="5" 
                            value={fontosság}
                            onChange={handleFontosságChange}
                            name="ajandek-fontossága"  />
                        <span>{fontosság}%</span>
                    </label>
                </div>
                <div className="form-row">
                    <button type="submit">
                        Felvétel
                    </button>
                </div>
            </form>
        </>
    )
}
