import React,{Component} from 'react';

export default class TopSlide extends Component{

    render(){
        return(
            <div className="container-fluid col-12 custom-container-fluid d-flex align-items-center">
                <div className="cover-header"></div>

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <h1 className="text-header">سلام خوش اومدین</h1>
                            <h4 className="text-header">بابک هستم</h4>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}