import React ,{Component}  from 'react';
import {Grid, Cell,ProgressBar } from 'react-mdl';

class Skill extends Component{
    render() {
        return(
            <div>
                <Grid>
                    <div style={{display:'flex'}}>
                        <Cell col={4}>
                            {this.props.skill}
                        </Cell>
                        <Cell col={8}>
                            <ProgressBar style={{margin:'auto', width:'75%'}}
                            progress = {this.props.progress}/>
                        </Cell>
                    </div>
                </Grid>
            </div>
           
        )
    }
}

export default Skill