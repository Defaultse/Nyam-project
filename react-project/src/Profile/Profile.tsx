import React, { ReactElement, useEffect, useState } from 'react'

export default function Profile(): ReactElement {
    const account = localStorage.getItem('email');
   
    return (
        <div>
            <h1>{account}</h1>
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
