const MyIngredients =({selectedDay, updateDay})=> {

    const editMyMeal = (myInput, value) => {
        updateDay({
            ...selectedDay,
            [myInput]:value
        })
    }
    if (!selectedDay) return <p className="plan"> Plan your week ahead of time!</p>
    return (
    <div className="whole-plan">
        <input
        className="myInput"
        placeholder="Today is ..."
        id="title" 
        value = {selectedDay.title}
        onChange = {(e) => editMyMeal("title", e.target.value)}
        />

        <textarea
        placeholder="Whrite your meal plan here..."
        id="mealForADay"
        value={selectedDay.mealForADay}
        onChange={(e) =>editMyMeal("mealForADay", e.target.value)}
        />

        <textarea 
        placeholder="List of ingredients..."
        id="mealForADay"
        value={selectedDay.ingredients}
        onChange={(e) =>editMyMeal("ingredients", e.target.value)}
        />
    </div>
    )
}
export default MyIngredients;