const bcrypt = require('bcrypt')

const hashValue = async (value) => {
    try {
        const saltRounds = 10
        const hashedValue = await bcrypt.hash(value, saltRounds)
        return hashedValue
    } catch (err) {
        console.log(err)
    }
}

const compareValue = async (value,hashedValue)=>{
    return bcrypt.compare(value,hashedValue)
}

module.exports = { hashValue , compareValue }