import moment from 'moment';

export default [{
    id: '123',
    description: 'xbox',
    note: '',
    amount: 1120,
    createdAt: 0
},{
    id: '456',
    description: 'toyota camry 60 2020',
    note: '',
    amount: 1950000,
    createdAt: moment(0).subtract(4,'days').valueOf()
},{
    id: '789',
    description: 'motocycle',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(9,'days').valueOf() //moment(0) degen 1 jan 1970,pribavlyaem 9 dnei.This needs to be a number i'll be using a valueOf()
}]


