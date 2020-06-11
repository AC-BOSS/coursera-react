import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
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
    function RenderComments({dish}){
        if(dish == null){
            return(<div></div>);
        }
        const comm = dish.comments.map((customer) => {
            return(
                <ul className="list-unstyled">
                    <li>{customer.comment}</li>
                    <li>-- {customer.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(customer.date)))}</li>
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
    const DishDetail = (props) => {
        return(
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {/* {this.renderDish(this.props.dish)} */}
                        <RenderDish dish={props.dish}/>
                    </div>
                    <RenderComments dish={props.dish}/>
                    {/* {this.renderComments(this.props.dish)} */}
                </div>
            </div>
        );
    }


export default DishDetail