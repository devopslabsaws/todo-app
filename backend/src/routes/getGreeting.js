const GREETING = 'Hello my dudes!!!!!!!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
