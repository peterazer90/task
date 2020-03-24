import React from 'react';
import ButtonLoadTweets from "../Components/Forms/Button-Load-Tweets";

function SignOut({history}) {
    return (
        <div className='row align-items-center no-gutters text-center h-100'>
            <div className='w-100'>
                <h1 className='h1 font-weight-bolder text-capitalize w-100 mb-3 text-info'>You signed out</h1>
                <ButtonLoadTweets btnText={'Sign In Again'} onClick={()=> history.push('/')}/>
            </div>
        </div>
    );
}

export default SignOut;