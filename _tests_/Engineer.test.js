const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('james', 42, 'duganstitzel@gmai.com');
    expect(engineer.officeNumber).toEqual(expect.any(Number));
});

test('gets role of engineer', () => {
    const engineer = new Engineer('james', 42, 'duganstitzel@gmai.com');
    expect(engineer.getRole()).toEqual("Engineer");
}); 

test('creates an engineer object', () => {
    const engineer = new Engineer('james', 42, 'duganstitzel@gmai.com');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

test('gets engineer name', () => {
    const engineer = new Engineer('james', 42, 'duganstitzel@gmai.com');

    expect(engineer.getName()).toEqual(expect.any(String));
});

test('gets engineer ID', () => {
    const engineer = new Engineer('james', 42, 'duganstitzel@gmai.com');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('gets engineer email', () => {
    const engineer = new Engineer('james', 42, 'duganstitzel@gmai.com');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test('gets role of engineer', () => {
    const engineer = new Engineer('james', 42, 'duganstitzel@gmai.com');

    expect(engineer.getRole()).toEqual("Engineer");
});