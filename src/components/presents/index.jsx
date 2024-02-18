import React from "react";
import listPresents from "../../assets/listPresents.json";
import Present from "./present";
import './style.css'

const Presents = () => {
    return (
        <div className="presents-page">
            <div className="presents-content">
                {
                    listPresents.map((present, index) => (
                        <>
                            <Present key={`${index}-${present.Presente}`} present={present} />
                        </>
                    ))
                }
            </div>

        </div>
    );
}

export default Presents;