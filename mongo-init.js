db = db.getSiblingDB('myAppDb');

// Check if the user already exists
if (!db.getUser('myAppUser')) {
  // Create the user only if it doesn't exist
  db.createUser({
    user: 'myAppUser',
    pwd: 'myAppPassword',
    roles: [{ role: 'readWrite', db: 'myAppDb' }]
  });
}
