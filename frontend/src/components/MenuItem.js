import React from "react";
import MenuModal from "./MenuModal";

function MenuItem({item}){
    return(
        <section>
            <button type="button" className="button container-fluid menuItem-tile" data-bs-toggle="modal" data-bs-target="#MenuModal">
                <div className="row menuItem-img-row">
                    Placeholder for image of our product
                    {/* Image */}
                </div>
                <div className="row">
                    <div className="col-9">
                        {item.name}
                    </div>
                    <div className = "col-3">
                        {item.price}
                    </div>
                </div>
            </button>
            {<MenuModal item={item}/>}
        </section>
    );
}

export default MenuItem;
