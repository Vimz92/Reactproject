import React from 'react'

export const Menucard = ({ menuData }) => {
    console.log(menuData);
    return (
        <>
        <section className="main-card-container"> 
            {menuData.map((curElem) => {
           return(
            <>
        <div className="card-container" key={curElem.id}>
                    <div className="card">
                        <div className="card-body">
                            <span className="card-number card-circle subtle"> {curElem.id} </span>
                            <span className="card-author subtle"> {curElem.name} </span>
                            <h2 className="card-title"> {curElem.name} </h2>
                            <span class="card-description subtle"> {curElem.description} </span>
                            <div className="card-read"> Read </div>
                        </div>
               <img src={curElem.image} alt="images" className="card-media" />

                        <span className="card-tag subtle"> Order Now</span>


                    </div>
                </div>
               
            </>
            );
       }
       )}
 </section>
        </>
    );
};

export default Menucard;