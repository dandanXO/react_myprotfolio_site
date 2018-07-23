import React ,{Component}  from 'react';
import {Grid, Cell,List,ListItem,ListItemContent} from 'react-mdl';


class Contact extends Component{
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                   <Cell col={6}>
                    <h2>Dandan</h2>
                    <img
                        src="https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-2-512.png"
                        alt="avatar"
                        style={{height: '250px'}}
                    />
                    <p style={{width:'75%' ,margin:'auto',paddingTop:'1em',}}>If you have any further question, please feel free to contact me.</p>
                   </Cell> 
                   <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr />
                    <div className="contact-list">
                        <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '24px',fontFamily:'Anton'}}>
                            <i class="fas fa-mobile-alt"></i>
                                (+886)983914037
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '24px',fontFamily:'Anton'}}>
                            <i class="fas fa-envelope"></i>
                                dandanxo.1996@gmail.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '24px',fontFamily:'Anton'}}>
                            <i class="fab fa-blogger-b"></i>
                               blog.dandan.tw
                            </ListItemContent>
                        </ListItem>
                        </List>
                    </div>
                   </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;