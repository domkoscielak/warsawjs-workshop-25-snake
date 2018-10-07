import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function doItemsCollide(a, b) {
    const minRequiredDistance = (a.size / 2) + (b.size / 2);

    return Math.abs(a.x - b.x) < minRequiredDistance
    && Math.abs(a.y - b.y) < minRequiredDistance;
}

class App extends Component {
    static defaultProps = {
        width: 400,
        height: 300,
        snakeElSize: 15,
        fruitSize: 25,
        fruitMaxAge: 30,
        speed: 150
    }
    constructor(props) {
		super(props);
		this.state = {
            fruits: [],
            running: true,
            over: false,
            snakeDirection: [0,-1],
            snakeGrowth: 0,
            score: 0,
            statusClass: '',
            snakeSegments: [
                {
                    size: this.props.snakeElSize,
                    x: 100,
                    y: 100
                },
                {
                    size: this.props.snakeElSize,
                    x: 100,
                    y: 110
                },
                {
                    size: this.props.snakeElSize,
                    x: 100,
                    y: 120
                }
            ]
		};
	}

    hasCollision(item) {
        return this.state.snakeSegments.some(segment => doItemsCollide(item, segment));
    }

    selfCollision() {
        return this.state.snakeSegments.slice(1).some(segment => doItemsCollide(this.state.snakeSegments[0], segment));
    }

    componentDidMount(){
        const tickInterval = setInterval(()=>{
            this.tick();
        },this.props.speed)

        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.setState({
                        snakeDirection: [-1,0]
                    })
                    break;
                case 'ArrowRight':
                    this.setState({
                        snakeDirection: [1,0]
                    })
                    break;
                case 'ArrowDown':
                    this.setState({
                        snakeDirection: [0,1]
                    })
                    break;
                case 'ArrowUp':
                    this.setState({
                        snakeDirection: [0,-1]
                    })
                    break;
                default:

            }
        });

    }

    createFruit = ()=>{
        this.setState({
            fruits: this.state.fruits.concat([
                {
                    age: 0,
                    size: this.props.fruitSize,
                    x: Math.random() * this.props.width,
                    y: Math.random() * this.props.height
                }
            ])
        })
    }

    checkAge = (age)=> {
        return age < this.props.fruitMaxAge;
    }

    tick = ()=>{
        if(!this.state.running){
            return;
        }
        const snakeDirection = this.state.snakeDirection;
        const snakeHead = this.state.snakeSegments[0];
        this.setState({
            snakeSegments: [
                {
                    size: snakeHead.size,
                    x: (this.props.width + snakeHead.x + snakeHead.size * snakeDirection[0]) % this.props.width ,
                    y: (this.props.height + snakeHead.y + snakeHead.size * snakeDirection[1]) % this.props.height
                },
                ...this.state.snakeSegments.slice(0,-1)
            ]
        })

        //add fruits to game stage
        if(Math.random() <= 0.1){
            this.createFruit();
        }

        //check fruits age
        const activeFruits = this.state.fruits.filter((fruits)=>{
            return fruits.age < this.props.fruitMaxAge ;
        })

        //mature fruits
        this.setState({
            fruits: activeFruits.map(fruit => ({
                ...fruit,
                age: fruit.age + 1
            }))
        })

        //check for collisions
        this.state.fruits.map((fruit,index)=>{
            if(this.hasCollision(fruit)){
                fruit.age = 41;
                const snakeDirection = this.state.snakeDirection;
                const snakeHead = this.state.snakeSegments[0];
                this.setState({
                    score: this.state.score + 1,
                    statusClass: 'scored',
                    snakeSegments: [
                        {
                            size: snakeHead.size,
                            x: (this.props.width + snakeHead.x + snakeHead.size * snakeDirection[0]) % this.props.width ,
                            y: (this.props.height + snakeHead.y + snakeHead.size * snakeDirection[1]) % this.props.height
                        },
                        ...this.state.snakeSegments
                    ]
                })

                setTimeout(()=>{
                    this.setState({
                        statusClass: ''
                    })
                },150)


            }
        })

        //check for self collisions
        if(this.selfCollision()){
            this.setState({
                running: false,
                over: true
            })
            console.log('Game Over');
        }


    }

    togglePlay = ()=>{
        this.setState({
            running: !this.state.running
        })
    }

    render() {
        return (
          <div className="game">
            <header className="game__header">
              Score: {this.state.score} {this.state.over}

              <i onClick={this.togglePlay} className={(this.state.running)? "fas fa-pause-circle" : "fas fa-play-circle" }></i>

            </header>

            <div className={"game-stage "+this.state.statusClass} >

                <svg width={this.props.width} height={this.props.height}>
                    <rect width={this.props.width} height={this.props.height} className="game-stage__body"></rect>
                    {this.state.snakeSegments.map((segment, index)=>{
    					return(
    						<circle key={index} cx={segment.x} cy={segment.y} r={segment.size/2} className={"snake__head snake__head--el"+index}></circle>
    					)
    				})}
                    {this.state.fruits.map((fruit, index)=>{
    					return(
    						<circle key={index} cx={fruit.x} cy={fruit.y} r={fruit.size/2} className={"fruit fruit--el"+index}></circle>
    					)
    				})}

                </svg>
            </div>
            <div  className={(!this.state.over)? "game-over" : "game-over show" }>
                <h2>GAME OVER!</h2>
                <h3>Final Score: {this.state.score}</h3>
            </div>
          </div>
        );
    }
}

export default App;
