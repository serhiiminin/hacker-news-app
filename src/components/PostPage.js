import React from 'react';
import './PostPage.css';
import fetchJSON from './../helpers/fetch-json';


export default class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postInfo: []
        }
    }
    componentDidMount() {
        fetchJSON(`http://jsonplaceholder.typicode.com/posts/${this.props.match.params.postID}`)
            .then(response => {
                this.setState({
                    postInfo: response
                })
            })
            .catch(error => {
                console.log('request failed', error)
            });
    }
    render() {
        let postInfo = this.state.postInfo;
        return (
            <section className="page-section">
                <div className="container">
                    <h1>{postInfo.title}</h1>
                    <div className="post_description">
                        {postInfo.body}
                    </div>
                </div>
            </section>
        )
    }
}