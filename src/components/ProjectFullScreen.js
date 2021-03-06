import React, { Component } from 'react';

import '../css/ProjectFullScreen.css';

import Translate from 'react-translate-component';

class ProjectFullScreen extends Component {
  state = {
    show: false,
  }
  lockScreen = () => {
    this.setState({'show':true});
  }
  unlockScreen = () => {
    this.setState({'show':false});
  }
  onClick = (e) => {
    console.log(e.target);
    if(!this.refs.Panel.contains(e.target)) {
      this.props.onClose();
    }
  }
  onCloseButton = () => {
    this.props.onClose();
  }
  
  render() {
    return (
      <div onClick={this.onClick} className={this.state.show? "ProjectFullScreen ProjectFullScreenShow":"ProjectFullScreen"}>

          <div onClick={this.onClick} ref="Panel" className={this.state.show?"ProjectFullScreenPanel ProjectFullScreenPanelShow":"ProjectFullScreenPanel"}>

              <div onClick={this.onCloseButton} className="ProjectFullScreenCloseButton"></div>

              <div className="ProjectFullScreenTopbar">
                <div className="ProjectFullScreenTitle">
                    {this.props.project.title}
                </div>
                <div className="ProjectFullScreenDate">
                    {this.props.project.date}
                </div>
              </div>
              <div className="ProjectFullScreenSection">
                <Translate component="h2" content="mywork.description"/>
                <Translate unsafe={true} content={this.props.project.description} component="div"/>
              </div>

              {this.props.project.links && this.props.project.links.length > 0 ? (
                <div className="ProjectFullScreenSection">
                  <Translate component="h2" content="mywork.links"/>
                  {
                    this.props.project.links.map((link,index) => (
                      <div className="ProjectFullScreenLink">
                          <Translate content={"links."+link[0]}></Translate>:<a href={link[1]}>{link[1]}</a>
                      </div>
                    ))      
                  }
                </div>
              ): (false)}

              <div className="ProjectFullScreenSection">
                <Translate component="h2" content="mywork.technologies"/>
                {
                  this.props.project.technologies.map((technology,index) => (
                    <div className="ProjectFullScreenTechnology">
                      {technology}
                      <img src={"/images/"+technology+".svg"}></img>
                    </div>
                  ))      
                }
              </div>              

              <div className="ProjectFullScreenScreenshots">
                  {
                    this.props.project.screenshots.map((screenshot,index) => (
                      <a href={"/images/"+screenshot}><img src={"/images/"+screenshot}></img></a>
                    ))      
                  }
              </div>

          </div>

      </div>
    );
  }
}

export default ProjectFullScreen;
