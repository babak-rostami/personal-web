import React,{Component} from 'react';
import TopSlide from './TopSlide';
import Skill from './Skill';
import SkillCard from './SkillCard';
import AboutMe from './AboutMe';
import FooterCustom from './FooterCustom';
import { Helmet } from 'react-helmet';


const TITLE = 'صفحه اصلی';

export default class Home extends Component{
    render(){
        return(
            <div>
                <Helmet>
                    <title>{ TITLE }</title>
                </Helmet>
                <TopSlide/>
                <Skill/>
                
                <SkillCard/>

        
                <AboutMe/>

                <FooterCustom/>
            </div>
                

        );
    }
}