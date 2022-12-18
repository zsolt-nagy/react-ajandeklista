import React from 'react'

export default function Űrlap() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('submit');
    }

    return (
        <>
            <h2>Ajándék felvétele</h2>
            <form action="#" method="GET" onSubmit={handleSubmit}>
            <div className="form-row">
                    <label>
                        Kinek szól az ajándék?
                        <input type="text" name="ajandek-celszemely" required />
                    </label>
                </div>                
                <div className="form-row">
                    <label>
                        Ajándék neve:
                        <input type="text" name="ajandek-nev" required />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                        Ajándék ára (Ft):
                        <input type="number" min="1" name="ajandek-ar" required />
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
