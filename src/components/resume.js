import React ,{Component}  from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education'
import Experience from './experience'

class Resume extends Component{
    constructor (props) {
        super(props)
        this.state = {message: ''}
        this.handelChange = this.handelChange.bind(this);
    }
    handelChange (event) {
        this.setState({message: event.target.value});
    }
    render() {
        return(
            <div>
                <Grid>
                    <Cell  col={4} >
                        <div style={{textAlign:'center'}}>
                        <img 
                        src="https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-2-512.png"
                        alt="avatar"
                        style={{height: '180px'}}
                        />
                        </div>

                        <h2 style={{paddingTop:'1em',}}>Dandan</h2>
                        <h4 style={{color:'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2',width:'50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </p>
                        <hr style={{borderTop: '3px solid #833fb2',width:'50%'}}/>
                        <h5>Address</h5>
                        <p>TW·Hsinchu/Taipei</p>
                        <h5>Phone</h5>
                        <p>(+886)983914037</p>
                        <h5>Email</h5>
                        <p>dandanxo.1996@gamil.com</p>
                        <h5>Blog</h5>
                        <p>blog.dandan.tw</p>
                        <hr style={{borderTop: '3px solid #833fb2',width:'50%'}}/>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <h4>University</h4>
                        <Education 
                        startYear={2014}
                        endYear={2018}
                        department='資訊管理系 Information Management Department'
                        schoolName='高雄科技大學 National Kaohsiung University of Science and Technology'
                        schoolDescription=''
                        />
                        <h4>High school</h4>
                        <Education 
                        startYear={2011}
                        endYear={2014}
                        department="資料處理科"
                        schoolName="國立新竹高級商業職業學校 National HsinChu Commercial & Vocational High School"
                        schoolDescription=''
                        />
                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <h2>Experience</h2>
                        <Experience
                         startYear={2018+'/'+1}
                         endYear={2018+'/'+6}
                         department=""
                         jobName=""
                         jobDescription=''
                        />
                        <textarea type="text" onChange={this.handelChange} value={ this.state.message} />
                <p>{this.state.message}</p>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;