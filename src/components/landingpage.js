import React ,{Component}  from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render() {
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://i.imgur.com/qqlWQ6e.png"  
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Web Developer</h1>

                            <hr/>

                            <p>HTML/CSS | BOOTSTRAP | JAVASCIRPT | VUE.JS | REACT | NODEJS | EXPRESS | MONGODB | JAVA</p>
                            <div className="social-links">
                                
                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/皓-康-7b87749a/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"  />
                                </a>
                                {/*Github*/}
                                <a href="https://github.com/dandanXO" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"/>
                                </a>
                                 {/*Facebook*/}
                                 <a href="https://www.facebook.com/pigpig336699" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"/>
                                </a>
                                 {/*blog*/}
                                 <a href="https://blog.dandan.tw" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-blogger-b" />
                                </a>
                                {/*cakerusume*/}
                                <a href="https://www.cakeresume.com/91daf4" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-file"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;