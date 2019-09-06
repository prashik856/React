import React, {Component} from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap';

class DishDetail extends Component{

    renderDish(dish){
        console.log('Inside rederDish');
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle> {dish.name} </CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                </Card>
            </div>
            );
        }

    renderComments(dish){
        const comment = dish.comments.map( (comment) => {
            return(
                <li key={comment.id}>
                    {comment.author},{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                </li>
                );
        });
        if(dish != null){
            console.log('Inside renderComments');
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments </h4>
                     <ul>
                         {comment}
                     </ul>
                </div>    
                );
            }
        else{
            return(
                <div> </div>
            );
        }
    }

    render(){
        const dish = this.props.dish;
        console.log("Dish Detail Component invoked");
        if(dish != null){
            return(
                <div className="container">
                    <div className="row">
                        {this.renderDish(dish)}
                    </div>
                </div>
            );
        }
        
        else{
            return(
                <div> </div>
            );
        }
    }
}

export default DishDetail;