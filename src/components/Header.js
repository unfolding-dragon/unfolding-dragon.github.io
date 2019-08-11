import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Unfolding Dragon</strong>, where simple rules
                    <br /> yields beautiful patterns.
                    <br /> A creativity outlet for <a href="https://www.tiago.dev/">tiago.dev</a>.
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
