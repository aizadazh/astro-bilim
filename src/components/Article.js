import React, { PureComponent } from 'react';
import "./article.scss";


class Article extends PureComponent {  
    /* shouldComponentUpdate(nextProps, nextState) {
        return this.state.isOpen !== nextState.isOpen
    }
    */
    componentWillMount() {
        console.log('---', 'mounting')
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }
    componentWillUpdate() {
        console.log('---', 'will update')
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props       
        const body = isOpen && <section className="card-text">{article.text}</section>
        return (
            <div>
                <div className="card-header">
                    <h3>
                        {article.title}
                        <button onClick={onButtonClick} className="close-button">
                            {isOpen ? 'Пропустить' : 'Читать далее...'}
                        </button>
                    </h3>
                </div>
                <div className="article-body">
                    <h6 className="article-date">
                        Дата публикации: {(new Date(article.date)).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }

}


export default Article