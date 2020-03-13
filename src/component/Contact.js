import React,{Component} from 'react';
import contact from './../assets/img/contact.jpg';
import insta from './../assets/img/instagram.png';
import google from './../assets/img/google-plus.png';
import phone from './../assets/img/phone.png';
import FooterCustom from './FooterCustom';
import { Helmet } from 'react-helmet';


const TITLE = 'ارتباط با ما';

export default class Contact extends Component{
    render(){
        return(
            <div className="container">


                <Helmet>
                    <title>{ TITLE }</title>
                </Helmet>

                <div className="row">
                    <div className="col-12">
                        <img alt="" src={contact} style={{ width: '100%',height: '200px'}}></img>
                    </div>
                </div>


                <div className="row my-5 justify-content-center">
                    <div className="col-md-6 col-lg-3 backCon mx-2 my-2">
                        <img alt="" className="d-block mx-auto mb-3" src={insta} style={{ width: '50px',height: '50px'}}/>
                        <a className="aCon" href="https://www.instagram.com/babak_rostamiiii/">Link to Instagram</a>
                    </div>


                    <div className="col-md-6 col-lg-3 backCon mx-2 my-2">
                        <img alt="" className="d-block mx-auto mb-3" src={phone} style={{ width: '50px',height: '50px'}}/>
                        <a className="aCon">0911....</a>
                    </div>

                    <div className="col-md-6 col-lg-3 backCon mx-2 my-2">
                        <img alt="" className="d-block mx-auto mb-3" src={google} style={{ width: '50px',height: '50px'}}/>
                        <a className="aCon">babakrostami76@gmail.com</a>
                    </div>
                    

                </div>

                <br/><br/><br/><br/><br/><br/>

                <FooterCustom/>

            </div>

        );
    }

    
}
