const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('james', 42, 'duganstitzel@gmai.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of manager', () => {
    const manager = new Manager('james', 42, 'duganstitzel@gmai.com');
    expect(manager.getRole()).toEqual("Manager");
}); 

test('creates an manager object', () => {
    const manager = new Manager('james', 42, 'duganstitzel@gmai.com');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});

test('gets manager name', () => {
    const manager = new Manager('james', 42, 'duganstitzel@gmai.com');

    expect(manager.getName()).toEqual(expect.any(String));
});

test('gets manager ID', () => {
    const manager = new Manager('james', 42, 'duganstitzel@gmai.com');

    expect(manager.getId()).toEqual(expect.any(Number));
});

test('gets manager email', () => {
    const manager = new Manager('james', 42, 'duganstitzel@gmai.com');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});

test('gets role of manager', () => {
    const manager = new Manager('james', 42, 'duganstitzel@gmai.com');

    expect(manager.getRole()).toEqual("Manager");
});