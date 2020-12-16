import React, { ReactElement} from 'react'

export default function Profile(): ReactElement {
    const account = JSON.parse(localStorage.getItem('account')||'{}');

    return (
        <div>
            <div>
               Profile Info:
               <h1>Profile picture</h1>
            </div>
            <hr/>
            <div>
                Entered User:
                <h5>{account.email}</h5>
            </div>
            
            
        </div>
    )
}
