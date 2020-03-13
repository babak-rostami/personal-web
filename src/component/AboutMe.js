import React,{Component} from 'react';
import pic1 from './../assets/img/pic1.jpg'


export default class AboutMe extends Component{
    render(){
        return(
            <div className="container shadow my-5" style={{background:'#f5f5f5'}}>
                <div className="row">
                    

                    <div className="col-6">
                        <h1 className="text-right pt-2">درباره من</h1>
                        <ul className="text-right">
                            <li>ساکن رشت</li>
                            <li>دانشجوی رشته کامپیوتر دانشگاه گیلان</li>
                            <li> آشنایی با بازی سازی و نرم افزار یونیتی </li>
                            <li>آشنا با فتوشاپ و ایلوستریتور</li>
                            <li>علاقه مند به برنامه نویسی</li>
                        </ul>
                    </div>

                    <div className="col-6">
                        <img alt="" src={pic1}/>
                    </div>
                    
                </div>
            </div>
        );
    }
}