import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [right, setRight] = useState<number>(d6());
    const [left, setLeft] = useState<number>(d6());
    //const [visible, setVisible] = useState<boolean>(false);
    let message = "";
    while (right === left) {
        setRight(d6());
        setLeft(d6());
    }
    function rollLeft() {
        setLeft(d6);
    }
    function rollRight() {
        setRight(d6);
    }
    if (right == left) {
        if (left == 1) {
            message = "Lose";
            //setVisible(true);
        } else {
            message = "Win";
            //setVisible(true);
        }
    }
    return (
        <div>
            <div>
                <span data-testid="left-die">
                    <Button onClick={rollLeft}>Roll Left</Button>
                </span>
            </div>
            <div>
                <span data-testid="right-die">
                    <Button onClick={rollRight}>Roll Right</Button>
                </span>
            </div>
            {message && <div>{message}</div>}
        </div>
    );
}

/*
You will need two states, one for each die.
Each die’s value should be rendered in the View in a span tag of their own, with the first dice having the data-testid of left-die and the second dice having the data-testid of right-die.
You will need two “Roll” buttons (labelled Roll Left and Roll Right).
Clicking a Roll button will change the value for the corresponding dice using the provided d6 function.
The initial values of the dice cannot be the same.
When the two states are equal but ARE both ones, render a message that includes the word Lose.
When the two states are equal but are NOT both ones, render a message that includes the word Win.
If you do all these and are still not passing all tests, read the test file, it is a good practice! In much of software engineering, the tests are the product spec.
*/
