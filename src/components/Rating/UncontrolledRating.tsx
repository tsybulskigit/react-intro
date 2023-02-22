import React, {useState} from "react";

type RatingPropsType = {
    value?: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {

    let [rating, setRating] = useState(0)


    return (
        <div>
            <Star selected={rating > 0} callback={() => {
                setRating(1)
            }}/>
            <Star selected={rating > 1} callback={() => {
                setRating(2)
            }}/>
            <Star selected={rating > 2} callback={() => {
                setRating(3)
            }}/>
            <Star selected={rating > 3} callback={() => {
                setRating(4)
            }}/>
            <Star selected={rating > 4} callback={() => {
                setRating(5)
            }}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    callback: () => void
}

function Star(props: StarPropsType) {
    const StarOnClickHandler = () => {
        props.callback()
    }

    if (props.selected) {
        return <span onClick={StarOnClickHandler}><b>star </b></span>
    } else {
        return <span onClick={StarOnClickHandler}>star </span>
    }

}