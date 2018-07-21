import React ,{Component}  from 'react';
import {Tabs,Tab ,Grid ,Cell , Card, CardActions,CardTitle,CardText,Button,CardMenu,IconButton} from 'react-mdl';
class Project extends Component{
    constructor(props) {
        super(props);
        this.state = {activeTab:0};
    }
    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Grid>
                <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle  style={{color: '#000', height:'176px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg) center / cover'}}>
                        Portfolio page
                        </CardTitle>
                        <CardText>
                            This Portfolio page is !
                        </CardText>
                        <CardActions border style={{display: 'flex',justifyContent:'center'}}>
                        <Button colored href="https://github.com/dandanXO/react_myprotfolio_site" target="_blank">Github</Button>
                            
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>    
                        </CardMenu>
                    </Card>
                </Cell>   
                </Grid>
                </div>
            )
        }else if (this.state.activeTab === 1){
            return (
                <div className="projects-grid">
                <Grid>
                <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle  style={{color: '#000', height:'176px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png) center / cover'}}>
                        node shopping cart
                        </CardTitle>
                        <CardText>
                        使用express+node+mongdb+hbs模板+boostrap完成的購物網站有與金流串聯(stripe)
                        </CardText>
                        <CardActions border style={{display: 'flex',justifyContent:'center'}}>
                            <Button colored href="https://github.com/dandanXO/node-shopping-cart" target="_blank">Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>    
                        </CardMenu>
                    </Card>
                    </Cell>
                    <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle  style={{color: '#000', height:'176px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png) center / cover'}}>
                        node-RESTfulAPI
                        </CardTitle>
                        <CardText>
                        試著實作出RESTfulAPI以SHOP方式呈現
                        </CardText>
                        <CardActions border style={{display: 'flex',justifyContent:'center'}}>
                            <Button colored href="https://github.com/dandanXO/node-RESTfulAPI-shop" target="_blank">Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>    
                        </CardMenu>
                    </Card>
                    </Cell>
                    <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle  style={{color: '#000', height:'176px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png) center / cover'}}>
                        遠見Crawler's api
                        </CardTitle>
                        <CardText>
                        可以爬取遠見雜誌文章，與定時爬取及指定篇數等 api。  
                        </CardText>
                        <CardActions border style={{display: 'flex',justifyContent:'center'}}>
                            <Button colored href="https://github.com/dandanXO/gvm_Crawler" target="_blank">Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>    
                        </CardMenu>
                    </Card>
                    </Cell>
                    <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle  style={{color: '#000', height:'176px',background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png) center / cover'}}>
                        FB_crawler
                        </CardTitle>
                        <CardText>
                        簡單使用Facebook api 查詢粉絲文章，讚數，留言(時間區間)等
                        </CardText>
                        <CardActions border style={{display: 'flex',justifyContent:'center'}}>
                            <Button colored href="https://github.com/dandanXO/FB_crawler" target="_blank">Github</Button>
                            <Button colored href="http://fbcrawler.mvn3njjrwf.ap-southeast-1.elasticbeanstalk.com/s/goddess1688" target="_blank">Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>    
                        </CardMenu>
                    </Card>
                    </Cell>
                    </Grid>
                </div>                  
            )
        }else if (this.state.activeTab === 2){
            return (
                <div className="projects-grid">
                <Grid>
                <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle  style={{color: '#000', height:'176px',background: 'url(https://www.vuemastery.com/images/lgo-vue-news.svg) center / cover'}}>
                        meetup by vuejs vuetify firebase
                        </CardTitle>
                        <CardText>
                        使用 vue+vuex+vuetify+firebase所實作出的聚會小系統
                        </CardText>
                        <CardActions border style={{display: 'flex',justifyContent:'center'}}>
                            <Button colored href="https://github.com/dandanXO/meetup-by-vuejs_vuetify_firebase" target="_blank">Github</Button>
                            <Button colored href="http://meetup-by-vue2.s3-website-ap-southeast-1.amazonaws.com/" target="_blank">Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>    
                        </CardMenu>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle  style={{color: '#000', height:'176px',background: 'url(https://www.vuemastery.com/images/lgo-vue-news.svg) center / cover'}}>
                        Like-Youtube
                        </CardTitle>
                        <CardText>
                        用nuxt呈現影片觀賞與歌單撥放的網站
                        </CardText>
                        <CardActions border style={{display: 'flex',justifyContent:'center'}}>
                            <Button colored href="https://github.com/dandanXO/Nuxt_like_yoututbe" target="_blank">Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>    
                        </CardMenu>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle  style={{color: '#000', height:'176px',background: 'url(https://www.vuemastery.com/images/lgo-vue-news.svg) center / cover'}}>
                        vue_animation_example
                        </CardTitle>
                        <CardText>
                        測試 virtual Router 並持續串流不中斷
                        </CardText>
                        <CardActions border style={{display: 'flex',justifyContent:'center'}}>
                            <Button colored href="https://github.com/dandanXO/vue_animation_example" target="_blank">Github</Button>
                            <Button colored href="http://vue-animation-example.s3-website-ap-southeast-1.amazonaws.com/" target="_blank">Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>    
                        </CardMenu>
                    </Card>
                    </Cell>
                    <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle  style={{color: '#000', height:'176px',background: 'url(https://www.vuemastery.com/images/lgo-vue-news.svg) center / cover'}}>
                        First_Nuxt blog
                        </CardTitle>
                        <CardText>
                        like a blog use stroyblok do CMS and CircleCI do auto unit test. last deploy on aws's s3 server
                        </CardText>
                        <CardActions border style={{display: 'flex',justifyContent:'center'}}>
                            <Button colored href="https://github.com/dandanXO/Fisrt_Nuxt_storyblok" target="_blank">Github</Button>
                            <Button colored href="http://first-nuxt-example.s3-website-ap-southeast-1.amazonaws.com/" target="_blank">Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>    
                        </CardMenu>
                    </Card>
                    </Cell>
                </Grid>
                </div>
            )
        }else if (this.state.activeTab === 3){
            return (
                <div className="projects-grid">
                
                <Grid>
                <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle  style={{color: '#000', height:'176px',background: 'url(http://ottis.github.io/inrt/images/octocat.png) center / cover'}}>
                        大學專題
                        </CardTitle>
                        <CardText>
                        是做出無線網路的共享經濟概念 連結中可以看到更多詳細資訊
                        </CardText>
                        <CardActions border style={{display: 'flex',justifyContent:'center'}}>
                            <Button colored href="https://github.com/dandanXO/SharingWiFi" target="_blank">Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>    
                        </CardMenu>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle  style={{color: '#000', height:'176px',background: 'url(http://ottis.github.io/inrt/images/octocat.png) center / cover'}}>
                        MisEnterPage
                        </CardTitle>
                        <CardText>
                        大學系上進入頁面設計
                        </CardText>
                        <CardActions border style={{display: 'flex',justifyContent:'center'}}>
                            <Button colored href="https://github.com/dandanXO/MisEnterPage" target="_blank">Github</Button>
                            <Button colored href="http://www.mis.nkfust.edu.tw/bate_index.php" target="_blank">Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>    
                        </CardMenu>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle  style={{color: '#000', height:'176px',background: 'url(http://ottis.github.io/inrt/images/octocat.png) center / cover'}}>
                        Only Javascirpt
                        </CardTitle>
                        <CardText>
                        使用純粹的JS+Jquery+hmtl+css完成的項目沒有任何框架
                        </CardText>
                        <CardActions border style={{display: 'flex',justifyContent:'center'}}>
                            <Button colored href="https://github.com/dandanXO/DANDAN" target="_blank">Github</Button>
                            <Button colored href="https://blog.dandan.tw/DANDAN/" target="_blank">Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>    
                        </CardMenu>
                    </Card>
                    </Cell>
                    <Cell col={4}>
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle  style={{color: '#000', height:'176px',background: 'url(http://ottis.github.io/inrt/images/octocat.png) center / cover'}}>
                        First_Nuxt blog
                        </CardTitle>
                        <CardText>
                        like a blog use stroyblok do CMS and CircleCI do auto unit test. last deploy on aws's s3 server
                        </CardText>
                        <CardActions border style={{display: 'flex',justifyContent:'center'}}>
                            <Button colored href="https://github.com/dandanXO/Fisrt_Nuxt_storyblok" target="_blank">Github</Button>
                            <Button colored href="http://first-nuxt-example.s3-website-ap-southeast-1.amazonaws.com/" target="_blank">Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>    
                        </CardMenu>
                    </Card>
                    </Cell>
                </Grid>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs  style={{backgroundColor: 'white'}} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>Others</Tab>
                </Tabs>           
                <div className="grid-content">{this.toggleCategories()}</div>
            </div>
        );
    }
}

export default Project;