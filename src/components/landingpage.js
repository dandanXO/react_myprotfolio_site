import React ,{Component}  from 'react';

class Landing extends Component{
    render() {
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <cell></cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;