import React from 'react'

export const Title = ({name,title}) => {
    
    return (
        <div className="d-flex justify-content-center py-5">
            <h1>{name} {title}</h1>
        </div>
    )
}
