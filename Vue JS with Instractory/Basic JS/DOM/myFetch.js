// create a Fetch HTTP Library

class MyHTTP{
    // Get REQUEST

    async get (url_link){
        const response = await fetch(url_link);
        const resData = await response.json();
        return resData;
    }
}