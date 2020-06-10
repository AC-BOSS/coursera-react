import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }
    renderDish(dish) {
        if (dish != null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    renderComments(dish){
        if(dish == null){
            return(<div></div>);
        }
        const comm = dish.comments.map((customer) => {
            return(
                <ul className="list-unstyled">
                    <li>{customer.comment}</li>
                    <li>-- {customer.author}, {customer.date}</li>
                </ul>
            );
        });
        return(
            <div  className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {comm}
            </div>
        );
    }
    render(){
        return(
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                {this.renderComments(this.props.dish)}
            </div>
        );
    }
}

export default DishDetail