import React ,{Component}  from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skill';

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
                        <p>我是康皓  ，出生於臺北，畢業於高雄科技大學資訊管理系，個性較為內向，面對問題常抱著樂觀的態度去面對，喜歡學習新知識。在大學期間成績偏中上，但和程式語言相關的課程都取得高分自從進入大學後，上了第一堂JAVA課程讓我對程式語言有了很大的興趣，在3，4年級有擔任系上網路組負責維護系上伺服器與網頁部分，更能了解到實務上的麻煩與解決問題的能力，後來nodejs的興起想更深入了解網站開發的知識因此自學了HTML，CSS，JAVASCRIPT與express框架等，在大三專題是製作無線網路共享的方案，藉由陌生人提供免費的網路讓其他使用者受惠，並從中了解到手機與後段SERVER溝通的方式與做法，在與隊友溝通的過程了解到分工與文件的重要性。專題結束後，前端框架的崛起對於VUE起了很大的興趣寫了一個side  project  聚會系統可以登入舉辦聚會，加入聚會等。另外，在一次實習中有更深入了解到Restfulapi與文件的撰寫方式，完成了一個需要以token方式做存取的爬蟲api功能。</p>
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
                         department="語音小助理 Elise"
                         jobName="實習-工程師"
                         jobDescription="撰寫與維護爬衝API"
                        />
                         <Experience
                         startYear={2016+'/'+7}
                         endYear={2016+'/'+8}
                         department="高雄市立圖書館"
                         jobName="實習"
                         jobDescription="書籍資料維護"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <h2>Skill</h2>
                        <Skill skill='Java' progress={85}/>
                        <Skill skill='Javascript' progress={90}/>
                        <Skill skill='Html/Css' progress={83}/>
                        <Skill skill='NodeJS' progress={90}/>
                        <Skill skill='Vue.js' progress={80}/>
                        <Skill skill='React.js' progress={50}/>
                        <Skill skill='mongodb/firebase' progress={40}/>
                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <p>Interesting test</p>
                        <textarea type="text" onChange={this.handelChange} value={ this.state.message} />
                <p>{this.state.message}</p>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;