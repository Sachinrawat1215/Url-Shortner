const Post = require('../Schema/urlSchema');

const setUrl = async (request, response) => {
    try {
        const urlData = await new Post(request.body);
        urlData.save();
        return response.status(200).json(mainData);
    } catch (error) {
        response.status(500).json(error);
    }
}

const setId = async (request, response) => {
    try {
        let mainid = request.params.id;
        let mainData = await Post.find({code: mainid});
        return response.status(200).json(mainData);
    } catch (error) {
        response.status(500).json(error);
    }
}

module.exports = {
    seturl: setUrl,
    setid: setId
}