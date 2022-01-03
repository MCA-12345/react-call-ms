import React from 'react';

export function List(props) {
    return (
        <ul>
            {props.metadataList.map(function(item) {
                return (
                    <li key={item.personNumber}>{item.personNumber}</li>
                );
            })}
        </ul>
    );
}