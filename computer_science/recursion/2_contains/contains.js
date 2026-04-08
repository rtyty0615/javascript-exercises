const contains = function(obj, value) {
    const arr = Object.values(obj);
    if (arr.includes(value)) {
        return true
    };
    for (const element of arr) {
        if (typeof element === 'object' && element !== null) {
            if (contains(element, value) === true) {
                return true; 
            }
        }
    }
    return false;
};

object = {
    "user": {
        "profile": {
            "username": "jdoe",
                "details": {
                "firstName": "John",
                    "lastName": "Doe"
            }
        }
    }
}
contains(object, "Doe")
  
// Do not edit below this line
// module.exports = contains;
