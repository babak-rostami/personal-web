import React,{Component} from 'react'

export default class SCard extends Component{


    render(){
        const {body,image,title} = this.props;
        const listItems = body.map((body,index) =>
        <li key={index}>
            {body}
        </li>
  );
        return(
            
            <div className="card text-center col-lg-3 col-md-6 col-sm-12 card-custom mx-1 my-2 shadow">

                <div className="card-body">
                    <i className="material-icons">{image}</i>
                    <h5 className="card-title mt-3 pt-2" style={{background:'#efecec'}}>{title}</h5>
                    <ul className="mt-3">{listItems}</ul>
                </div>

            </div>
        );
    }
}