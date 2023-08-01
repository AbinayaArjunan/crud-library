import React from 'react'


function Home() {
    return (
        <div className='container-fluid'>
            <div className='row bg-primary rounded' >
                <div className='col-lg-4 col-sm-12 p-3'>
                    <img className='img-fluid' src='https://shorturl.at/hGMQ2' alt='book' width="80%" />
                </div>
                <div className='col-lg-8 col-sm-12 p-5 text-start'>
                    <p className='text-white p-5'><q className='fw-bold fs-1'>Nothing is pleasanter than exploring a library.

</q>
                        <p className='text-end'>.....Walter Savage Landor 

</p>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Home;