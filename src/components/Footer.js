import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/tiagosomda/" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/unfolding-dragon" className="icon fa-github"><span className="label">Github</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Unfolding Dragon </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
