import React from "react";


function Footer(){
    const FooterStyle = {
        fontFamily: "Josefin Sans, sans-serif",
        textAlign: "center",
        backgroundColor:"orange",
        color:"black",
        position: "fixed",
        width: "100%",
        right: "0",
        bottom: "0",
        left: "0",
    }
    const pStyle = {
        marginTop: "15px"
    }

    return(
        <footer className="footer" style={FooterStyle}>
            <p style={pStyle}>Joseph Viccora</p>
        </footer>
    )
}

export default Footer;