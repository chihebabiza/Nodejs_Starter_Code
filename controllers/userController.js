const getHome = (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        console.error('Error fetching home page:', error);
    }
};

const userControllers = { getHome }
export default userControllers;