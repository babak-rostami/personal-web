import React,{Component} from 'react';
import SCard from './SCard';

export default class SkillCard extends Component{
    render(){
        const body1=['تسلط به محیط اندروید استودیو و زبان جاوا','react native آشنا با ']
        const body2=['javascript','css', 'html' ,'bootstrap' , 'react js'];
        const body3=['laravel','php','node js آشنا با' , 'rest api'];
        return(
            <div className="container-fluid mb-5">
                <div className="row justify-content-center mt-5">

                    <SCard 
                    image={<i className="material-icons">phone_android</i>} 
                    title="برنامه نویسی اندروید"
                    body={body1}/>
                    
                    <SCard 
                    image={<i className="material-icons">web</i>} 
                    title="Front end"
                    body={body2}/>
                   
                   <SCard 
                    image={<i className="material-icons">cloud</i>} 
                    title="Back end"
                    body={body3}/>
                   
                </div>
            </div>
        );
    }
}
