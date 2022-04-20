import business from '../business/business.container';
const postEndpoint = (router) => {
    router.get('/api/posts', async (request, response, next) => {
        try {
            let result = await business.getPostManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.post('/api/post', async (request, response, next) => {
        try {
            console.log(request.body)
            let result = await business.getPostManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });
};
export default postEndpoint;

