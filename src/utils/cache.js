import NodeCache from 'node-cache';
import User from '../models/User.js';

const cache = new NodeCache({ stdTTL: 600 });

const loadCacheFromDB = async () => {
  try {
    const users = await User.find({});
    users.forEach(user => {
      const cacheKey = `user-${user.id}`;
      cache.set(cacheKey, user);
    });
    console.log('Cache loaded from database');
  } catch (error) {
    console.error('Error loading cache from DB', error);
  }
};

const printCacheContents = () => {
  const allItems = cache.keys().map(key => cache.get(key));
  if (allItems.length === 0) {
    console.log('The memory is empty.');
  } else {
    console.log('Cached users:', JSON.stringify(allItems, null, 2));
  }
};

export default {
  get: (key) => cache.get(key),
  set: (key, value) => cache.set(key, value),
  has: (key) => cache.has(key),
  clear: () => cache.flushAll(),
  keys: () => cache.keys(),
  getAll: () => cache.keys().map(key => ({ [key]: cache.get(key) })),
  loadCacheFromDB,
  printCacheContents
};
