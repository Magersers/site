const { AbilityBuilder } = require('casl');


export default function(type) {
    AbilityBuilder.define(
        {subjectName: item => item.roles[0].name},
        can => {
        switch (type) {
            case 'isAdmin':
                can(['read', ], 'Post');
                break;
            case 'isStaff':
                break;
            case 'isMember':
                break;
            default:
                can([], 'Post');
                break;
        }
    });
}