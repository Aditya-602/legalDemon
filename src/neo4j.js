import neo4j from 'neo4j-driver';

const driver = neo4j.driver(
  'neo4j://127.0.0.1:7687', 
  neo4j.auth.basic('neo4j', 'meow and meow') 
);

export const runQuery = async (cypherQuery) => {
  const session = driver.session();
  try {
    const result = await session.run(cypherQuery);
    return result.records.map(record => record.toObject());
  } finally {
    await session.close();
  }
};