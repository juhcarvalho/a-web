import React from 'react';
import TitleList from './TitleList';
import TheAntifuckingOne from '../misc/TheAntiFuckingOne';


class ListPost extends React.Component {

  getTitle = (event) => {
    this.props.addTitle(event)
  }
  render(){
    return (
      <div>
      {
        this.props.text ? this.props.resources.map((element, index) => {
          return <TitleList 
                  key={index} 
                  element={element}
                  getTitle={this.getTitle}
                  showList={this.props.showList}
                  />}) : ''
      }
      <TheAntifuckingOne/>
      </div>
    )
  }
}

export default ListPost;
