function newElement(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function overflowing(elementA, elementB) {
    const a = elementA.getBoundingClientRect()
    const b = elementB.getBoundingClientRect()
    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top
    return horizontal && vertical
}

function Pufferfish1(spd) {
    let margin = -100
    const speed = spd
    const space = 1200

    const pufferfish1 = this.element = newElement('img', 'pufferfish1')
    pufferfish1.src = 'imgs/pufferfish.png'

    function setY() {
        return pufferfish1.style.marginTop = `${Math.random() * 600}px`
    } 
    
    function movement() {
        if(margin == -100) {
            setY()
        } else if(margin >= space) {
            margin = -50
            setY()
        } else {
            pufferfish1.style.marginLeft = margin + 'px'
        }
        margin += 1
    }
    setInterval(movement, speed)
}

function Pufferfish2(spd) {
    let margin = 1200
    const speed = spd
    const space = -200

    const pufferfish2 = this.element = newElement('img', 'pufferfish')
    pufferfish2.src = 'imgs/pufferfish.png'

    function setY() {
        return pufferfish2.style.marginTop = `${Math.random() * 600}px`
    } 
    
    function movement() {
        if(margin == 1200) {
            setY()
        } else if(margin <= space) {
            margin = 1100
            setY()
        } else {
            pufferfish2.style.marginLeft = margin + 'px'
        }
        margin -= 1
    }
    setInterval(movement, speed)
}

function Pufferfish3(spd) {
    let margin = 800
    const speed = spd
    const space = -200

    const pufferfish3 = this.element = newElement('img', 'pufferfish')
    pufferfish3.src = 'imgs/pufferfish.png'

    function setX() {
        return pufferfish3.style.marginLeft = `${(Math.random() * 1000)}px`
    } 
    
    function movement() {
        if(margin == 800) {
            setX()
        } else if(margin <= space) {
            margin = 750
            setX()
        } else {
            pufferfish3.style.marginTop = margin + 'px'
        }
        margin -= 1
    }
    setInterval(movement, speed)
}

function Pufferfish4(spd) {
    let margin = -200
    const speed = spd
    const space = 800

    const pufferfish4 = this.element = newElement('img', 'pufferfish')
    pufferfish4.src = 'imgs/pufferfish.png'

    function setX() {
        return pufferfish4.style.marginLeft = `${Math.random() * 1000}px`
    } 
    
    function movement() {
        if(margin == -200) {
            setX()
        } else if(margin >= space) {
            margin = -150
            setX()
        } else {
            pufferfish4.style.marginTop = margin + 'px'
        }
        margin += 1
    }
    setInterval(movement, speed)
}

function OtherCharacter1(spd) {
    let margin = -100
    const speed = spd
    const space = 1200

    const otherCharacter1 = this.element = newElement('img', 'other-character')
    otherCharacter1.src = 'imgs/sumo2.png'

    function setY() {
        return otherCharacter1.style.marginTop = `${Math.random() * 300}px`
    } 
    
    function movement() {
        if(margin == -100) {
            setY()
        } else if(margin >= space) {
            margin = -50
            setY()
        } else {
            otherCharacter1.style.marginLeft = margin + 'px'
        }
        margin += 1
    }
    setInterval(movement, speed)
}

function OtherCharacter2(spd) {
    let margin = -100
    const speed = spd
    const space = 1200

    const otherCharacter2 = this.element = newElement('img', 'other-character')
    otherCharacter2.src = 'imgs/sumo2.png'

    function setY() {
        return otherCharacter2.style.marginTop = `${(Math.random() * 300) + 300}px`
    } 
    
    function movement() {
        if(margin == -100) {
            setY()
        } else if(margin >= space) {
            margin = -50
            setY()
        } else {
            otherCharacter2.style.marginLeft = margin + 'px'
        }
        margin += 1
    }
    setInterval(movement, speed)
}

function OtherCharacter3(spd) {
    let margin = 1200
    const speed = spd
    const space = -200

    const otherCharacter3 = this.element = newElement('img', 'other-character')
    otherCharacter3.src = 'imgs/sumo2.png'

    function setY() {
        return otherCharacter3.style.marginTop = `${Math.random() * 300}px`
    } 
    
    function movement() {
        if(margin == 1200) {
            setY()
        } else if(margin <= space) {
            margin = 1100
            setY()
        } else {
            otherCharacter3.style.marginLeft = margin + 'px'
        }
        margin -= 1
    }
    setInterval(movement, speed)
}

function OtherCharacter4(spd) {
    let margin = 1200
    const speed = spd
    const space = -200

    const otherCharacter4 = this.element = newElement('img', 'other-character')
    otherCharacter4.src = 'imgs/sumo2.png'

    function setY() {
        return otherCharacter4.style.marginTop = `${(Math.random() * 300) + 300}px`
    } 
    
    function movement() {
        if(margin == 1200) {
            setY()
        } else if(margin <= space) {
            margin = 1100
            setY()
        } else {
            otherCharacter4.style.marginLeft = margin + 'px'
        }
        margin -= 1
    }
    setInterval(movement, speed)
}

function OtherCharacter5(spd) {
    let margin = 800
    const speed = spd
    const space = -200

    const otherCharacter5 = this.element = newElement('img', 'other-character')
    otherCharacter5.src = 'imgs/sumo2.png'

    function setX() {
        return otherCharacter5.style.marginLeft = `${(Math.random() * 500)}px`
    } 
    
    function movement() {
        if(margin == 800) {
            setX()
        } else if(margin <= space) {
            margin = 750
            setX()
        } else {
            otherCharacter5.style.marginTop = margin + 'px'
        }
        margin -= 1
    }
    setInterval(movement, speed)
}

function OtherCharacter6(spd) {
    let margin = 800
    const speed = spd
    const space = -200

    const otherCharacter6 = this.element = newElement('img', 'other-character')
    otherCharacter6.src = 'imgs/sumo2.png'

    function setX() {
        return otherCharacter6.style.marginLeft = `${(Math.random() * 500) + 500}px`
    } 
    
    function movement() {
        if(margin == 800) {
            setX()
        } else if(margin <= space) {
            margin = 750
            setX()
        } else {
            otherCharacter6.style.marginTop = margin + 'px'
        }
        margin -= 1
    }
    setInterval(movement, speed)
}

function OtherCharacter7(spd) {
    let margin = -200
    const speed = spd
    const space = 800

    const otherCharacter7 = this.element = newElement('img', 'other-character')
    otherCharacter7.src = 'imgs/sumo2.png'

    function setX() {
        return otherCharacter7.style.marginLeft = `${(Math.random() * 500)}px`
    } 
    
    function movement() {
        if(margin == -200) {
            setX()
        } else if(margin >= space) {
            margin = -150
            setX()
        } else {
            otherCharacter7.style.marginTop = margin + 'px'
        }
        margin += 1
    }
    setInterval(movement, speed)
}

function OtherCharacter8(spd) {
    let margin = -200
    const speed = spd
    const space = 800

    const otherCharacter8 = this.element = newElement('img', 'other-character')
    otherCharacter8.src = 'imgs/sumo2.png'

    function setX() {
        return otherCharacter8.style.marginLeft = `${(Math.random() * 500) + 500}px`
    } 
    
    function movement() {
        if(margin == -200) {
            setX()
        } else if(margin >= space) {
            margin = -150
            setX()
        } else {
            otherCharacter8.style.marginTop = margin + 'px'
        }
        margin += 1
    }
    setInterval(movement, speed)
}

function HealthyFood1() {
    const healthyFood1 = this.element = newElement('img', 'healthy-food1')
    healthyFood1.src = 'imgs/orange.png'

    healthyFood1.style.marginTop = `${Math.random() * 500}px`
    healthyFood1.style.marginLeft = `${Math.random() * 800}px`
}

function HealthyFood2() {
    const healthyFood2 = this.element = newElement('img', 'healthy-food2')
    healthyFood2.src = 'imgs/sushi3.png'

    healthyFood2.style.marginTop = `${Math.random() * 500}px`
    healthyFood2.style.marginLeft = `${Math.random() * 800}px`
}

function HealthyFood3() {
    const healthyFood3 = this.element = newElement('img', 'healthy-food3')
    healthyFood3.src = 'imgs/sushi.png'

    healthyFood3.style.marginTop = `${Math.random() * 500}px`
    healthyFood3.style.marginLeft = `${Math.random() * 800}px`
}

function HealthyFood4() {
    const healthyFood4 = this.element = newElement('img', 'healthy-food4')
    healthyFood4.src = 'imgs/onigiri.png'

    healthyFood4.style.marginTop = `${Math.random() * 500}px`
    healthyFood4.style.marginLeft = `${Math.random() * 800}px`
}

function RottenFood1() {
    const rottenFood1 = this.element = newElement('img', 'rotten-food1')
    rottenFood1.src = 'imgs/deadfish.png'

    rottenFood1.style.marginTop = `${Math.random() * 500}px`
    rottenFood1.style.marginLeft = `${Math.random() * 800}px`
}

function RottenFood2() {
    const rottenFood2 = this.element = newElement('img', 'rotten-food2')
    rottenFood2.src = 'imgs/deadfish2.png'

    rottenFood2.style.marginTop = `${Math.random() * 500}px`
    rottenFood2.style.marginLeft = `${Math.random() * 800}px`
}

function Lives() {
    this.element = newElement('span', 'lives')
    this.refreshLives = lives => {
        this.element.innerHTML = 'Lives: ' + lives
    }
    this.refreshLives(3)
}

function GameOver() {
    this.element = newElement('div', 'game-over')
}

function RunGame() {

    let numberOfLives = 3
    let score = 0
    let finalScore = 0

    function MainCharacter() {
        let modifier = 20
    
        const mainCharacter = this.element = newElement('img', 'main-character')
        mainCharacter.src = 'imgs/sumo.png'
    
        window.addEventListener('load', () => {
            mainCharacter.style.position = 'absolute'
            mainCharacter.style.left = '460px'
            mainCharacter.style.top = '220px'
        })
    
        this.getY = () => parseInt(mainCharacter.style.top.split('px')[0])
        this.getX = () => parseInt(mainCharacter.style.left.split('px')[0])
    
        window.addEventListener('keydown', (e) => {
            if(numberOfLives != 0) {
                if(e.key === 'ArrowUp') {
                    if(mainCharacter.style.top.split('px')[0] <= 0) {
                        mainCharacter.style.top = '0px'
                    } else {
                        mainCharacter.style.top = `${parseInt(mainCharacter.style.top) - modifier}px`
                    }
                } else if(e.key === 'w') {
                        if(mainCharacter.style.top.split('px')[0] <= 0) {
                            mainCharacter.style.top = '0px'
                        } else {
                            mainCharacter.style.top = `${parseInt(mainCharacter.style.top) - modifier}px`
                        }
                } else if(e.key === 'ArrowDown') {
                    if(mainCharacter.style.top.split('px')[0] >= 500) {
                        mainCharacter.style.top = '520px'
                    } else {
                        mainCharacter.style.top = `${parseInt(mainCharacter.style.top) + modifier}px`
                    }
                } else if(e.key === 's') {
                    if(mainCharacter.style.top.split('px')[0] >= 500) {
                        mainCharacter.style.top = '520px'
                    } else {
                        mainCharacter.style.top = `${parseInt(mainCharacter.style.top) + modifier}px`
                    }
                } else if(e.key === 'ArrowLeft') {
                    if(mainCharacter.style.left.split('px')[0] <= 0) {
                        mainCharacter.style.left = '0px'
                    } else {
                        mainCharacter.style.left = `${parseInt(mainCharacter.style.left) - modifier}px`
                    }
                } else if(e.key === 'a') {
                    if(mainCharacter.style.left.split('px')[0] <= 0) {
                        mainCharacter.style.left = '0px'
                    } else {
                        mainCharacter.style.left = `${parseInt(mainCharacter.style.left) - modifier}px`
                    }
                } else if(e.key === 'ArrowRight') {
                    if(mainCharacter.style.left.split('px')[0] >= 940) {
                        mainCharacter.style.left = '940px'
                    } else {
                        mainCharacter.style.left = `${parseInt(mainCharacter.style.left) + modifier}px`
                    }
                } else if(e.key === 'd') {
                    if(mainCharacter.style.left.split('px')[0] >= 940) {
                        mainCharacter.style.left = '940px'
                    } else {
                        mainCharacter.style.left = `${parseInt(mainCharacter.style.left) + modifier}px`
                    }
                }
            }
        })
    }

    function FinalScore() {
        this.element = newElement('span', 'final-score')
        this.element.innerHTML = 'FINAL SCORE: ' + finalScore
    }

    function GameOverText() {
        this.element = newElement('span', 'game-over-text')
        this.element.innerHTML = 'GAME OVER'
    }

    function Progress() {
        this.element = newElement('span', 'progress')
        this.refreshScore = score => {
            if(score < 0 || numberOfLives == 0) {
                score.preventDefault()
            } 
            this.element.innerHTML = 'Score: ' + score
        }
        this.refreshScore(0)
    }

    const main = new MainCharacter()
    const obs1 = new OtherCharacter1(5)
    const obs2 = new OtherCharacter2(7)
    const obs3 = new OtherCharacter3(6)
    const obs4 = new OtherCharacter4(8)
    const obs5 = new OtherCharacter5(5)
    const obs6 = new OtherCharacter6(8)
    const obs7 = new OtherCharacter7(7)
    const obs8 = new OtherCharacter8(9)
    const puff1 = new Pufferfish1(10)
    const puff2 = new Pufferfish2(10)
    const puff3 = new Pufferfish3(10)
    const puff4 = new Pufferfish4(10)
    const hfood1 = new HealthyFood1()
    const hfood2 = new HealthyFood2()
    const hfood3 = new HealthyFood3()
    const hfood4 = new HealthyFood4()
    const rfood1 = new RottenFood1()
    const rfood2 = new RottenFood2()
    const progress = new Progress()
    const lives = new Lives()

    document.querySelector('[game]').appendChild(main.element)
    document.querySelector('[game]').appendChild(obs1.element)
    document.querySelector('[game]').appendChild(obs2.element)
    document.querySelector('[game]').appendChild(obs3.element)
    document.querySelector('[game]').appendChild(obs4.element)
    document.querySelector('[game]').appendChild(obs5.element)
    document.querySelector('[game]').appendChild(obs6.element)
    document.querySelector('[game]').appendChild(obs7.element)
    document.querySelector('[game]').appendChild(obs8.element)
    document.querySelector('[game]').appendChild(hfood1.element)
    document.querySelector('[game]').appendChild(hfood2.element)
    document.querySelector('[game]').appendChild(hfood3.element)
    document.querySelector('[game]').appendChild(hfood4.element)
    document.querySelector('[game]').appendChild(rfood1.element)
    document.querySelector('[game]').appendChild(rfood2.element)
    document.querySelector('[game]').appendChild(puff1.element)
    document.querySelector('[game]').appendChild(puff2.element)
    document.querySelector('[game]').appendChild(puff3.element)
    document.querySelector('[game]').appendChild(puff4.element)
    document.querySelector('[game]').appendChild(progress.element)
    document.querySelector('[game]').appendChild(lives.element)
    
    this.start = () => {
        setInterval(() => {
            if(overflowing(main.element, hfood1.element)) {
                hfood1.element.style.marginTop = `${Math.random() * 500}px`
                hfood1.element.style.marginLeft = `${Math.random() * 800}px`
                progress.refreshScore(score = score + 1)
            }
            
            if(overflowing(main.element, hfood2.element)) {
                hfood2.element.style.marginTop = `${Math.random() * 500}px`
                hfood2.element.style.marginLeft = `${Math.random() * 800}px`
                progress.refreshScore(score = score + 1)
            }

            if(overflowing(main.element, hfood3.element)) {
                hfood3.element.style.marginTop = `${Math.random() * 500}px`
                hfood3.element.style.marginLeft = `${Math.random() * 800}px`
                progress.refreshScore(score = score + 1)
            }

            if(overflowing(main.element, hfood4.element)) {
                hfood4.element.style.marginTop = `${Math.random() * 500}px`
                hfood4.element.style.marginLeft = `${Math.random() * 800}px`
                progress.refreshScore(score = score + 1)
            }

            if(overflowing(main.element, rfood1.element)) {
                rfood1.element.style.marginTop = `${Math.random() * 500}px`
                rfood1.element.style.marginLeft = `${Math.random() * 800}px`
                progress.refreshScore(score = score - 1)
            }

            if(overflowing(main.element, rfood2.element)) {
                rfood2.element.style.marginTop = `${Math.random() * 500}px`
                rfood2.element.style.marginLeft = `${Math.random() * 800}px`
                progress.refreshScore(score = score - 1)
            }

            if(overflowing(main.element, obs1.element)) {
                const initialVelo = 20
                let stopping = 0

                function movement() {
                    if(initialVelo != stopping) {
                        main.element.style.left = parseInt(main.element.style.left.split('px')[0]) + initialVelo - stopping + 'px'
                        stopping += 1
                        if(parseInt(main.element.style.left.split('px')[0]) >= 940) {
                            main.element.style.left = '940px'
                        }
                    }
                }
                setInterval(movement, 10)
            }

            if(overflowing(main.element, obs2.element)) {
                const initialVelo = 20
                let stopping = 0

                function movement() {
                    if(initialVelo != stopping) {
                        main.element.style.left = parseInt(main.element.style.left.split('px')[0]) + initialVelo - stopping + 'px'
                        stopping += 1
                        if(parseInt(main.element.style.left.split('px')[0]) >= 940) {
                            main.element.style.left = '940px'
                        }
                    }
                }
                setInterval(movement, 10)
            }

            if(overflowing(main.element, obs3.element)) {
                const initialVelo = -20
                let stopping = 0

                function movement() {
                    if(initialVelo != stopping) {
                        main.element.style.left = parseInt(main.element.style.left.split('px')[0]) + initialVelo - stopping + 'px'
                        stopping -= 1
                        if(parseInt(main.element.style.left.split('px')[0]) <= 0) {
                            main.element.style.left = '0px'
                        }
                    }
                }
                setInterval(movement, 10)
            }

            if(overflowing(main.element, obs4.element)) {
                const initialVelo = -20
                let stopping = 0

                function movement() {
                    if(initialVelo != stopping) {
                        main.element.style.left = parseInt(main.element.style.left.split('px')[0]) + initialVelo - stopping + 'px'
                        stopping -= 1
                        if(parseInt(main.element.style.left.split('px')[0]) <= 0) {
                            main.element.style.left = '0px'
                        }
                    }
                }
                setInterval(movement, 10)
            }

            if(overflowing(main.element, obs5.element)) {
                const initialVelo = -20
                let stopping = 0

                function movement() {
                    if(initialVelo != stopping) {
                        main.element.style.top = parseInt(main.element.style.top.split('px')[0]) + initialVelo - stopping + 'px'
                        stopping -= 1
                        if(parseInt(main.element.style.top.split('px')[0]) <= 0) {
                            main.element.style.top = '0px'
                        }
                    }
                }
                setInterval(movement, 10)
            }

            if(overflowing(main.element, obs6.element)) {
                const initialVelo = -20
                let stopping = 0

                function movement() {
                    if(initialVelo != stopping) {
                        main.element.style.top = parseInt(main.element.style.top.split('px')[0]) + initialVelo - stopping + 'px'
                        stopping -= 1
                        if(parseInt(main.element.style.top.split('px')[0]) <= 0) {
                            main.element.style.top = '0px'
                        }
                    }
                }
                setInterval(movement, 10)
            }

            if(overflowing(main.element, obs7.element)) {
                const initialVelo = 20
                let stopping = 0

                function movement() {
                    if(initialVelo != stopping) {
                        main.element.style.top = parseInt(main.element.style.top.split('px')[0]) + initialVelo - stopping + 'px'
                        stopping += 1
                        if(parseInt(main.element.style.top.split('px')[0]) >= 520) {
                            main.element.style.top = '520px'
                        }
                    }
                }
                setInterval(movement, 10)
            }

            if(overflowing(main.element, obs8.element)) {
                const initialVelo = 20
                let stopping = 0

                function movement() {
                    if(initialVelo != stopping) {
                        main.element.style.top = parseInt(main.element.style.top.split('px')[0]) + initialVelo - stopping + 'px'
                        stopping += 1
                        if(parseInt(main.element.style.top.split('px')[0]) >= 520) {
                            main.element.style.top = '520px'
                        }
                    }
                }
                setInterval(movement, 10)
            }

            if(overflowing(main.element, puff1.element)) {
                if(numberOfLives == 3) {
                    lives.refreshLives(numberOfLives = 2)
                    puff1.element.remove()
                } else if(numberOfLives == 2) {
                    lives.refreshLives(numberOfLives = 1)
                    puff1.element.remove()
                } else if(numberOfLives == 1) {
                    lives.refreshLives(numberOfLives = 0)
                    puff1.element.remove()
                }
            }

            if(overflowing(main.element, puff2.element)) {
                if(numberOfLives == 3) {
                    lives.refreshLives(numberOfLives = 2)
                    puff2.element.remove()
                } else if(numberOfLives == 2) {
                    lives.refreshLives(numberOfLives = 1)
                    puff2.element.remove()
                } else if(numberOfLives == 1) {
                    lives.refreshLives(numberOfLives = 0)
                    puff2.element.remove()
                }
            }

            if(overflowing(main.element, puff3.element)) {
                if(numberOfLives == 3) {
                    lives.refreshLives(numberOfLives = 2)
                    puff3.element.remove()
                } else if(numberOfLives == 2) {
                    lives.refreshLives(numberOfLives = 1)
                    puff3.element.remove()
                } else if(numberOfLives == 1) {
                    lives.refreshLives(numberOfLives = 0)
                    puff3.element.remove()
                }
            }

            if(overflowing(main.element, puff4.element)) {
                if(numberOfLives == 3) {
                    lives.refreshLives(numberOfLives = 2)
                    puff4.element.remove()
                } else if(numberOfLives == 2) {
                    lives.refreshLives(numberOfLives = 1)
                    puff4.element.remove()
                } else if(numberOfLives == 1) {
                    lives.refreshLives(numberOfLives = 0)
                    puff4.element.remove()
                }
            }

            if(numberOfLives == 0 && document.querySelectorAll('.game-over').length == 0) {
                finalScore = score
                const gameover = new GameOver()
                const finalscore = new FinalScore()
                const gameOverText = new GameOverText()
                document.querySelector('[game]').appendChild(gameover.element)
                document.querySelector('.game-over').appendChild(gameOverText.element)
                document.querySelector('.game-over').appendChild(finalscore.element)

                var imgs = document.getElementsByTagName('img')

                for(let i = 0; i < imgs.length; i++) {
                    imgs[i].setAttribute('id', 'game-over-img')
                }
            }
        }, 150)
    }
}

new RunGame().start()



