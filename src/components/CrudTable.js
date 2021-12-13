import React from 'react';
import CrudTableRow from './CrudTableRow';

function CrudTable({data}) {
    return (
        <div>
            <h3>Usuarios</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Correo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0? 
                    <tr>
                        <td colSpan="3">Sin datos</td>
                    </tr>
                    : 
                    data.map((element) => 
                        <CrudTableRow 
                            key={element.id} 
                            element={element}
                        />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable;