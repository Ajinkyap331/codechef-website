import React from 'react'

export const Arrow = ({ _class, color, length }) => {
    return (
        <svg className={_class} style= {{width :  "180px", height : "30px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7"
                    refX="0" refY="3.5" orient="auto">
                    <polygon fill={color} points="0 2, 4 3.5, 0 5" />
                </marker>
            </defs>
            <line x1="0" y1="50" x2={length} y2="50" stroke={color}
                stroke-width="15" marker-end="url(#arrowhead)" />
        </svg>
    )
}
