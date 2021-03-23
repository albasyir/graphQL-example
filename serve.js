const { ApolloServer, gql } = require("apollo-server");

// example patients data ( from database or somewhere )
const patients = () => [
  {
    KTP: "167199999999",
    name: "X",
    infected_at: "Forever",
  },
  {
    KTP: "167199999888",
    name: "Y",
    infected_at: "Z",
  },
];

const records = () => [
  {
    name: "X",
    location: "-2.9177599,104.7453001",
    time: "2018-11-01 13.12.12",
  },
  {
    name: "X",
    location: "-2.9177599,105.7453001",
    time: "2018-11-01 13.12.13",
  },
  {
    name: "Y",
    location: "-2.9177599,104.7453001",
    time: "2018-11-01 13.12.12",
  },
  {
    name: "Y",
    location: "-2.9177599,105.7453001",
    time: "2018-11-01 13.12.13",
  },
];

// Create data structure
const typeDefs = gql`
  # We have Pasien Structure
  type Patient {
    KTP: ID
    name: String
    infected_at: String
    records: [Record]
  }

  type Record {
    name: String
    location: String
    time: String
  }

  # We open query here
  type Query {
    patients: [Patient]
  }
`;

// Resolvers for making server know what the data is
const resolvers = {
  Query: {
    patients,
  },
};

new ApolloServer({ typeDefs, resolvers }).listen().then((server) => {
  console.log("Start at : " + server.url);
});
