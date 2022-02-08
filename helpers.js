const aws = require("aws-sdk");

function getEc2(params, settings) {
    return new aws.EC2({
        region: parseAutocomplete(params.REGION) || settings.REGION,
        accessKeyId: params.AWS_ACCESS_KEY_ID || settings.AWS_ACCESS_KEY_ID,
        secretAccessKey: params.AWS_SECRET_ACCESS_KEY || settings.AWS_SECRET_ACCESS_KEY,
    });
}

function getLightsail(params, settings) {
    return new aws.Lightsail({
        region: parseAutocomplete(params.REGION) || settings.REGION,
        accessKeyId: params.AWS_ACCESS_KEY_ID || settings.AWS_ACCESS_KEY_ID,
        secretAccessKey: params.AWS_SECRET_ACCESS_KEY || settings.AWS_SECRET_ACCESS_KEY,
    });
}

function parseAutocomplete(value) {
    if (!value) return undefined;
    if (value.id) return value.id;
    return value;
}

module.exports = {
    getEc2,
    getLightsail
}
