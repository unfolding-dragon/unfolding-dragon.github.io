import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Unfolding Dragon"
        const siteDescription = "Simple Rules can yield Beautiful Patterns"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Welcome!<br />
                            Open-Source, Fast As Hell.</h2>
                        </header>
                        <p>
                            <br /><strong>Enhanced by AppSeed</strong> with FTP Deploy Script and Authentication (soon).
                            <br />Since Gatsby is built on React you straight away got all the things we love about React, like composability, one-way binding, resuability and great environment.
                        </p>

                        <ul className="actions">
                            <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/rosoftdeveloper/starter-gatsbyjs-strata" className="button">Get Sources</a></li>
                            <a rel="noopener noreferrer" target="_blank" href="https://developers.google.com/speed/pagespeed/insights/?url=https://starter-gatsbyjs-strata.appseed.us">Check Speed</a>
                        </ul>

                         Where to go from here?<br />    
                         Read more on our <a href="https://blog.appseed.us">blog</a>,{' '} 
                         build your next <strong>Full-Stack App</strong> with <a href="https://appseed.us">AppSeed App Generator</a> or get more starters:{' '}
                         <a href="https://starter-gatsbyjs-dimension.appseed.us/">Dimension</a>, {' '}  
                         <a href="https://starter-gatsbyjs-emma.appseed.us/">Emma</a>, {' '}
                         <a href="https://starter-gatsbyjs-material-kit.appseed.us/">Material Kit</a>, {' '}
                         <a href="https://starter-gatsbyjs-jodie.appseed.us/">Jodie</a> 

                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <Contact />

                </div>

            </Layout>
        )
    }
}

export default HomeIndex