import React, { PureComponent } from "react";
import { MainLayout } from "../components";
import ArticleList from '../components/ArticleList';
import articles from '../components/fixture';

const divStyle={  
  margin: '0 auto',
  width: '100%',
  maxWidth: '1200px',  
  height:'20vh',
  marginTop: '0.3rem',
  background: '#060620',
};
const hStyle={  
  width: '100%',
  maxWidth: '1200px',  
  textAlign: 'center',
  paddingTop: '2.3rem',
  color: 'white',
};
class ArticlePage extends PureComponent{
  state = {
    reverted: false
    
}

  render(){
    return (
      <MainLayout>
        <div style={divStyle}>
          <h1 style={hStyle}>
            Статьи для обсуждения            
          </h1>
        </div>
        <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>        
      </MainLayout>       
    )
  }
}





export default ArticlePage;