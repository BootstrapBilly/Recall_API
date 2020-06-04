exports.stringify = (data) => {

    if(!data) return data //if the data is null or falsish, do not modify it

    else return data.toString()//otherwise return the given data as a string
}