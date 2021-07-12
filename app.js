// Storage Controller


// Item Controller
const ItemCtrl = (function() {
    // Item constrctor
    const Item = function(id, name, calories) {
        this.id = id
        this.name = name
        this.calories = calories
    }

    // Data structure / State
    const data = {
        items: [
            {id: 0, item: 'Steak Dinner', calories: 1200},
            {id: 1, item: 'Cookie', calories: 400},
            {id: 2, item: 'Eggs', calories: 300}
        ],
        currentItem: null,
        totalCalories: 0
    }

    // Public methods
    return {
        logData: function() {
            return data
        }
    }
})()


// UI Controller
const UICtrl = (function() {
    
    // Public methods
    return {

    }
})()


// App Controller
const App = (function(ItemCtrl, UICtrl) {
    
    // Public methods
    return {
        init: function() {
            console.log('Initializing app ...')
        }
    }

})(ItemCtrl, UICtrl)


// Initialize app
App.init()