import React from 'react';
// export function Table() {
//     return(<table className="mctable">
//         <tbody>
//         <tr>
//             <th>Company</th>
//             <th>Contact</th>
//             <th>Country</th>
//         </tr>
//         <tr>
//             <td>Alfreds Futterkistt</td>
//             <td>Maria Anders</td>
//             <td>Germany</td>
//         </tr>
//         <tr>
//             <td>Centro comercial Moctezuma</td>
//             <td>Francisco Chang</td>
//             <td>Mexico</td>
//         </tr>
//         </tbody>
//     </table>);
// }


//Return kan bara retunera ett react element. Därför måste en <tr> wrappa <td> annars kan man
//wrappa med <></>
//inanför () paranterserna körs JSX kod
// inanför {} körs java scriptkod
export function Table2(props) {
    return(<table className="mctable">
        <tbody>
        <tr>
            <th>SSN</th>
            <th>Type</th>

        </tr>
        {props.metadataList.map((item) => {

            return (
                <tr key={item._id.$oid}>
                <td>{item.personNumber}</td>
                <td>{item.documentType}</td>
                </tr>
            );
        })}

        </tbody>
    </table>);
}
