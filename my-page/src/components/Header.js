import React from 'react';
import './styles/header.css';
import logo from '../images/logo.png'; // Importa la imagen del logo

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    }

    render() {
        return (
            <header className="Header">
                <div className="HeaderLeft">
                    <img src={logo} alt="Logo" className="Logo" /> {/* Utiliza la imagen del logo importada */}
                    <h2 className="HeaderTitle">Design of software applications and web applications CB and MR</h2>
                </div>
                <div className="HeaderRight">
                    <button className="btn">Solutions</button>
                    <button className="btn">About Us</button>
                    <button className="btn">Contactanos</button>
                </div>
            </header>
        );
    }
}

export default Header;
