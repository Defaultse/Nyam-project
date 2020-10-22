import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Profile({}: Props): ReactElement {
    return (
        <div>
            <div>
               Profile Info
               <h1>Profile picture</h1>
            </div>
            <hr/>
            <div>
                Здесь должны быть товары пользователя
            </div>
            
            
        </div>
    )
}
