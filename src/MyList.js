const MyList =({addMeal, mealPlans, deleteDay, selectedDay, setSelectedDay})=> {
    return <div>
        <div>
            <div className="top">
            <p className="head-title">Weekly</p>
            <h1> Meal </h1>
            <h3>Planner</h3>
            </div>
            <button className="button-add" onClick={addMeal}>ADD</button>
            </div>
        <div className="choise">
            {mealPlans.map(({id, title, mealForADay}) => (
                <div key={id} className={`meal ${id === selectedDay ? "selected" : "default"}`}
                onClick={()=> setSelectedDay(id)}
                >
                    <p className="title">{title}</p>
                    <p>{mealForADay.substring(0,60)}</p>
                    <button className="button-delete" onClick={()=> 
                    deleteDay(id)}>Delete</button>
                </div>
            ))}
    
        
            
        </div>
    </div>
}
export default MyList;
