import React, { PureComponent } from "react";
import { MainLayout } from "../components";
import ArticleList from '../components/ArticleList';
import articles from '../components/fixture';

const divStyle={  
  margin: '1rem 0',  
  height:'20vh',  
  background: '#fcd250',
};
const hStyle={   
  textAlign: 'center',
  paddingTop: '2.3rem',
  color: '#272727',
};
class ArticlePage extends PureComponent{
  state = {
    reverted: false
    
}

  render(){
    return (
      <MainLayout>
        <div className="container">
          <div style={divStyle}>
            <h1 style={hStyle}>
              Статьи для обсуждения            
            </h1>
          </div>
          <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/> 
        </div>       
      </MainLayout>       
    )
  }
}





export default ArticlePage;