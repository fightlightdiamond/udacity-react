// isUtensilAvailable.js

var utensils = ['fork', 'knife', 'spoon'];

function isUtensilAvailable(utensil){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            utensils.includes(utensil)
                ? resolve(true)
                : reject('No utensils found.')
        }, 20);
    });
}

module.exports = isUtensilAvailable;
