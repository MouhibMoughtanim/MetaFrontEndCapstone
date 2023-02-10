
type state = {
    date? : string | number | readonly string[] | null
    time : string ,
    guests : number,
    occasion :string
}
type action={
    type : "CHOOSE_DATE"|"CHOOSE_TIME"|"CHOOSE_NUMBER_OF_GUESTS"|"CHOOSE_OCCASION",
    value : string | number | readonly string[]
}




export const initialState:state = {
       date : "",
       time : "",
       guests : 0,
       occasion : "" 

}

export const reducer = (state : state ,action : action) => {
    
    switch (action.type) {
        case "CHOOSE_DATE":
            return {
                ...state,
                date : action.value
            }
        case "CHOOSE_TIME":
            return {
                    ...state,
                    time : action.value
                }

        case "CHOOSE_NUMBER_OF_GUESTS":
            return {
                    ...state,
                    guests : action.value
                        }

        case "CHOOSE_OCCASION":
            return {
                    ...state,
                    occasion : action.value
                }
    
        default:
            throw Error('Unknown action: ' + action.type);

    }

}

