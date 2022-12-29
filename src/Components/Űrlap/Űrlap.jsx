import React from 'react'

export default function Űrlap(props) {
    const célszemélyEl = React.useRef(null);
    const ajándékNévEl = React.useRef(null);
    const ajándékÁrEl = React.useRef(null);
    const ajándékFontosságaEl = React.useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const célszemélyValue = célszemélyEl.current.value;
        const ajándékNévValue = ajándékNévEl.current.value;
        const ajándékÁrValue = ajándékÁrEl.current.value;
        const ajándékFontosságaValue = ajándékFontosságaEl.current.value;

        props.felveszAjándék(
            ajándékNévValue, 
            célszemélyValue, 
            ajándékÁrValue, 
            ajándékFontosságaValue
        );

    }

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
                            ref={célszemélyEl}
                            required />
                    </label>
                </div>                
                <div className="form-row">
                    <label>
                        Ajándék neve:
                        <input 
                            type="text" 
                            name="ajandek-nev" 
                            ref={ajándékNévEl}
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
                            ref={ajándékÁrEl}
                            required />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                        Ajándék fontossága (0-10):
                        <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            step="5" 
                            ref={ajándékFontosságaEl}
                            name="ajandek-fontossága"  />
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
